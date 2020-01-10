import * as React from 'react';
// import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import InvoiceListPage from './InvoiceListPage';
import FeeSetup from './FeeSetup/FeeSetup';
import FeeSetting from './FeeSetting/FeeSetting';
import { FaUserGraduate } from 'react-icons/fa';
import '../../css/tabs.css';


export default class FeesTab extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeTab: 0,
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tabNo: any) {
    this.setState({
      activeTab: tabNo,
    });
  }

  render() {
    const { activeTab } = this.state;
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
          <FeeSetup />
          </TabPane>
          <TabPane tabId={2}>
            <FeeSetting />
          </TabPane>
        </TabContent>
      </section>
    );
  }
}