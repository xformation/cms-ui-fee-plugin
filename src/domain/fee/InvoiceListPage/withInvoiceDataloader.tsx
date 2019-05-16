import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { graphql, QueryProps } from "react-apollo";
import * as moment from 'moment';
import * as GetInvoiceDataGql from './GetInvoiceData.graphql';
import { ReactFunctionOrComponentClass, getInvoiceDataQueryVariables } from '../../types';
import withLoadingHandler from '../../../components/withLoadingHandler';

type withStudentAtndPageDataLoaderProps = RouteComponentProps<{
  branchId: string;
  academicYearId: string;
  collegeId: string;
}>;

type TargetComponentProps = {
  data: QueryProps & getInvoiceDataQueryVariables;
};

const withInvoiceDataloader = (TargetComponent: ReactFunctionOrComponentClass<TargetComponentProps>) => {
  return graphql<getInvoiceDataQueryVariables, withStudentAtndPageDataLoaderProps, TargetComponentProps>(GetInvoiceDataGql, {
    options: ({ match }) => ({
      variables: {
        // branchId: match.params.branchId,
        // academicYearId: match.params.branchId,
        // teacherId: match.params.branchId
        collegeId: 1801,
        branchId: 1851,
        academicYearId: 1701
      }
    })
  })(withLoadingHandler(TargetComponent));
};

export default withInvoiceDataloader;


