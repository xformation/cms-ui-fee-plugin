import { RouteComponentProps } from 'react-router-dom';
import { graphql, QueryProps } from "react-apollo";
import * as GetInvoiceDataGql from './GetInvoiceData.graphql';
import { ReactFunctionOrComponentClass, InvoiceCountQueryType } from '../../types';
import withLoadingHandler from '../../../components/withLoadingHandler';

type withInvoiceCountPageDataLoaderProps = RouteComponentProps<{
  collegeId: string;
  branchId: string;
  academicYearId: string;
}>;

type TargetComponentProps = {
  data: QueryProps & InvoiceCountQueryType;
};

const withInvoiceDataloader = (TargetComponent: ReactFunctionOrComponentClass<TargetComponentProps>) => {
  return graphql<InvoiceCountQueryType, withInvoiceCountPageDataLoaderProps, TargetComponentProps>(GetInvoiceDataGql, {
    options: ({ match }) => ({
      variables: {
        collegeId: 1801,
        branchId: 1851,
        academicYearId: 1701
      }
    })
  })(withLoadingHandler(TargetComponent));
};

export default withInvoiceDataloader;


