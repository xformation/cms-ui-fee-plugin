import { RouteComponentProps } from 'react-router-dom';
import { graphql, QueryProps } from "react-apollo";
import * as SearchInvoiceDataGql from './SearchInvoiceDetail.graphql';
import { ReactFunctionOrComponentClass, InvoiceQuery } from '../../types';
import withLoadingHandler from '../../../components/withLoadingHandler';

type withInvoiceDetailPageDataLoaderProps = RouteComponentProps<{
  invoiceNumber: string;
  studentId: string;
}>;

type TargetComponentProps = {
  data: QueryProps & InvoiceQuery;
};

const withInvoiceDataloader = (TargetComponent: ReactFunctionOrComponentClass<TargetComponentProps>) => {
  return graphql<InvoiceQuery, withInvoiceDetailPageDataLoaderProps, TargetComponentProps>(SearchInvoiceDataGql, {
    options: ({ match }) => ({
      variables: {
        invoiceNumber: "db45",
        studentId: 2051
      }
    })
  })(withLoadingHandler(TargetComponent));
};

export default withInvoiceDataloader;


