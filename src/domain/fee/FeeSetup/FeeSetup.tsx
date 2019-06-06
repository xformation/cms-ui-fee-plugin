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


class FeeSetup extends React.Component<any, any>{
  constructor(props: any){
      super(props);
      this.state = {
          count: 1,
          toggle: true,
          countParticularDiv: 1
      }
      this.createApplicableTo = this.createApplicableTo.bind(this);
      this.createParticularDiv = this.createParticularDiv.bind(this);
  }

  showFeeCategory= (e: any) => {
    e.preventDefault();
    let dvCat : any = document.querySelector("#feeCategoryDiv");
    let dvHeadRow : any = document.querySelector("#headerRowDiv");
    dvCat.setAttribute("class", "b-1");
    dvHeadRow.setAttribute("class", "b-1 h5-fee-bg");
  }

  // showFeeParticulars= (e: any) => {
  //   e.preventDefault();
  //   let dvCat : any = document.querySelector("#feeParticularDiv");
  //   dvCat.setAttribute("class", "feeDetails");
  // }

  

  toggleApplicableTo= (e: any) => {
      let btnTlg : any = document.querySelector("#btnToggle");
      let dvAplv : any = document.querySelectorAll("#feeApplicableToDiv");
      let dvBtnAplv : any = document.querySelector("#divShowBtnApplicableTo");
      
      let isDisplay = this.state.toggle;
      if(isDisplay){
        this.setState({
          toggle: false
        });
      }else{
        this.setState({
          toggle: true
        });
      }
      for(let i=0; i<dvAplv.length; i++){
        if(isDisplay){
          dvAplv[i].setAttribute("class", "hide");
          btnTlg.setAttribute("class", "fa fa-plus btn-primary mlb f-12");
          dvBtnAplv.setAttribute("class", "hide");
        }else{
          dvAplv[i].removeAttribute("class");
          btnTlg.setAttribute("class", "fa fa-minus btn-primary mlb f-12");
          dvBtnAplv.setAttribute("class", "m-1");
        }
      }
      
  }

  showParticularDiv= (e: any) => {
    this.setState({
      countParticularDiv: this.state.countParticularDiv + 1
    });
    this.createParticularDiv(this.state.countParticularDiv);
    let dvPrt : any = document.querySelectorAll("#feeParticularDiv");
    for(let i = 0; i < dvPrt.length; i++){
      // let dvPrt : any = document.querySelector("#feeParticularDiv"+i);
      dvPrt[i].setAttribute("class", "feeDetails");
    }
    // for(let i = 0; i < this.state.countParticularDiv; i++){
    //   let dvPrt : any = document.querySelector("#feeParticularDiv"+i);
    //   dvPrt.setAttribute("class", "feeDetails");
    // }
    
  }

  createParticularDiv(cnt: any) {
    const retVal = [];
    for(let i = 0; i < cnt; i++){
      retVal.push (
        <div id={"feeParticularDiv"} className="hide">
          <div className="m-1 b-1 feeCategory">
                <div className="m-1 row">
                    <div className="col-md-5">
                        <div>
                            <label htmlFor="">Fee particulars Name</label>
                            <input type="text" className="fwidth" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <label htmlFor="">Description</label>
                            <input type="text" className="fwidth" />
                        </div>
                    </div>
                    <div className="col-md-1"><button onClick={this.toggleApplicableTo} id="btnToggle" className="fa fa-minus btn-primary mlb f-12" style={{border: 'none',paddingRight:'17px'}} ></button></div>
                </div>
                {
                  this.createApplicableTo(this.state.count)
                }
              <div id="divShowBtnApplicableTo" className="m-1">
                  <button id={""+i} name={""+i} className="btn btn-primary f-12 mlb"  onClick={(e: any) => this.showApplicableTo(i, e)}> <i className="fa fa-plus"></i>Applicable to</button>
              </div>
            </div>
        </div>
      );
    }
    return retVal;
  }

  showApplicableTo= (index: any, e: any) => {
    const { id } = e.nativeEvent.target;
    
    this.setState({
      count: this.state.count + 1
    });
    
    this.createApplicableTo(this.state.count);
    

  }

  createApplicableTo(cnt: any) {
    const retVal = [];
    for(let i = 0; i < cnt; i++){
      retVal.push (
          <div id={"feeApplicableToDiv"}>
              <div className="m-1 col-md-5 feeAppHead">
                  <h5>Applicable To</h5>
              </div>
              <div className="m-1 col-md-5 feeSelect">
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
                      <input type="number" name="" id="" style={{width: '100px'}}/>
                  </div>
                  <div className="mt-20">
                      <button className="btn btn-primary m-r-1">Apply</button>
                  </div>
                  <div className="mt-20">
                      <button className="btn btn-primary f-12"><i className="fa fa-trash"></i></button>
                  </div>
                 
              </div>
              <hr className="m-l-2 m-r-2"/>
          </div>
        );
    }
    return retVal;
  }

  render() {
    const { feeSetupData } = this.state;
    return (

      <section className="plugin-bg-white p-1">
          <h3 className="bg-heading p-1">
            <i className="fa fa-university stroke-transparent" aria-hidden="true" /> Admin - Fee Management
          </h3>

          <div className="bg-heading px-1 dfinline">
            <h5 className="mtf-8 dark-gray">Fee Management</h5>
            <a href="" className="btn btn-primary">Save</a>
          </div>

          <div className="stroke-transparent mr-1">&nbsp;</div>
          <button className="btn btn-primary" style={{width: '155px'}} onClick={this.showFeeCategory}><i className="fa fa-plus"></i> Add Fee Category</button>
          <div className="stroke-transparent mr-1">&nbsp;</div>
          <div id="headerRowDiv" className="hide"><div className="m-1 row">Create Fee Category</div></div>
          <div id="feeCategoryDiv" className="hide">
              <div className="row m-1">
                <div >
                  <div>
                    <label htmlFor="">Category Name</label>
                    <input type="text" style={{width: '300px'}} />
                  </div>
                </div>
                <div className="m-l-2" style={{width: '70%'}}>
                  <div>
                    <label htmlFor="">Description</label>
                    <input type="text" className="fwidth" />
                  </div>
                </div>
              </div>
              <button className="btn btn-primary f-20 m-1" onClick={this.showParticularDiv}><i className="fa fa-plus"></i>Add Particulars to this Category</button>
              {
                this.createParticularDiv(this.state.countParticularDiv)
              }
          </div>
        
      </section>
    );
  }
}

export default FeeSetup;
