import * as React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { graphql, QueryProps, MutationFunc, compose } from "react-apollo";
import * as SearchInvoiceGql from './SearchInvoice.graphql';
import * as SearchInvoiceOnTypeGql from './SearchInvoiceOnType.graphql';
import { InvoiceCountQueryType, SearchInvoiceListType, SearchInvoiceOnTypeListType } from '../../types';
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
  getInvoiceOnTypeMutation: MutationFunc<SearchInvoiceOnTypeListType>;
  
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
        search: {
          type: ""
        },
        mutateResult: [],
        gridResult: []
      }
    };
    this.checkAllStudents = this.checkAllStudents.bind(this);
    this.createInvoiceRows = this.createInvoiceRows.bind(this);
    this.onClickCheckbox = this.onClickCheckbox.bind(this);
    this.createNoRecordMessage = this.createNoRecordMessage.bind(this);
    // this.createInvoiceGridRows = this.createInvoiceGridRows.bind(this);
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
    const { invoiceData } = this.state;
    const mutateResLength = objAry.length;
    const retVal = [];
    for (let x = 0; x < mutateResLength; x++) {
      const tempObj = objAry[x];
      let invoiceArray = tempObj.data.searchInvoice;

      if(invoiceData.search.type === "search"){
        invoiceArray = tempObj.data.searchInvoice;
     }else if(invoiceData.search.type === "grid") {
        invoiceArray = tempObj.data.searchInvoiceOnType;
     }

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
    const { invoiceData } = this.state;
    const mutateResLength = objAry.length;
    const retVal = [];
    for (let x = 0; x < mutateResLength; x++) {
      const tempObj = objAry[x];
      let invoiceArray;
      if(invoiceData.search.type === "search"){
         invoiceArray = tempObj.data.searchInvoice;
      }else if(invoiceData.search.type === "grid") {
         invoiceArray = tempObj.data.searchInvoiceOnType;
      }
      
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

  // createInvoiceRows(objAry: any) {
  //   const mutateResLength = objAry.length;
  //   const retVal = [];
  //   for (let x = 0; x < mutateResLength; x++) {
  //     const tempObj = objAry[x];
  //     const invoiceArray = tempObj.data.searchInvoice;
  //     const length = invoiceArray.length;
  //     for (let i = 0; i < length; i++) {
  //       const invoice = invoiceArray[i];
  //       retVal.push(
  //         <tr >
  //           <td>
  //             <input onClick={(e: any) => this.onClickCheckbox(i, e)} checked={invoice.isChecked} type="checkbox" name="" id={"chk" + invoice.id} />
  //           </td>
  //           <td>{invoice.student.studentName}</td>
  //           <td>{invoice.student.studentContactNumber}</td>
  //           <td>{invoice.feeCategory.categoryName}</td>
  //           <td>{invoice.invoiceNumber}</td>
  //           <td>{invoice.amountPaid}</td>
  //           <td>{invoice.strPaymentDate}</td>
  //         </tr>
  //       );
  //     }
  //   }
  //   return retVal;
  // }

  findInvoice = (e: any) => {
    const { name, value } = e.nativeEvent.target;
    const { getInvoiceOnTypeMutation } = this.props;
    const { invoiceData } = this.state;
    e.preventDefault();
    
    let invType = "";
    if(name === "btnTotalInvoice"){
      invType = "TOTAL"
    }else if(name === "btnPaidInvoice"){
      invType = "PAID"
    }else if(name === "btnUnPaidInvoice"){
      invType = "UNPAID"
    }else if(name === "btnCancelledInvoice"){
      invType = "CANCELED"
    }
    let btn: any = document.querySelector("#"+name);
    btn.setAttribute("disabled", true);
    return getInvoiceOnTypeMutation({
      variables: {
        invoiceType: invType,
        collegeId: invoiceData.college.id,
        branchId: invoiceData.branch.id,
        academicYearId: invoiceData.academicYear.id,
      },
    }).then(data => {
      btn.removeAttribute("disabled");
      const sdt = data;
      invoiceData.gridResult = [];
      invoiceData.gridResult.push(sdt);
      console.log('Invoice Grid :  ', invoiceData.gridResult);
      invoiceData.search.type = "grid";
      this.setState({
        invoiceData: invoiceData
      });
      
    }).catch((error: any) => {
      btn.removeAttribute("disabled");
      console.log('there was an error sending the invoice mutation result ', error);
      return Promise.reject(`Could not retrieve invoice data: ${error}`);
    });
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
      const sdt = data
      console.log('Invoice result :  ', sdt);
      invoiceData.mutateResult = [];
      invoiceData.mutateResult.push(sdt);
      invoiceData.search.type = "search";
      this.setState({
        invoiceData: invoiceData
      });
      
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
          <div className="border p-1 pb-2">
            <div className="inDashboard p-1">
              <div className="invoiceDashboard">
                <div className="invoiceHeader">
                  <h6 className="center">Total Invoice</h6>
                  <a href=""><span className="ti-close m-r-1"></span></a>
                  <a href=""><span className="ti-download"></span></a>
                </div>
                <h2 className="fee-blue"><strong>{this.props.data.getInvoiceData.totalInvoice}</strong></h2>
                <button className="center btn btn-primary w50 p05 remainder"  id="btnTotalInvoice" name="btnTotalInvoice" onClick={this.findInvoice}>View Info</button>
              </div>
              <div className="invoiceDashboard">
                <div className="invoiceHeader">
                  <h6 className="center">Paid Invoice</h6>
                  <a href=""><span className="ti-close m-r-1"></span></a>
                  <a href=""><span className="ti-download"></span></a>
                </div>
                <h2 className="fee-green"><strong>{this.props.data.getInvoiceData.totalPaidInvoice}</strong></h2>
                <button className="center btn btn-primary w50 p05 remainder"  id="btnPaidInvoice" name="btnPaidInvoice" onClick={this.findInvoice}>View Info</button>
              </div>
              <div className="invoiceDashboard">
                <div className="invoiceHeader">
                  <h6 className="center">Unpaid Invoice</h6>
                  <a href=""><span className="ti-close m-r-1 "></span></a>
                  <a href=""><span className="ti-download"></span></a>
                </div>
                <h2 className="fee-orange"><strong>{this.props.data.getInvoiceData.totalUnPaidInvoice}</strong></h2>
                <h6 className="center btn btn-primary w50 p05 remainder">Send Remainder</h6>
                <button className="center btn btn-primary w50 p05 remainder"  id="btnUnPaidInvoice" name="btnUnPaidInvoice" onClick={this.findInvoice}>View Info</button>
              </div>
              <div className="invoiceDashboard">
                <div className="invoiceHeader">
                  <h6 className="center">Cancelled Invoice</h6>
                  <a href=""><span className="ti-close m-r-1"></span></a>
                  <a href=""><span className="ti-download"></span></a>
                </div>
                <h2 className="fee-red"><strong>{this.props.data.getInvoiceData.totalCanceledInvoice}</strong></h2>
                <h6 className="btn btn-primary w50 p05 remainder">Send Remainder</h6>
                <button className="center btn btn-primary w50 p05 remainder"  id="btnCancelledInvoice" name="btnCancelledInvoice" onClick={this.findInvoice}>View Info</button>
              </div>
            </div>
            <hr id="invoiceHr" />
            <div className="border">
              <h4 className="bg-heading p-1">Search Invoice</h4>
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
                <table id="invoicelistpage" className="striped-table fwidth bg-white m-1 text-center">
                  <thead className="text-center">
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
                      invoiceData.search.type === "search"  && (
                        this.createInvoiceRows(this.state.invoiceData.mutateResult)
                      )
                    }
                    {
                      invoiceData.search.type === "grid"  && (
                        this.createInvoiceRows(this.state.invoiceData.gridResult)
                      )
                    }
                    
                  </tbody>
                </table>
                {
                  invoiceData.search.type === "search"  && (
                    this.createNoRecordMessage(this.state.invoiceData.mutateResult)
                  )
                }
                {
                  invoiceData.search.type === "grid"  && (
                    this.createNoRecordMessage(this.state.invoiceData.gridResult)
                  )
                }
              </div>

            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default widthInvoiceDataloader(

  compose(
    graphql<SearchInvoiceListType, InvoiceDataRootProps>(SearchInvoiceGql, {
      name: "mutate"
    }),
    graphql<SearchInvoiceOnTypeListType, InvoiceDataRootProps>(SearchInvoiceOnTypeGql, {
      name: "getInvoiceOnTypeMutation"
    })
    

  )
    (InvoiceListPage) as any
);