import { RouteComponentProps } from 'react-router-dom';
import { graphql, QueryProps } from "react-apollo";
import * as SearchInvoiceGql from './SearchInvoice.graphql';
import { ReactFunctionOrComponentClass, SearchInvoiceQueryType } from '../../types';
import withLoadingHandler from '../../../components/withLoadingHandler';

type withInvoiceDetailPageDataLoaderProps = RouteComponentProps<{
  invoiceNumber: string;
  studentId: string;
}>;

type TargetComponentProps = {
  data: QueryProps & SearchInvoiceQueryType;
};

const withInvoiceDataloader = (TargetComponent: ReactFunctionOrComponentClass<TargetComponentProps>) => {
  return graphql<SearchInvoiceQueryType, withInvoiceDetailPageDataLoaderProps, TargetComponentProps>(SearchInvoiceGql, {
    options: ({ match }) => ({
      variables: {
        invoiceNumber: "db45",
        studentId: 2051
      }
    })
  })(withLoadingHandler(TargetComponent));
};

export default withInvoiceDataloader;


