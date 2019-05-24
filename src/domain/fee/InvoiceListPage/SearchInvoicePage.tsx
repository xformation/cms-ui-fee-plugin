import * as React from 'react';
import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
import * as SearchInvoiceGql from './SearchInvoice.graphql';
import { SearchInvoiceListQuery, SearchInvoiceQueryType } from '../../types';
import withSearchInvoiceDataloader from './withSearchInvoiceDataloader';
import { RouteComponentProps } from 'react-router-dom';

type SearchInvoiceRootProps = RouteComponentProps<{
  invoiceNumber: string;
  studentId: string;
}>
  & {
    data: QueryProps & SearchInvoiceQueryType;
  }
type SearchInvoicePageProps = SearchInvoiceRootProps & {
  mutate: MutationFunc<SearchInvoiceListQuery>;
};


type SearchInvoiceState = {
  searchInvoiceData: any,
  invoices: any,
  students: any,
  submitted: any
};

class SearchInvoicePage extends React.Component<SearchInvoicePageProps, SearchInvoiceState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchInvoiceData: {
        invoices: {
          invoiceNumber: ""
        },
        students: {
          studentId: ""
        },
        mutateResult: []
      },
      invoices: [],
      students: [],
      submitted: false
    };
    this.createInvoiceNumbers = this.createInvoiceNumbers.bind(this);
    this.createStudents = this.createStudents.bind(this);
  }

  createInvoiceNumbers(invoiceNumber: any) {
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
    const { searchInvoiceData } = this.state;
    e.preventDefault();

    if (searchInvoiceData.invoice.invoiceNumber && searchInvoiceData.student.id) {
      e.target.querySelector("#invoice").setAttribute("disabled", false);
      e.target.querySelector("#studentid").setAttribute("disabled", false);

      let searchInvoiceInputData = {
        invoiceNumber: searchInvoiceData.invoice.invoiceNumber,
        studentId: searchInvoiceData.student.id
      };

      let btn = e.target.querySelector("button[type='submit]");

      return mutate({
        variables: { filter: searchInvoiceInputData },
      }).then(data => {
        const sdt = data;
        searchInvoiceData.mutateResult = [];
        searchInvoiceData.mutateResult.push(sdt);
        this.setState({
          searchInvoiceData: searchInvoiceData
        });
        console.log('Query Result :::::', searchInvoiceData.mutateResult);
      }).catch((error: any) => {
        console.log('there was an error sending the query result', error);
        return Promise.reject(`Could not retreive Invoice search data: ${error}`);
      });
    }
  }


  onChange = (e: any) => {
    const { name, value } = e.nativeEvent.target;
    const { searchInvoiceData } = this.state;
    if (name === "student") {
      this.setState({
        searchInvoiceData: {
          ...searchInvoiceData,
          student: {
            id: value
          }
        }
      });
    } else if (name === "invoiceNumber") {
      this.setState({
        searchInvoiceData: {
          ...searchInvoiceData,
          invoice: {
            id: value
          }
        }
      });
    };
  };
  handleChange = (e: any) => {
    const { id, value } = e.nativeEvent.target;
    const { searchInvoiceData } = this.state;
    const key = id;
    const val = value;
    e.preventDefault();
    searchInvoiceData.textValueMap[key] = val;
    this.setState({
      searchInvoiceData: searchInvoiceData
    });

  }

  render() {
    const { data: { searchInvoice, refetch }, mutate } = this.props;
    const { searchInvoiceData, invoices, students } = this.state;
    return (
      <div className="">
        <form action="" onSubmit={this.onFormSubmit}>
          <div className="form-group row">
            <div className="col-md-8">
              <div className="btn-group">
                <input type="text" className="m-2" name="invoiceNumber" id="invoice"
                  onChange={this.onChange}
                  value={searchInvoiceData.searchInvoice.invoiceNumber}
                  {...this.state.invoices}
                  placeholder="Invoice Number" />
                <input type="text" name="invoiceNumber" id="students" onChange={this.onChange}
                  value={searchInvoiceData.searchInvoice.studentId}
                  {...this.state.students} placeholder="Student Id" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="btn-grou">
                <button type="submit" id="btnTakeAtnd" name="btnTakeAtnd" className="btn btn-primary btn-sm ">Search</button>
                <button className="btn btn-primary btn-sm m-2">Export</button>
                <button className="btn btn-primary btn-sm ">Print</button>
              </div>
            </div>
          </div>
          <h4>Invoice Details</h4>
          <div className="row">
            {
              this.state.students
            }
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
    );
  }
}


// export default withSearchInvoiceDataloader(

//   compose(
//     graphql<SearchInvoiceListQuery, SearchInvoiceRootProps>
//       (SearchInvoiceGql, {
//         name: "mutate"
//       }),
//   )

//     (InvoiceListPage) as any
// );

export default SearchInvoicePage;
// export default SearchInvoicePage;SearchInvoiceGql


