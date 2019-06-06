import { RouteComponentProps } from 'react-router-dom';
import { graphql, QueryProps } from "react-apollo";
import * as LoadBranchesQueryGql from './LoadBranchesQuery.graphql';
import { ReactFunctionOrComponentClass, LoadBranchQueryType } from '../types';
import withLoadingHandler from '../../components/withLoadingHandler';

type withBranchPageDataLoaderProps = RouteComponentProps<{
  collegeId: string;
}>;

type TargetComponentProps = {
  data: QueryProps & LoadBranchQueryType;
};

const withBranchDataLoader = (TargetComponent: ReactFunctionOrComponentClass<TargetComponentProps>) => {
  return graphql<LoadBranchQueryType, withBranchPageDataLoaderProps, TargetComponentProps>(LoadBranchesQueryGql, {
    options: ({ match }) => ({
      variables: {
        collegeId: 951
      }
    })
  })(withLoadingHandler(TargetComponent));
};

export default withBranchDataLoader


