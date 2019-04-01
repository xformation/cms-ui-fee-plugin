import * as React from 'react';

import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { graphql, QueryProps } from 'react-apollo';

import * as FeeListQueryGql from './FeeListQuery.graphql';
import { FeeListQuery, FeeSummaryFragment } from '../../types';
import withLoadingHandler from '../../../components/withLoadingHandler';

const FeeRow = ({ fee }: { fee: FeeSummaryFragment }) => (
  <tr key={fee.id}>

  </tr>
);

const FeesTable = ({ fees }: { fees: FeeSummaryFragment[] }) => (
  <table className="striped-table">
    <thead>
      <tr>
        <th>Fee Name</th>
        <th>Attendance</th>
        <th>Attendance</th>
        <th>Attendance</th>
      </tr>
    </thead>
    <tbody>
      {fees.map(fee => <FeeRow key={fee.id} fee={fee} />)}
    </tbody>
  </table>
);

type FeeListPageOwnProps = RouteComponentProps<{}>;
type FeeListPageProps = {
  data: QueryProps & FeeListQuery;
};
const FeeSetupPage = ({ data: { fees } }: FeeListPageProps) => (
  <section className="plugin-bg-white p-1">
    <h3 className="bg-heading p-1">
      <i className="fa fa-university stroke-transparent" aria-hidden="true" /> Admin
      - Fee Management
    </h3>
    <div className="bg-heading px-1 dfinline">
      <h5 className="mtf-8 dark-gray">Fee Management</h5>
      <a href="" className="btn btn-primary">Save</a>
    </div>
    <div>
      <a href="" className="btn btn-primary f-12 m-1"><i className="fa fa-plus"></i>Add Fee Category</a>
      <div className="b-1 feeCategory">
        <h5 className="h5-fee-bg p-1 white">Create Fee Category</h5>
        <div className="collapse-icon">
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-minus"></i>
        </div>
        <form action="">
          <div>
            <label htmlFor="">Category Name</label>
            <input type="text" className="fwidth" />
          </div>
          <div>
            <label htmlFor="">Description</label>
            <input type="text" className="fwidth" />
          </div>
        </form>
        <a href="" className="btn btn-primary f-20 m-1"><i className="fa fa-plus"></i>Add Particulars to this Category</a>
        <div className="feeDetails">
          <div className="b-1 feeCategory collapse-header">
            {/* <div className="collapse-icon" onClick={onClickHeader}>
              <i className="fa fa-fw fa-plus"></i>
              <i className="fa fa-fw fa-minus"></i>
            </div> */}
            <div className="collapse-header">
              <h5 className="h5-fee-bg p-1 white "></h5>
              <div className="collapse-title">Contact Details</div>
              <div className="collapse-icon">
                <i className="fa fa-fw fa-plus"></i>
                <i className="fa fa-fw fa-minus"></i>
              </div>
              <div className="clear-both"></div>
            </div>
            <form action="">
              <div>
                <label htmlFor="">Fee particulars Name</label>
                <input type="text" className="fwidth" />
              </div>
              <div>
                <label htmlFor="">Description</label>
                <input type="text" className="fwidth" />
              </div>
              <div className="feeAppHead">
                <h5>Applicable To</h5>
              </div>
              <div className="feeSelect">
                <div>
                  <label htmlFor="">Batch</label>
                  <select name="" id="">
                    <option value="">Select</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">Department</label>
                  <select name="" id="">
                    <option value="">Select</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">Year</label>
                  <select name="" id="">
                    <option value="">Select</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">Student type</label>
                  <select name="" id="">
                    <option value="">Select</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">Gender</label>
                  <select name="" id="">
                    <option value="">Select</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">Amount</label>
                  <input type="number" name="" id="" />
                </div>
                <div className="mt-20">
                  <a href="" className="btn btn-primary m-r-1">Apply</a>
                  <a href="" className="btn btn-primary f-25"><i className="fa fa-trash"></i></a>
                </div>
                <hr />
              </div>
            </form>
            <a href="" className="btn btn-primary f-12 mlb"> <i className="fa fa-plus"></i>Applicable to</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default graphql<FeeListQuery, FeeListPageOwnProps, FeeListPageProps>(
  FeeListQueryGql
)(withLoadingHandler(FeeSetupPage));
