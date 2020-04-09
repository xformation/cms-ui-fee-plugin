import * as React from 'react';
import { withApollo } from 'react-apollo';

export interface InvoiceProps extends React.HTMLAttributes<HTMLElement>{
    [data: string]: any;
    totalRecords?: number | string;
    type?: string;
    source?: string;
}

export class InvoiceListPage<T = {[data: string]: any}> extends React.Component<InvoiceProps, any> {
    constructor(props: InvoiceProps) {
        super(props);
        this.state = {
            list: this.props.data,
            totalRecords: this.props.totalRecords,
            type: this.props.type,
            source: this.props.source,
            sourceOfApplication: this.props.sourceOfApplication,
        };
        
    }


    createRows(objAry: any) {
        const { source } = this.state;
        console.log("createRows() - Invoice list on Grid page:  ", objAry);
        if(objAry === undefined || objAry === null) {
            return;
        }
        const mutateResLength = objAry.length;
        const retVal = [];
          for (let i = 0; i < mutateResLength; i++) {
            const invoice = objAry[i];
            retVal.push(
              <tr >
            <td>{invoice.student.id}</td>
            <td>{invoice.student.studentName}</td>
            <td>{invoice.student.studentPrimaryCellNumber}</td>
            {/* <td>{invoice.feeCategory.categoryName}</td> */}
            <td>{invoice.invoiceNumber}</td>
            <td>{invoice.amountPaid}</td>
            <td>{invoice.strPaymentDate}</td>
            <td>{invoice.paymentStatus}</td>
              </tr>
            );
          }
        return retVal;
    }

    render() {
        const {data} = this.props
        const {list, totalRecords, type,  source} = this.state;
        return (
            <main>
               
                <div className="pull-right col-sm-12 col-xs-12 profile-header m-b-2">
                    {
                        source !== 'INVOICE_PAGE' && (
                            <span style={{ fontSize: "13px", color: "Blue"}}>{type} : {totalRecords}</span>
                        )
                    }
                </div>
                <div style={{width:'100%', height:'250px', overflow:'auto'}}>
                    <table id="invoiceTable" className="striped-table fwidth bg-white p-2">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>Primary Contact</th>
                                {/* <th>Fee Category</th> */}
                                <th>Invoice Number</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.createRows(list) }
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}

export default InvoiceListPage;