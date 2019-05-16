import * as React from 'react';
import * as GetInvoiceDataGql from './GetInvoiceData.graphql';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { graphql, QueryProps, MutationFunc, compose } from "react-apollo";
import { GetInvoiceData } from '../../types';
import widthInvoiceDataloader from './withInvoiceDataloader';

const w180 = {
  width: '180px',
  marginRight: '10px',
};

type InvoiceDataRootProps = RouteComponentProps<{
  branchId: string;
  academicYearId: string;
  collegeId: string;
}> & {
  data: QueryProps & GetInvoiceData;
};

type InvoiceDataState = {
  branches: any,
  academicYears: any,
  colleges: any
}

type InvoiceDataPageProps = InvoiceDataRootProps;

class InvoiceListPage extends React.Component<InvoiceDataPageProps, InvoiceDataState> {
  constructor(props: InvoiceDataPageProps) {
    super(props);
    this.state = {
      branches: [],
      academicYears: [],
      colleges: []
    }
  }
  render() {
    const {
      branches,
      academicYears,
      colleges
    } = this.state;
    return (

      <section className="customCss">
        <h3 className="bg-heading p-1 m-b-0">
          <i className="fa fa-university stroke-transparent mr-1" aria-hidden="true" />{' '}
          Admin - Fee Management
      </h3>
        <div className="plugin-bg-white p-1">
          <div className="m-b-1 dflex bg-heading">
            <h4 className="ptl-06">Invoices</h4>
            <div>
              <a className="btn btn-primary">Export</a>
            </div>
          </div>
          <div className="inDashboard p-1">
            <div className="invoiceDashboard">
              <div className="invoiceHeader">
                <h6 className="center">Invoice</h6>
                <a href=""><span className="ti-close m-r-1"></span></a>
                <a href=""><span className="ti-download"></span></a>
              </div>
              <h2 className="fee-red"><strong>{{}}</strong></h2>
            </div>
            <div className="invoiceDashboard">
              <div className="invoiceHeader">
                <h6 className="center">Paid Invoice</h6>
                <a href=""><span className="ti-close m-r-1"></span></a>
                <a href=""><span className="ti-download"></span></a>
              </div>
              <h2 className="fee-red"><strong>4</strong></h2>
            </div>
            <div className="invoiceDashboard">
              <div className="invoiceHeader">
                <h6 className="center">Unpaid Invoice</h6>
                <a href=""><span className="ti-close m-r-1 "></span></a>
                <a href=""><span className="ti-download"></span></a>
              </div>
              <h2 className="fee-orange"><strong>32</strong></h2>
              <h6 className="center btn btn-primary w50 p05 remainder">Send Remainder</h6>
            </div>
            <div className="invoiceDashboard">
              <div className="invoiceHeader">
                <h6 className="center">Cancelled Invoice</h6>
                <a href=""><span className="ti-close m-r-1"></span></a>
                <a href=""><span className="ti-download"></span></a>
              </div>
              <h2 className="fee-red"><strong>12</strong></h2>
              <h6 className="btn btn-primary w50 p05 remainder">Send Remainder</h6>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

// export default widthInvoiceDataloader(
//   compose(
//     graphql<getInvoiceDataListQuery, InvoiceDataRootProps>
//       (GetInvoiceDataGql, {
//       })
//   )
// );


export default widthInvoiceDataloader(

  // compose(
  //   graphql<GetInvoiceData, InvoiceDataRootProps>(GetInvoiceDataGql, {
  //     // name: "mutate"
  //   })
  // )
  (InvoiceListPage) as any
);