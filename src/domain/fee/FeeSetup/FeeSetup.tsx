import * as React from 'react';
import { graphql, MutationFunc } from 'react-apollo';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import * as AddFeeMutationGql from './FeeSetupMutation.graphql';

import {
  AddFeeMutation,
  AddFeeInput,
  AddFeeMutationVariables,
  // FeeData,
} from '../../types';

import withLoadingHandler from '../../../components/withLoadingHandler';

// import 'bootstrap/dist/css/bootstrap.min.css';


class FeeSetup extends React.Component<{}, {}>{
  render() {
    return (

      <section className="plugin-bg-white p-1">
        <h3 className="bg-heading p-1">
          <i className="fa fa-university stroke-transparent" aria-hidden="true" /> Admin
          - Fee Management
    </h3>
        <div className="bg-heading px-1 dfinline">
          <h5 className="mtf-8 dark-gray">Fee Management</h5>
          <a href="" className="btn btn-primary">Save</a>
        </div>

        <form action="">
          <button className="btn btn-primary" style={{width: '155px'}}><i className="fa fa-plus"></i> Add Fee Category</button>
          <div className="row">
            <div className="col-md-5">
              <div>
                <label htmlFor="">Category Name</label>
                <input type="text" className="fwidth" />
              </div>
            </div>
            <div className="col-md-7">
              <div>
                <label htmlFor="">Description</label>
                <input type="text" className="fwidth" />
              </div>
            </div>
          </div>
        </form>
        <button className="btn btn-primary f-20 m-1"><i className="fa fa-plus"></i>Add Particulars to this Category</button>
        <div className="feeDetails">
          <div className="b-1 feeCategory">
            <form action="">
              <div className="row">
                <div className="col-md-5">
                  <div>
                <label htmlFor="">Fee particulars Name</label>
                <input type="text" className="fwidth" />
              </div>
                </div>
                <div className="col-md-7">

              <div>
                <label htmlFor="">Description</label>
                <input type="text" className="fwidth" />
              </div>
                </div>
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
            <button className="btn btn-primary f-12 mlb"> <i className="fa fa-plus"></i>Applicable to</button>
          </div>
        </div>
      </section>
    );
  }
}

export default FeeSetup;
