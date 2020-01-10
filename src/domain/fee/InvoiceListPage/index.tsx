import * as React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import { withApollo } from 'react-apollo';

import { SEARCH_INVOICE_ONTYPE } from '../_queries/SearchInvoiceOnType';
import {InvoiceListPage} from './InvoiceListPage'
import { checkServerIdentity } from 'tls';

class Invoice extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeTab: 0,
            invoiceList: null
        };
        this.toggleTab = this.toggleTab.bind(this); 
    }

    async toggleTab (tabNo: any, inType: any) {
        this.setState({
            invoiceList: null,
            activeTab: tabNo,            
        });
        
        let bid = 1951; 
        let aid = 1701;
        let cid = 1851;

        if(tabNo === 0 || tabNo === 1 || tabNo === 2 || tabNo === 3 ){
            const { data } = await this.props.client.query({
                query: SEARCH_INVOICE_ONTYPE,
                variables: { 
                    branchId: bid,
                    academicYearId: aid,
                    collegeId: cid,
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
        const { activeTab, invoiceList} = this.state;
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
                            invoiceList !== null && (
                                <InvoiceListPage type="Total Invoice" totalRecords={invoiceList.searchInvoiceOnType.length} data={invoiceList.searchInvoiceOnType}></InvoiceListPage>
                            )
                        } 
                    </TabPane>
                    <TabPane tabId={1}>
                        {
                            invoiceList !== null && (
                                <InvoiceListPage type="Total Paid Invoice" totalRecords={invoiceList.searchInvoiceOnType.length} data={invoiceList.searchInvoiceOnType}></InvoiceListPage>
                            )
                        } 
                    </TabPane>
                    <TabPane tabId={2}>
                        {
                            invoiceList !== null && (
                                <InvoiceListPage type="Total Unpaid Invoice" totalRecords={invoiceList.searchInvoiceOnType.length} data={invoiceList.searchInvoiceOnType}></InvoiceListPage>
                            )
                        } 
                    </TabPane>
                    <TabPane tabId={3}>
                        {
                            invoiceList !== null && (
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