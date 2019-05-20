import * as React from 'react';

import * as moment from 'moment';
import * as SearchInvoiceDataGql from './SearchInvoiceData.graphql';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { graphql, MutationFunc, compose } from "react-apollo";
import { ReactFunctionOrComponentClass, InvoiceCountQueryType as InvoiceQuery } from '../../types';
import withLoadingHandler from '../../../components/withLoadingHandler';

type searchInvoiceRootProps = RouteComponentProps<{}>;

type TargetComponentProps = {
  mutateUpd: MutationFunc<InvoiceQuery> & InvoiceQuery;
};

const UpdateStudentAttendance = (TargetComponent: ReactFunctionOrComponentClass<TargetComponentProps>) => {
  return graphql<InvoiceQuery, searchInvoiceRootProps, TargetComponentProps>(SearchInvoiceDataGql)(
    (TargetComponent)
  );
};

export default UpdateStudentAttendance;