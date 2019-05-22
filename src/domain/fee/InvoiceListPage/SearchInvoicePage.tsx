import * as React from 'react';
import * as SearchInvoiceDataGql from './SearchInvoiceData.graphql';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { graphql, QueryProps, MutationFunc, compose } from "react-apollo";
import { SearchInvoiceQueryType, SearchInvoiceListQuery } from '../../types';
import widthSearchInvoiceDataloader from './withSearchInvoiceDataloader';

const w180 = {
  width: '180px',
  marginRight: '10px',
};

// Search Invoice Data
type SearchInvoiceDataRootProps = RouteComponentProps<{
  invoiceNumber: string;
  studentId: string;
}> & {
  data: QueryProps & SearchInvoiceQueryType;
};

type SearchInvoiceDataPageProps = SearchInvoiceDataRootProps & {
  mutate: MutationFunc<SearchInvoiceListQuery>;
};

type SearchInvoiceDataState = {
  searchinvoiceData: any,
  invoices: any,
  students: any,
  submitted: any
};

// Search Invoice Data

class SearchInvoicePage extends React.Component<SearchInvoiceDataPageProps, SearchInvoiceDataState> {
  constructor(props: SearchInvoiceDataPageProps) {
    super(props);
    this.state = {
      searchinvoiceData: {
        invoices: {
          invoiceNumber: ""
        },
        students: {
          studentId: ""
        },
        mutateResult: [],
      },
      invoices: [],
      students: [],
      submitted: false
    };
    this.createInvoiceNumbers = this.createInvoiceNumbers.bind(this);
    this.createStudents = this.createStudents.bind(this);
  }


  createInvoiceNumbers(invoiceNumber: any, studentId: any) {
    let invoiceInputs = [<input key={0} value="" />];
    for (let i = 0; i < invoiceNumber.length; i++) {
      invoiceInputs.push(
        <input key={invoiceNumber[i].id} value={invoiceNumber[i].id} />
      );

    }
    return invoiceInputs;
  }

  createStudents(studentId: any) {
    let studentInputs = [<input key={0} value="" />];
    for (let i = 0; i < studentId.length; i++) {
      studentInputs.push(
        <input key={studentId[i].id} value={studentId[i].id} />
      );

    }
    return studentInputs;
  }

  onFormSubmit = (e: any) => {
    this.setState({
      submitted: true
    });

    const { mutate } = this.props;
    const { searchinvoiceData } = this.state;
    e.preventDefault();

    if (searchinvoiceData.invoiceNumber && searchinvoiceData.studentId) {
      e.target.querySelector("#invoicenumber").setAttribute("disabled", true);
      e.target.querySelector("#studentid").setAttribute("disabled", true);

      let searchinvoiceInputData: any = {
        invoiceNumber: searchinvoiceData.invoiceNumber,
        studentId: searchinvoiceData.student.id,
      };

      let btn = e.target.querySelector("button[type='submit']");


      return mutate({
        variables: { filter: searchinvoiceInputData },
      }).then(data => {
        const sdt = data;
        searchinvoiceData.mutateResult = [];
        searchinvoiceData.mutateResult.push(sdt);
        this.setState({
          searchinvoiceData: searchinvoiceData
        });
        console.log('Query Result ::::: ', searchinvoiceData.mutateResult);

      }).catch((error: any) => {

        console.log('there was an error sending the query result', error);
        return Promise.reject(`Could not retrieve student attendance data: ${error}`);
      });

    }
  }
  render() {
    const { data: { searchInvoice, refetch }, mutate
    } = this.props;
    const {
      searchinvoiceData,
      invoices,
      students,
      submitted
    } = this.state;
    return (
      <React.Fragment>
        <div className="">
          <form action="" onSubmit={this.onFormSubmit}>
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
            <h4>Invoice Details</h4>
            <div className="row">

              <div className="col m-1">
                <label htmlFor="studentName">Student Name</label>
                <input type="text" className="form-control" placeholder="Student name" />
              </div>
              <div className="col m-1">
                <label htmlFor="primayContact">Primary Contact</label>
                <input type="text" className="form-control" placeholder="Primary Contact" />
              </div>
              <div className="col m-1">
                <label htmlFor="feeCategory">Fee Category</label>
                <input type="text" className="form-control" placeholder="Fee Category" />
              </div>
              <div className="col m-1">
                <label htmlFor="amount">Amount</label>
                <input type="text" className="form-control" placeholder="Amount" />
              </div>
              <div className="col m-1">
                <label htmlFor="date">Date</label>
                <input type="text" className="form-control" placeholder="Date" />
              </div>
            </div>
          </form>
        </div>
      </React.Fragment >
    );
  }
}



export default widthSearchInvoiceDataloader(
  compose(
    graphql<SearchInvoiceListQuery, SearchInvoiceDataRootProps>
      (SearchInvoiceDataGql, {
      })
  )
    (SearchInvoicePage) as any
);


// export default widthSearchInvoiceDataloader((SearchInvoiceListPage) as any);