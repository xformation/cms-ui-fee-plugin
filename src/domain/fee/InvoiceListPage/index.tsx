import * as React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import { withApollo } from 'react-apollo';

import { SEARCH_INVOICE_ONTYPE } from '../_queries/SearchInvoiceOnType';
import {InvoiceListPage} from './InvoiceListPage'
import wsCmsBackendServiceSingletonClient from '../../../wsCmsBackendServiceClient';


export interface InvoiceProps extends React.HTMLAttributes<HTMLElement>{
    [data: string]: any;
    user?: any,
}

class Invoice<T = {[data: string]: any}> extends React.Component<InvoiceProps, any> {
    constructor(props: InvoiceProps)  {
        super(props);
        this.state = {
            activeTab: 0,
            invoiceList: null,
            branchId: null,
            academicYearId: null,
            departmentId: null,
            user: this.props.user
        };
        this.toggleTab = this.toggleTab.bind(this); 
        this.registerSocket = this.registerSocket.bind(this);
    }

    async componentDidMount(){
        await this.registerSocket();
    }

    registerSocket() {
        const socket = wsCmsBackendServiceSingletonClient.getInstance();

        socket.onmessage = (response: any) => {
            let message = JSON.parse(response.data);
            console.log("1. message received from server ::: ", message);
            this.setState({
                branchId: message.selectedBranchId,
                academicYearId: message.selectedAcademicYearId,
                departmentId: message.selectedDepartmentId,
            });
            console.log("1. branchId: ",this.state.branchId);
            console.log("1. ayId: ",this.state.academicYearId);  
        }
    
        socket.onopen = () => {
           console.log("1. Opening websocekt connection on invoice index.tsx. User : ",this.state.user);
           socket.send(this.state.user.login);
        }
    
        window.onbeforeunload = () => {
            console.log("1. Closing websocekt connection on invoice index.tsx");
        }
    }

    async toggleTab (tabNo: any, inType: any) {
        this.setState({
            invoiceList: null,
            activeTab: tabNo,            
        });

        if(tabNo === 0 || tabNo === 1 || tabNo === 2 || tabNo === 3 ){
            const { data } = await this.props.client.query({
                query: SEARCH_INVOICE_ONTYPE,
                variables: { 
                    branchId: this.state.branchId,
                    academicYearId:  this.state.academicYearId,
                    invoiceType: inType
                 },
                 fetchPolicy: 'no-cache'
            })
            
            this.setState({
                invoiceList: data,
            });
        }
        this.setState({
            activeTab: tabNo,
        });
    }
    render(){
        const { activeTab, invoiceList,user} = this.state;
        return(
            <section className="tab-container row vertical-tab-container">
            <Nav tabs className="pl-3 pl-3 mb-4 mt-4 col-sm-2">
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 0 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(0, 'TOTAL'); }} >
                            Total Invoice
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 1 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(1, 'PAID'); }} >
                            Paid Invoice
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 2 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(2, 'UNPAID'); }} >
                           Unpaid Invoice
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`vertical-nav-link ${activeTab === 3 ? 'side-active' : ''}`} onClick={() => { this.toggleTab(3, 'CANCELED'); }} >
                            Cancelled Invoice
                        </NavLink>
                    </NavItem>
                   
                </Nav>
                <TabContent activeTab={activeTab} className="col-sm-9 border-left p-t-1"> 
                    <TabPane tabId={0}>
                        {
                          user !== null && invoiceList !== null && (
                                <InvoiceListPage type="Total Invoice" totalRecords={invoiceList.searchInvoiceOnType.length} data={invoiceList.searchInvoiceOnType}></InvoiceListPage>
                            )
                        } 
                    </TabPane>
                    <TabPane tabId={1}>
                        {
                          user !== null && invoiceList !== null && (
                                <InvoiceListPage type="Total Paid Invoice" totalRecords={invoiceList.searchInvoiceOnType.length} data={invoiceList.searchInvoiceOnType}></InvoiceListPage>
                            )
                        } 
                    </TabPane>
                    <TabPane tabId={2}>
                        {
                           user !== null && invoiceList !== null && (
                                <InvoiceListPage type="Total Unpaid Invoice" totalRecords={invoiceList.searchInvoiceOnType.length} data={invoiceList.searchInvoiceOnType}></InvoiceListPage>
                            )
                        } 
                    </TabPane>
                    <TabPane tabId={3}>
                        {
                           user !== null && invoiceList !== null && (
                                <InvoiceListPage type="Total Cancelled Invoice" totalRecords={invoiceList.searchInvoiceOnType.length} data={invoiceList.searchInvoiceOnType}></InvoiceListPage>
                            )
                        } 
                    </TabPane>
                </TabContent>
            </section>
        );
    }
}

export default withApollo(Invoice)