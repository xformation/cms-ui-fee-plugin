import * as React from 'react';
// import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {withApollo} from 'react-apollo';
import InvoiceListPage from './InvoiceListPage';
import FeeSetup from './FeeSetup/FeeSetup';
import FeeSetting from './FeeSetting/FeeSetting';
import { FaUserGraduate } from 'react-icons/fa';
import '../../css/tabs.css';
import wsCmsBackendServiceSingletonClient from '../../wsCmsBackendServiceClient';
import {
 
  CREATE_FEE_SETUP_DATA_CACHE,
  
} from './_queries';


export interface FeeProps extends React.HTMLAttributes<HTMLElement>{
  [data: string]: any;
  user?: any,
}

 class FeesTab extends React.Component<FeeProps, any> {
  constructor(props: FeeProps) {
    super(props);
    this.state = {
      activeTab: 0,
      user: this.props.user,
      feeFilterCacheList: null,
      departmentList: null,
      batchList: null,
      studentTypeList: null,
      genderList: null,
      branchId: null,
      academicYearId: null,
      departmentId: null,
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.registerSocket = this.registerSocket.bind(this);
    this.getFeeFilterCache = this.getFeeFilterCache.bind(this);
  }

  async componentDidMount(){
    await this.registerSocket();
    await this.getFeeFilterCache();
  }

  registerSocket() {
    const socket = wsCmsBackendServiceSingletonClient.getInstance();

    socket.onmessage = (response: any) => {
        let message = JSON.parse(response.data);
        console.log("Fee Index. message received from server ::: ", message);
        this.setState({
            branchId: message.selectedBranchId,
            academicYearId: message.selectedAcademicYearId,
            departmentId: message.selectedDepartmentId,
        });
        console.log("Fee Index. branchId: ",this.state.branchId);
        console.log("Fee Index. departmentId: ",this.state.departmentId);  
        console.log("Fee Index. ayId: ",this.state.academicYearId);  
    }

    socket.onopen = () => {
        console.log("Fee Index. Opening websocekt connection to cmsbackend. User : ",this.state.user.login);
        socket.send(this.state.user.login);
    }

    window.onbeforeunload = () => {
        console.log("Fee. Closing websocket connection with cms backend service");
    }
  }

  async getFeeFilterCache() {
    const {branchId, academicYearId} = this.state;
    const {data} = await this.props.client.query({
      query: CREATE_FEE_SETUP_DATA_CACHE,
        variables: {
          branchId: branchId,
          academicYearId: academicYearId,
        },
      
      fetchPolicy: 'no-cache',
    });
    this.setState({
      feeFilterCacheList: data,
    });
  }

  toggleTab(tabNo: any) {
    this.setState({
      activeTab: tabNo,
    });
    if (tabNo === 1) {
      this.getFeeFilterCache();
    }
    this.setState({
      activeTab: tabNo,
    });
  }

  render() {
    const {activeTab, user,  feeFilterCacheList} = this.state;
    return (
      <section className="tab-container">
        <div className="tab-flex p-1">
          {/* <img src="../../img/students.png" alt="" /> */}
          <h5><FaUserGraduate className="m-1 fa-2x" /></h5>
          <h5 className="p-1">Fee</h5>
        </div>
        <Nav tabs className="pl-3 pl-3 mb-4 mt-4 boxShadow">
          <NavItem className="cursor-pointer">
            <NavLink
              className={`${activeTab === 0 ? 'active' : ''}`}
              onClick={() => {
                this.toggleTab(0);
              }}
            >
              Invoice
            </NavLink>
          </NavItem>
          <NavItem className="cursor-pointer">
            <NavLink
              className={`${activeTab === 1 ? 'active' : ''}`}
              onClick={() => {
                this.toggleTab(1);
              }}
            >
              Fee Setup
            </NavLink>
          </NavItem>
          <NavItem className="cursor-pointer">
            <NavLink
              className={`${activeTab === 2 ? 'active' : ''}`}
              onClick={() => {
                this.toggleTab(2);
              }}
            >
              Fee Setting
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="border-right">
          <TabPane tabId={0}>
            <InvoiceListPage />
          </TabPane>
          <TabPane tabId={1}>
          {
              user !== null && feeFilterCacheList !== null  && (
                <FeeSetup user={user} feeFilterCacheList={feeFilterCacheList.createFeeSetupDataCache} />
              )
            }
          
          </TabPane>
          <TabPane tabId={2}>
          {
              user !== null && (
                <FeeSetting user={user}  />
              )
            }
          </TabPane>
        </TabContent>
      </section>
    );
  }
}

export default withApollo(FeesTab);