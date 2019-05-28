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

class FeeSetting extends React.Component<{}, {}>{
  render() {
    return (
      <section className="plugin-bg-white p-1">
        <h3 className="bg-heading p-1">
          <i className="fa fa-university stroke-transparent" aria-hidden="true" /> Admin
          - Fee Management
    </h3>
        <div className="bg-heading px-1 dfinline">
          <h5 className="mtf-8 dark-gray">Fee Settngs</h5>
        </div>

        <div className="b-1 feeCategory">
          <form action="" className="grid">
            <h4 className="bg-heading p-1">Due Date</h4>
            <div className="border FirstRow p-1">
              <div>
                <label htmlFor="">Payment Method</label>
                <select name="" id="">
                  <option value="">Select</option>
                </select>
              </div>
              <div className="mx-2">
                <label htmlFor="">Installments</label>
                <select name="" id="">
                  <option value="">0</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Date</label>
                <input type="date" name="" id="" />
              </div>
              <div className="mx-2">
                <label htmlFor="">Frequency</label>
                <select name="" id="">
                  <option value="">Select</option>
                </select>
              </div>
            </div>
            <div className="border SecondRow p-1">
              <div className="Reminder feeMy">
                {/* first row */}

                <div className="feeFlex">
                  <input type="radio" className="feeMr" name="" id="" />
                  <label htmlFor="">Do Not Send Payment Reminder Automatically</label>
                </div>
                <div className="feeFlex">
                  <input type="radio" className="feeMr" name="" id="" />
                  <label htmlFor="">Send Automatic Payment Reminder </label>
                </div>
              </div>
              {/* first row */}
              {/* second row */}
              <h4 className="bg-heading">Reminder</h4>
              <div className="Srow">
                <div className="firstColumn">
                  <div className="feeFlex">
                    <input type="checkbox" className="feeMr" name="" id="" />
                    <label htmlFor="">First Payment Reminder</label>
                  </div>

                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="" id="" />
                    <label htmlFor="">Send__ Day(s) Before Due Date</label>
                  </div>
                </div>

                <div className="secondColumn">
                  <div className="feeFlex" >
                    <input type="checkbox" className="feeMr" name="" id="" />
                    <label htmlFor="">First Payment Reminder</label>
                  </div>

                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="" id="" />
                    <label htmlFor="">Send__ Day(s) Before Due Date</label>
                  </div>
                </div>

                <div className="thirdColumn">
                  <div className="feeFlex">
                    <input type="checkbox" className="feeMr" name="" id="" />
                    <label htmlFor="">First Payment Reminder</label>
                  </div>
                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="" id="" />
                    <label htmlFor="">Send Day(s) After Due Date</label>
                  </div>
                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="" id="" />
                    <label htmlFor="">Send Day(s) Until Paid</label>
                  </div>
                </div>

                <div className="fourthColumn">
                  <div className="feeFlex">
                    <input type="checkbox" className="feeMr" name="" id="" />
                    <label htmlFor="">Reminder Recipients</label>
                  </div>
                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="" id="" />
                    <label htmlFor="">Send to Primary Contact Only</label>
                  </div>
                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="" id="" />
                    <label htmlFor="">Send to Primary and Secondary Contact Only</label>
                  </div>
                </div>

              </div>
              {/* second row */}
            </div>
            <div className="border ThirdRow p-1">
              <div className="Reminder feeMy">
                {/* first row */}

                <div className="feeFlex">
                  <input type="radio" className="feeMr" name="" id="" />
                  <label htmlFor="">Do Not Assign Late Fee Automatically</label>
                </div>
                <div className="feeFlex">
                  <input type="radio" className="feeMr" name="" id="" />
                  <label htmlFor="">Assign Late Fee Automatically to OverDue Balance</label>
                </div>
              </div>
              {/* first row */}
              {/* second row */}
              <h4 className="bg-heading">Late Fee</h4>
              <div className="Srow">
                <div className="firstColumn">
                  <div className="feeFlex">
                    {/* <input type="checkbox" className="feeMr" name="" id="" /> */}
                    <label htmlFor="">Assign Late Fee__ Days(s) After Due Date</label>
                  </div>
                </div>

                <div className="secondColumn">
                  <div className="feeFlex" >
                    <input type="checkbox" className="feeMr" name="" id="" />
                    <label htmlFor="">Late Fee Calculation Method</label>
                  </div>

                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="" id="" />
                    <label htmlFor="">Flat Fee of Rs__</label>
                  </div>
                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="" id="" />
                    <label htmlFor="">__ % of invoice Total</label>
                  </div>
                </div>

                <div className="thirdColumn">
                  <div className="feeFlex">
                    <input type="checkbox" className="feeMr" name="" id="" />
                    <label htmlFor="">Late Fee Assignment Frequency</label>
                  </div>
                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="" id="" />
                    <label htmlFor="">One Time Only</label>
                  </div>
                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="" id="" />
                    <label htmlFor="">Repeat Every __ Days</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="feeFlexEnd">
              <a href="" className="btn btn-primary feeMr">Save</a>
              <a href="" className="btn btn-primary">Cancel</a>
            </div>
          </form>
        </div>

      </section>
    )
  }
}

export default FeeSetting;