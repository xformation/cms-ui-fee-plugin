import * as React from 'react';
import * as GetInvoiceDataGql from './GetInvoiceData.graphql';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { graphql, QueryProps, MutationFunc, compose } from "react-apollo";
import { InvoiceCountQueryType } from '../../types';
import { InvoiceQuery } from '../../types';
import widthInvoiceDataloader from './withInvoiceDataloader';
import widthSearchInvoiceDataloader from './withSearchInvoiceDataloader';

const w180 = {
  width: '180px',
  marginRight: '10px',
};
// Invoice Count
type InvoiceDataRootProps = RouteComponentProps<{
  collegeId: string;
  branchId: string;
  academicYearId: string;
}> & {
  data: QueryProps & InvoiceCountQueryType;
};

type InvoiceDataState = {
  invoiceGetData: any,
  branches: any,
  academicYears: any,
  colleges: any,
}

type InvoiceDataPageProps = InvoiceDataRootProps;

// Invoice Count

// Search Invoice Data
type SearachInvoiceDataRootProps = RouteComponentProps<{
  invoiceNumber: string;
  studentId: string;
}> & {
  data: QueryProps & InvoiceQuery;
};

type SearchInvoiceDataState = {
  invoiceNumber: string;
  studentId: string;
}

type SearchInvoiceDataPageProps = InvoiceDataRootProps;

// Search Invoice Data

class InvoiceListPage extends React.Component<InvoiceDataPageProps, InvoiceDataState> {
  constructor(props: InvoiceDataPageProps) {
    super(props);
    this.state = {
      invoiceGetData: {
        branch: {
          id: 1851 //1001
        },
        academicYear: {
          id: 1701 //1051
        },
        college: {
          id: 1801
        }
      },
      branches: [],
      academicYears: [],
      colleges: [],
    }
  }
  render() {
    const {
      branches,
      academicYears,
      colleges,
    } = this.state;
    return (

      <React.Fragment>
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
                <h2 className="fee-red"><strong>{this.props.data.getInvoiceData.totalInvoice}</strong></h2>
              </div>
              <div className="invoiceDashboard">
                <div className="invoiceHeader">
                  <h6 className="center">Paid Invoice</h6>
                  <a href=""><span className="ti-close m-r-1"></span></a>
                  <a href=""><span className="ti-download"></span></a>
                </div>
                <h2 className="fee-red"><strong>{this.props.data.getInvoiceData.totalPaidInvoice}</strong></h2>
              </div>
              <div className="invoiceDashboard">
                <div className="invoiceHeader">
                  <h6 className="center">Unpaid Invoice</h6>
                  <a href=""><span className="ti-close m-r-1 "></span></a>
                  <a href=""><span className="ti-download"></span></a>
                </div>
                <h2 className="fee-orange"><strong>{this.props.data.getInvoiceData.totalUnPaidInvoice}</strong></h2>
                <h6 className="center btn btn-primary w50 p05 remainder">Send Remainder</h6>
              </div>
              <div className="invoiceDashboard">
                <div className="invoiceHeader">
                  <h6 className="center">Cancelled Invoice</h6>
                  <a href=""><span className="ti-close m-r-1"></span></a>
                  <a href=""><span className="ti-download"></span></a>
                </div>
                <h2 className="fee-red"><strong>{this.props.data.getInvoiceData.totalCanceledInvoice}</strong></h2>
                <h6 className="btn btn-primary w50 p05 remainder">Send Remainder</h6>
              </div>
            </div>
            <div>
              <div className="">
                <form action="">
                  <div className="form-group row">
                    <div className="col-md-8">
                      <div className="btn-group">
                        <input type="text" className="m-2" placeholder="Invoice Number" />
                        <input type="text" placeholder="Student Id" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="btn-grou">
                        <button className="btn btn-primary btn-sm ">Search</button>
                        <button className="btn btn-primary btn-sm m-2">Export</button>
                        <button className="btn btn-primary btn-sm ">Print</button>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <h4>Invoice Details</h4>
                    <div className="col m-2">
                      <label htmlFor="studentName">Student Name</label>
                      <input type="text" className="form-control" placeholder="Student name" />
                    </div>
                    <div className="col m-2">
                      <label htmlFor="primayContact">Primary Contact</label>
                      <input type="text" className="form-control" placeholder="Primary Contact" />
                    </div>
                    <div className="col m-2">
                      <label htmlFor="feeCategory">Fee Category</label>
                      <input type="text" className="form-control" placeholder="Fee Category" />
                    </div>
                    <div className="col m-2">
                      <label htmlFor="amount">Amount</label>
                      <input type="text" className="form-control" placeholder="Amount" />
                    </div>
                    <div className="col m-2">
                      <label htmlFor="date">Date</label>
                      <input type="text" className="form-control" placeholder="Date" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment >
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


export default widthInvoiceDataloader((InvoiceListPage) as any);