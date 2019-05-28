import * as React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { graphql, QueryProps, MutationFunc, compose } from "react-apollo";
import * as SearchInvoiceGql from './SearchInvoice.graphql';
import { InvoiceCountQueryType, SearchInvoiceListType } from '../../types';
import widthInvoiceDataloader from './withInvoiceDataloader';

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
type InvoiceDataPageProps = InvoiceDataRootProps & {
  mutate: MutationFunc<SearchInvoiceListType>;
};

type InvoiceState = {
  invoiceData: any
}

class InvoiceListPage extends React.Component<InvoiceDataPageProps, InvoiceState> {
  constructor(props: any) {
    super(props);
    this.state = {
      invoiceData: {
        branch: {
          id: 1851 //1001
        },
        academicYear: {
          id: 1701 //1051
        },
        college: {
          id: 1801
        },
        mutateResult: []
      }
    };
    this.checkAllStudents = this.checkAllStudents.bind(this);
    this.createInvoiceRows = this.createInvoiceRows.bind(this);
    this.onClickCheckbox = this.onClickCheckbox.bind(this);
    this.createNoRecordMessage = this.createNoRecordMessage.bind(this);
  }

  onClickCheckbox(index: any, e: any) {
    const { id } = e.nativeEvent.target;
    let chkBox: any = document.querySelector("#" + id);
    chkBox.checked = e.nativeEvent.target.checked;
  }

  checkAllStudents(e: any) {
    const { invoiceData } = this.state;
    const mutateResLength = invoiceData.mutateResult.length;
    let chkAll = e.nativeEvent.target.checked;
    let els = document.querySelectorAll("input[type=checkbox]");

    var empty = [].filter.call(els, function (el: any) {
      if (chkAll) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    });
  }
  createNoRecordMessage(objAry: any) {
    const mutateResLength = objAry.length;
    const retVal = [];
    for (let x = 0; x < mutateResLength; x++) {
      const tempObj = objAry[x];
      const invoiceArray = tempObj.data.searchInvoice;
      const length = invoiceArray.length;
      if (length === 0) {
        retVal.push(
          <h4 className="ptl-06">No Record Found</h4>
        );
      }
    }
    return retVal;
  }
  createInvoiceRows(objAry: any) {
    const mutateResLength = objAry.length;
    const retVal = [];
    for (let x = 0; x < mutateResLength; x++) {
      const tempObj = objAry[x];
      const invoiceArray = tempObj.data.searchInvoice;
      const length = invoiceArray.length;
      for (let i = 0; i < length; i++) {
        const invoice = invoiceArray[i];
        retVal.push(
          <tr >
            <td>
              <input onClick={(e: any) => this.onClickCheckbox(i, e)} checked={invoice.isChecked} type="checkbox" name="" id={"chk" + invoice.id} />
            </td>
            <td>{invoice.student.studentName}</td>
            <td>{invoice.student.studentContactNumber}</td>
            <td>{invoice.feeCategory.categoryName}</td>
            <td>{invoice.invoiceNumber}</td>
            <td>{invoice.amountPaid}</td>
            <td>{invoice.strPaymentDate}</td>
          </tr>
        );
      }
    }
    return retVal;
  }

  onClick = (e: any) => {
    const { name, value } = e.nativeEvent.target;
    const { mutate } = this.props;
    const { invoiceData } = this.state;
    e.preventDefault();

    let invNumber: any = document.querySelector("#invoiceNumber");
    let stId: any = document.querySelector("#studentId");
    let stIdVal = stId.value;
    if (stIdVal.trim() === '') {
      stIdVal = -1;
    }
    let btn: any = document.querySelector("#btnFind");
    btn.setAttribute("disabled", true);
    return mutate({
      variables: {
        invoiceNumber: invNumber.value,
        studentId: stIdVal,
        collegeId: invoiceData.college.id,
        branchId: invoiceData.branch.id,
        academicYearId: invoiceData.academicYear.id,
      },
    }).then(data => {
      btn.removeAttribute("disabled");
      const sdt = data;
      invoiceData.mutateResult = [];
      invoiceData.mutateResult.push(sdt);
      this.setState({
        invoiceData: invoiceData
      });
      console.log('Invoice result :  ', invoiceData.mutateResult);
    }).catch((error: any) => {
      btn.removeAttribute("disabled");
      console.log('there was an error sending the invoice mutation result ', error);
      return Promise.reject(`Could not retrieve invoice data: ${error}`);
    });

  }

  render() {
    const { invoiceData } = this.state;
    return (

      <section className="customCss">
        <h3 className="bg-heading p-1 m-b-0">
          <i className="fa fa-university stroke-transparent mr-1" aria-hidden="true" />{' '}
          Admin - Fee Management
          </h3>
        <div className="plugin-bg-white p-1">
          <div className="m-b-1 dflex bg-heading">
            <h4 className="ptl-06">Invoices</h4>
          </div>
          <div className="inDashboard p-1">
            <div className="invoiceDashboard">
              <div className="invoiceHeader">
                <h6 className="center">Total Invoice</h6>
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
          <div className="">

            <div className="form-group row">

              <div className="col-md-8">
                <div className="btn-group">
                  <input type="text" className="m-2" name="invoiceNumber" id="invoiceNumber" placeholder="Invoice Number" />
                  <input type="text" name="studentId" id="studentId" placeholder="Student Id" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="btn-group">
                  <button className="btn btn-primary btn-sm" id="btnFind" name="btnFind" onClick={this.onClick} >Search</button>
                  <button className="btn btn-primary btn-sm m-2" disabled>Export</button>
                  <button className="btn btn-primary btn-sm " disabled>Print</button>
                </div>
              </div>

            </div>

            <div className="col-md-12">
              <h4>Invoice Details</h4>
              <table id="invoicelistpage" className="striped-table fwidth bg-white">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" onClick={(e: any) => this.checkAllStudents(e)} value="checkedall" name="" id="chkCheckedAll" />
                    </th>
                    <th>Student Name</th>
                    <th>Primary Contact</th>
                    <th>Fee Category</th>
                    <th>Invoice Number</th>
                    <th>Amount</th>
                    <th>Date</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    this.createInvoiceRows(this.state.invoiceData.mutateResult)
                  }
                </tbody>
              </table>
              {
                this.createNoRecordMessage(this.state.invoiceData.mutateResult)
              }
            </div>

          </div>
        </div>
      </section>

    );
  }
}

// export default widthInvoiceDataloader(
//   compose(
//     graphql<getInvoiceDataListQuery, InvoiceDataRootProps>
//       (GetInvoiceDataGql, {
//       })
//   )
// (InvoiceListPage) as any)
// );


// export default widthInvoiceDataloader(
//   (InvoiceListPage) as any
//   );

export default widthInvoiceDataloader(

  compose(
    graphql<SearchInvoiceListType, InvoiceDataRootProps>(SearchInvoiceGql, {
      name: "mutate"
    })

  )
    (InvoiceListPage) as any
);