import * as React from 'react';
import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import * as DueDateAddMutationGql from './DueDateAddMutation.graphql';
import * as DueDateUpdateMutationGql from './DueDateUpdateMutation.graphql';
import * as PaymentRemainderAddMutationGql from './PaymentRemainderAddMutation.graphql';
import * as PaymentRemainderUpdateMutationGql from './PaymentRemainderUpdateMutation.graphql';
import * as LateFeeAddMutationGql from './LateFeeAddMutation.graphql';
import * as LateFeeUpdateMutationGql from './LateFeeUpdateMutation.graphql';
import * as AddAllMutationGql from './AddAllMutation.graphql';
// import * as AddFeeMutationGql from './FeeSetupMutation.graphql';
import withBranchDataLoader from "../withBranchDataLoader";

import {
  LoadBranchQueryType,
  DueDateAddMutationType,
  DueDateUpdateMutationType,
  PaymentRemainderAddMutationType,
  PaymentRemainderUpdateMutationType,
  LateFeeAddMutationType,
  LateFeeUpdateMutationType,
  AddAllMutationType,
  AddFeeMutation,
  AddFeeInput,
  AddFeeMutationVariables,
  // FeeData,
} from '../../types';

// import withLoadingHandler from '../../../components/withLoadingHandler';

// import 'bootstrap/dist/css/bootstrap.min.css';

type FeeSettingRootProps = RouteComponentProps<{
  collegeId: string;
}> & {
  data: QueryProps & LoadBranchQueryType;
}

type FeeSettingPageProps = FeeSettingRootProps & {
  addDueDateMutation: MutationFunc<DueDateAddMutationType>;
  updateDueDateMutation: MutationFunc<DueDateUpdateMutationType>;
  addPaymentRemainderMutation: MutationFunc<PaymentRemainderAddMutationType>;
  updatePaymentRemainderMutation: MutationFunc<PaymentRemainderUpdateMutationType>;
  addLateFeeMutation: MutationFunc<LateFeeAddMutationType>;
  updateLateFeeMutation: MutationFunc<LateFeeUpdateMutationType>;
  addAllMutation: MutationFunc<AddAllMutationType>;
  
  
  // mutate: MutationFunc<DailyStudentAttendanceListQuery>;
  
};

type FeeSettingState = {
  feeSettingData: any,
  branches: any
}

class FeeSetting extends React.Component<FeeSettingPageProps, FeeSettingState>{
  constructor(props: FeeSettingPageProps) {
    super(props);
    this.state = {
      feeSettingData: {
        college: {
          id: 951
        },
        branch: {
          id: ""
        },
        paymentOption: {
          id: ""
        },
        installments: {
          id: ""
        },
        dayOfInstallment:{
          id: ""
        },
        frequency: {
          id: ""
        },
        dueDate: {
          id: ""
        },
        autoPaymentRemainderOption:{
          optVal: ""
        },
        firstPaymentRemainder: {
          value: ""
        },
        firstPaymentRemainderDays: {
          fpRevVal: ""
        },
        secondPaymentRemainder: {
          value: ""
        },
        secondPaymentRemainderDays: {
          scRevVal: ""
        },
        odPaymentRemainder: {
          value: ""
        },
        odPaymentRemainderOption: {
          odPmtRemVal: ""
        },
        remainderRecipient: {
          value: ""
        },
        remainderRcpOption: {
          remRcpVal: ""
        },


        autoLateFeeOption:{
          autoLateFeeValue: ""
        },
        lateFeeDays:{
          lateFeeDaysValue: ""
        },
        lateFeeCalcMethod: {
          lfcmValue: ""
        },
        lateFeeCalcOption:{
          lateFeeCalcOptionValue: ""
        },
        fixedLateFee:{
          fixedLateFeeValue: ""
        },
        percentLateFee:{
          percentLateFeeValue: ""
        },
        lateFeeFrq: {
          lateFeeFrqValue: ""
        },
        lateFeeFrqOption:{
          lateFeeFrqOptionValue: ""
        },
        lateFeeRepeatDays:{
          lfrdValue: ""
        },
        paymentRemainder: { 
          id: ""
        },
        lateFee: {
          id: ""
        },
        ddIds: {
          key_installment: "",
          key_onetime: ""
        }
      },
      branches: []
    };
    this.createBranches = this.createBranches.bind(this);
    this.checkFeeCheckbox = this.checkFeeCheckbox.bind(this);
    
  }

  createBranches(branches: any) {
    let branchesOptions = [<option key={0} value="">Select Branch</option>];
    for (let i = 0; i < branches.length; i++) {
      branchesOptions.push(
        <option key={branches[i].id} value={branches[i].id}>{branches[i].branchName}</option>
      );
    }
    return branchesOptions;
  }
  
  onChange = (e: any) => {
    const { name, value } = e.nativeEvent.target;
    const { feeSettingData } = this.state;
    if (name === "branch") {
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          branch: {
            id: value
          }
        }
      });
    }else if (name === "paymentOption") {
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          paymentOption: {
            id: value
          }
        }
      });
      if(value === "ONETIME"){
        let ins: any = document.querySelector("#installments");
        ins.options.selectedIndex = 1;
        ins.setAttribute("disabled", true);
        let dd : any = document.querySelector("#dueDate");
        dd.options.selectedIndex = 0;
        dd.setAttribute("disabled", true);
        let fr : any = document.querySelector("#frequency");
        fr.options.selectedIndex = 0;
        fr.setAttribute("disabled", true);
      }else{
        let ins : any = document.querySelector("#installments");
        ins.removeAttribute("disabled");
        let dd : any = document.querySelector("#dueDate");
        dd.removeAttribute("disabled");
        let fr : any = document.querySelector("#frequency");
        fr.removeAttribute("disabled");
      }
      
    }else if (name === "installments") {
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          installments: {
            id: value
          }
        }
      });
    }else if (name === "frequency") {
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          frequency: {
            id: value
          }
        }
      });
    }else if (name === "dayOfInstallment") {
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          dayOfInstallment: {
            id: value
          }
        }
      });
    }else if (name === "pmtRemOpt") {
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          autoPaymentRemainderOption: {
            optVal: value
          }
        }
      });
    }else if (name === "rdOdPrem") {
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          odPaymentRemainderOption: {
            odPmtRemVal: value
          }
        }
      });
    }else if (name === "rdRemRcp") {
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          remainderRcpOption: {
            remRcpVal: value
          }
        }
      });
    }else if (name === "txtFpPmtDays") {
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          firstPaymentRemainderDays: {
            fpRevVal: value
          }
        }
      });
    }else if (name === "txtScPmtDays") {
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          secondPaymentRemainderDays: {
            scRevVal: value
          }
        }
      });
    }
    
    else if (name === "rdAutoLateFee") { 
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          autoLateFeeOption: {
            autoLateFeeValue: value
          }
        }
      });
    }else if (name === "txtLtFDays") { 
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          lateFeeDays: {
            lateFeeDaysValue: value
          }
        }
      });
    } 
    else if (name === "rdLateFeeCalc") { 
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          lateFeeCalcOption:{
            lateFeeCalcOptionValue: value
          }
        }
      });
      let txtFLtFee : any = document.querySelector("#txtFixedLateFee");
      let txtPLtFee : any = document.querySelector("#txtPercentLateFee");
      if(value === "FIXEDLATEFEE"){
        txtFLtFee.disabled = false; 
        txtPLtFee.disabled = true; 
        txtPLtFee.value = "";
      }else if(value === "PERCENTLATEFEE"){
        txtFLtFee.disabled = true; 
        txtFLtFee.value = "";
        txtPLtFee.disabled = false; 
      }
    }else if (name === "txtFixedLateFee") {
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          fixedLateFee: {
            fixedLateFeeValue: value
          }
        }
      });
    }
    else if (name === "txtPercentLateFee") {
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          percentLateFee: {
            percentLateFeeValue: value
          }
        }
      });
    }
    else if (name === "rdLateFeeFrq") { 
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          lateFeeFrqOption:{
            lateFeeFrqOptionValue: value
          }
        }
      });
    }else if (name === "txtLtFeeRptDays") {
      this.setState({
        feeSettingData: {
          ...feeSettingData,
          lateFeeRepeatDays:{
            lfrdValue: value
          }
        }
      });
    }
  }

  saveDueDate = (e: any) => {
    const { id } = e.nativeEvent.target;
    const { addDueDateMutation, updateDueDateMutation } = this.props;
    const { feeSettingData } = this.state;
    e.preventDefault();

    if(feeSettingData.branch.id === ""){
      alert("Please select branch");
      return;
    }else if(feeSettingData.paymentOption.id === ""){
      alert("Please select payment method");
      return;
    }

    let dayDescription: any;
    if(feeSettingData.paymentOption.id === "INSTALLMENTS"){
        if(feeSettingData.installments.id === ""){
          alert("Please select installment option");
          return;
        }else if(feeSettingData.dayOfInstallment.id === ""){
          alert("Please select day of installment");
          return;
        }else if(feeSettingData.frequency.id === ""){
          alert("Please select frequency of installment");
          return;
        }
        dayDescription = feeSettingData.dayOfInstallment.id + " of every ";
        if(feeSettingData.frequency.id === "WEEKLY"){
          dayDescription = "WEEKLY"
        }else if(feeSettingData.frequency.id === "MONTHLY"){
          dayDescription = dayDescription + "month"
        }else if(feeSettingData.frequency.id === "QUARTERLY"){
          dayDescription = dayDescription + "quarter"
        }else if(feeSettingData.frequency.id === "HALFYEARLY"){
          dayDescription = dayDescription + "six months"
        }else if(feeSettingData.frequency.id === "ANNUALLY"){
          dayDescription = "ANNUALLY"
        }
    }else if(feeSettingData.paymentOption.id === "ONETIME"){
        feeSettingData.installments.id = "1";
        feeSettingData.dayOfInstallment.id = null;
        feeSettingData.frequency.id = null;
        dayDescription = null;
    }

    let addDueDateInput = {
      branchId: feeSettingData.branch.id,
      collegeId: feeSettingData.college.id,
      paymentMethod: feeSettingData.paymentOption.id,
      installments: feeSettingData.installments.id,
      dayDesc: dayDescription,
      paymentDay: feeSettingData.dayOfInstallment.id,
      frequency: feeSettingData.frequency.id
    };

    let selId = 0;
    if(feeSettingData.paymentOption.id === "INSTALLMENTS"){
      selId = feeSettingData.ddIds.key_installment;
    }else{
      selId = feeSettingData.ddIds.key_onetime;
    }
    let updateDueDateInput = {
      id: selId,
      branchId: feeSettingData.branch.id,
      collegeId: feeSettingData.college.id,
      paymentMethod: feeSettingData.paymentOption.id,
      installments: feeSettingData.installments.id,
      dayDesc: dayDescription,
      paymentDay: feeSettingData.dayOfInstallment.id,
      frequency: feeSettingData.frequency.id
    };

    if(id === "btnSaveDueDate"){
        if((feeSettingData.paymentOption.id === "INSTALLMENTS" && feeSettingData.ddIds.key_installment === "")
              || (feeSettingData.paymentOption.id === "ONETIME" && feeSettingData.ddIds.key_onetime === "")){
            return addDueDateMutation({
              variables: { input: addDueDateInput },
            }).then(data => {

              if(feeSettingData.paymentOption.id === "INSTALLMENTS"){
                feeSettingData.ddIds.key_installment = data.data.addDueDate.dueDate.id;
              }else{
                feeSettingData.ddIds.key_onetime = data.data.addDueDate.dueDate.id;
              }
              
              this.setState({
                feeSettingData: feeSettingData
              });
              console.log('Add due date result ::::: ', data);
              alert("Due date added successfully!");
            }).catch((error: any) => {
              alert("Due to some error due date could not be added");
              console.log('there was an error sending the add due date mutation result', error);
              return Promise.reject(`Could not retrieve add due date data: ${error}`);
            });
        }else{
            return updateDueDateMutation({
              variables: { input: updateDueDateInput },
            }).then(data => {
              feeSettingData.dueDate.id = data.data.updateDueDate.dueDate.id;
              this.setState({
                feeSettingData: feeSettingData
              });
              console.log('Update due date result ::::: ', data);
              alert("Due date updated successfully!");
            }).catch((error: any) => {
              alert("Due to some error due date could not be updated");
              console.log('there was an error sending the update due date mutation result', error);
              return Promise.reject(`Could not retrieve update due date data: ${error}`);
            });
        }
    }else{
      if((feeSettingData.paymentOption.id === "INSTALLMENTS" && feeSettingData.ddIds.key_installment === "")
      || (feeSettingData.paymentOption.id === "ONETIME" && feeSettingData.ddIds.key_onetime === "")){
        return addDueDateInput;
      }
      return updateDueDateInput;
    }
    
  }

  checkFeeCheckbox(e: any) {
    const { id, value } = e.nativeEvent.target;
    const { feeSettingData } = this.state;
    let isChecked  = e.nativeEvent.target.checked;
    if(id === "chkFpRem"){
        let fpPD : any = document.querySelector("#txtFpPmtDays");
        if(isChecked){
          feeSettingData.firstPaymentRemainder.value = "YES"
          fpPD.disabled = false; 
        }else{
          feeSettingData.firstPaymentRemainder.value = "NO"
          fpPD.disabled = true; 
          fpPD.value = "";
        }
    }
    if(id === "chkScRem"){
      let scPD : any = document.querySelector("#txtScPmtDays");
      if(isChecked){
        feeSettingData.secondPaymentRemainder.value = "YES"
        scPD.disabled = false; 
      }else{
        feeSettingData.secondPaymentRemainder.value = "NO"
        scPD.disabled = true; 
        scPD.value = "";
      }
    }

    if(id === "chkOdRem"){
      if(isChecked){
        feeSettingData.odPaymentRemainder.value = "YES"
      }else{
        feeSettingData.odPaymentRemainder.value = "NO"
      }
    }

    if(id === "remRcp"){
      if(isChecked){
        feeSettingData.remainderRecipient.value = "YES"
      }else{
        feeSettingData.remainderRecipient.value = "NO"
      }
    }
    
    if(id === "chkLtFeeCalc"){
      if(isChecked){
        feeSettingData.lateFeeCalcMethod.lfcmValue = "YES" 
      }else{
        feeSettingData.lateFeeCalcMethod.lfcmValue = "NO"
      }
    }

    
    if(id === "chkLateFeeFrq"){ 
      if(isChecked){
        feeSettingData.lateFeeFrq.lateFeeFrqValue = "YES" 
      }else{
        feeSettingData.lateFeeFrq.lateFeeFrqValue = "NO"
      }
    }
    
    
    this.setState({
      feeSettingData: feeSettingData
    });
  }

  savePaymentRem= (e: any) => {
    const { id } = e.nativeEvent.target;
    const { addPaymentRemainderMutation, updatePaymentRemainderMutation } = this.props;
    const { feeSettingData } = this.state;
    e.preventDefault();
    let txtfpd : any = document.querySelector("#txtFpPmtDays");
    let txtscd : any = document.querySelector("#txtScPmtDays");
    if(feeSettingData.branch.id === ""){
      alert("Please select branch");
      return;
    }

    if(feeSettingData.autoPaymentRemainderOption.optVal === ""){
      alert("Please select a payment remainder option.");
      return;
    }else{
      if(feeSettingData.autoPaymentRemainderOption.optVal === "YES"){
        let fpchk : any = document.querySelector("#chkFpRem");
        // let txtfpd : any = document.querySelector("#txtFpPmtDays");
        if(!fpchk.checked){
          alert("Please select first payment remainder.");
          return;
        }else if(fpchk.checked && txtfpd.value.trim() === ""){
          alert("Please provide number of days for Send Day(s) Before Due Date under first payment remainder");
          return;
        }
        let scchk : any = document.querySelector("#chkScRem");
        // let txtscd : any = document.querySelector("#txtScPmtDays");
        if(scchk.checked && txtscd.value.trim() === ""){
          alert("Please provide number of days for Send Day(s) Before Due Date under second payment remainder option");
          return;
        }

        let odchk : any = document.querySelector("#chkOdRem");
        if(!odchk.checked){
          alert("Please select overdue payment remainder");
          return;
        }else if(odchk.checked && feeSettingData.odPaymentRemainderOption.odPmtRemVal === ""){
          alert("Please select one overdue payment remainder option");
          return;
        }

        let repchk : any = document.querySelector("#remRcp");
        if(!repchk.checked){
          alert("Please select remainder recipients");
          return;
        }else if(repchk.checked && feeSettingData.remainderRcpOption.remRcpVal === ""){
          alert("Please select one remainder recipient");
          return;
        }
      }
    }
    
    let autRem = feeSettingData.autoPaymentRemainderOption.optVal;
    let fpR = null;
    let fpRDy = null;
    let scR = null;
    let scRdy = null;
    let isOdPr = null;
    let odP = null;
    let isRr = null;
    let rr = null;
    if(autRem === "YES"){
      fpR = feeSettingData.firstPaymentRemainder.value;
      if(txtfpd.value.trim() !== ""){
        fpRDy = txtfpd.value.trim();
      }
      scR = feeSettingData.secondPaymentRemainder.value;
      if(txtscd.value.trim() !== ""){
        scRdy = txtscd.value.trim();
      }
      isOdPr = feeSettingData.odPaymentRemainder.value;
      odP = feeSettingData.odPaymentRemainderOption.odPmtRemVal;
      isRr =  feeSettingData.remainderRecipient.value;
      rr = feeSettingData.remainderRcpOption.remRcpVal;
    }

    let addPmtRemInput = {
      isAutoRemainder: autRem,
      isFirstPaymentRemainder: fpR,
      firstPaymentRemainderDays: fpRDy,
      isSecondPaymentRemainder: scR,
      secondPaymentRemainderDays: scRdy,
      isOverDuePaymentRemainder: isOdPr,
      overDuePaymentRemainderAfterDueDateOrUntilPaid: odP,
      isRemainderRecipients: isRr,
      remainderRecipients: rr,
      collegeId: feeSettingData.college.id,
      branchId: feeSettingData.branch.id
    };

    let updatePmtRemInput = {
      id: feeSettingData.paymentRemainder.id,
      isAutoRemainder: autRem,
      isFirstPaymentRemainder: fpR,
      firstPaymentRemainderDays: fpRDy,
      isSecondPaymentRemainder: scR,
      secondPaymentRemainderDays: scRdy,
      isOverDuePaymentRemainder: isOdPr,
      overDuePaymentRemainderAfterDueDateOrUntilPaid: odP,
      isRemainderRecipients: isRr,
      remainderRecipients: rr,
      collegeId: feeSettingData.college.id,
      branchId: feeSettingData.branch.id
    };

    if(id === "btnSavePmtRem"){
      if(feeSettingData.paymentRemainder.id === ""){
        return addPaymentRemainderMutation({
          variables: { input: addPmtRemInput },
        }).then(data => {
          feeSettingData.paymentRemainder.id = data.data.addPaymentRemainder.paymentRemainder.id;
          console.log('Add payment remainder result ::::: ', data);
          alert("Payment remainder added successfully!");
        }).catch((error: any) => {
          console.log('there was an error sending the add payment remainder mutation result', error);
          return Promise.reject(`Could not retrieve add payment remainder data: ${error}`);
        });
      }else{
        return updatePaymentRemainderMutation({
          variables: { input: updatePmtRemInput },
        }).then(data => {
          feeSettingData.paymentRemainder.id = data.data.updatePaymentRemainder.paymentRemainder.id;
          console.log('Update payment remainder result ::::: ', data);
          alert("Payment remainder updated successfully!");
        }).catch((error: any) => {
          console.log('there was an error sending the update payment remainder mutation result', error);
          return Promise.reject(`Could not retrieve update payment remainder data: ${error}`);
        });
      }
      
    }else {
      if(feeSettingData.paymentRemainder.id === ""){
        return addPmtRemInput;
      }
      return updatePmtRemInput;
    }
    
  }

  saveLateFee= (e: any) => {
    const { id } = e.nativeEvent.target;
    const { addLateFeeMutation, updateLateFeeMutation } = this.props;
    const { feeSettingData } = this.state;
    e.preventDefault();
    let txtLtFdays : any = document.querySelector("#txtLtFDays");
    let txtFlFee : any = document.querySelector("#txtFixedLateFee");
    let txtPlFee : any = document.querySelector("#txtPercentLateFee");
    let txtLtFRpdays : any = document.querySelector("#txtLtFeeRptDays");

    if(feeSettingData.branch.id === ""){
      alert("Please select branch");
      return;
    }

    if(feeSettingData.autoLateFeeOption.autoLateFeeValue === ""){
      alert("Please select a late fee assignment option.");
      return;
    }else{
      if(feeSettingData.autoLateFeeOption.autoLateFeeValue === "YES"){
        if(txtLtFdays.value.trim() === ""){
          alert("Please provide number of days for assign late fee day(s) after due date");
          return;
        }
        let ltFcChk : any = document.querySelector("#chkLtFeeCalc");
        if(!ltFcChk.checked){
          alert("Please select late fee calculation method");
          return;
        }else if(ltFcChk.checked && feeSettingData.lateFeeCalcOption.lateFeeCalcOptionValue === ""){
          alert("Please select one late fee calculation method. Either fixed or percent based");
          return;
        }else if(ltFcChk.checked && feeSettingData.lateFeeCalcOption.lateFeeCalcOptionValue === "FIXEDLATEFEE" && txtFlFee.value.trim() === ""){
          alert("Please provide some value for flat fee");
          return;
        }else if(ltFcChk.checked && feeSettingData.lateFeeCalcOption.lateFeeCalcOptionValue === "PERCENTLATEFEE" && txtPlFee.value.trim() === ""){
          alert("Please provide some value for % of invoice total");
          return;
        }

        let chkLfFrq : any = document.querySelector("#chkLateFeeFrq");
        if(!chkLfFrq.checked){
          alert("Please select late fee assignment frequency");
          return;
        }else if(chkLfFrq.checked && feeSettingData.lateFeeFrqOption.lateFeeFrqOptionValue === ""){
          alert("Please select one late fee assignment frequency");
          return;
        }else if(chkLfFrq.checked && feeSettingData.lateFeeFrqOption.lateFeeFrqOptionValue === "REPEATEDLATEFEE" && txtLtFRpdays.value.trim() === ""){
          alert("Please provide some value for repeat every days");
          return;
        }
      }
    }

    let isLtFee = feeSettingData.autoLateFeeOption.autoLateFeeValue;
    let ltFeeD = null;
    let chrgType = null;
    let fxChrg = null;
    let prChrg = null;
    let ltFeeFrq = null;
	  let lfFeeRd = null;
    
    if(isLtFee === "YES"){
      if(txtLtFdays.value.trim() !== ""){
        ltFeeD = txtLtFdays.value.trim();
      }
      chrgType = feeSettingData.lateFeeCalcOption.lateFeeCalcOptionValue;
      if(feeSettingData.lateFeeCalcOption.lateFeeCalcOptionValue === "FIXEDLATEFEE"){
        fxChrg = txtFlFee.value.trim();
      }else {
        prChrg = txtPlFee.value.trim();
      }
      ltFeeFrq = feeSettingData.lateFeeFrqOption.lateFeeFrqOptionValue;

      if(feeSettingData.lateFeeFrqOption.lateFeeFrqOptionValue === "REPEATEDLATEFEE"){
        lfFeeRd = txtLtFRpdays.value.trim();
      }
    }

    let addLateFeeInput = {
      isAutoLateFee: isLtFee,
      lateFeeDays: ltFeeD,
      chargeType: chrgType,
      fixedCharges: fxChrg,
      percentCharges: prChrg,
      lateFeeFrequency: ltFeeFrq,
      lateFeeRepeatDays: lfFeeRd,
      collegeId: feeSettingData.college.id,
      branchId: feeSettingData.branch.id
    };

    let updateLateFeeInput = {
      id: feeSettingData.lateFee.id,
      isAutoLateFee: isLtFee,
      lateFeeDays: ltFeeD,
      chargeType: chrgType,
      fixedCharges: fxChrg,
      percentCharges: prChrg,
      lateFeeFrequency: ltFeeFrq,
      lateFeeRepeatDays: lfFeeRd,
      collegeId: feeSettingData.college.id,
      branchId: feeSettingData.branch.id
    };

    if(id === "btnSaveLateFee"){
      if(feeSettingData.lateFee.id === ""){
        return addLateFeeMutation({
          variables: { input: addLateFeeInput },
        }).then(data => {
          feeSettingData.lateFee.id = data.data.addLateFee.lateFee.id;
          console.log('Add late fee result ::::: ', data);
          alert("Late fee added successfully!");
        }).catch((error: any) => {
          console.log('there was an error sending the add late fee mutation result', error);
          return Promise.reject(`Could not retrieve add late fee data: ${error}`);
        });
      }else{
        return updateLateFeeMutation({
          variables: { input: updateLateFeeInput },
        }).then(data => {
          feeSettingData.lateFee.id = data.data.updateLateFee.lateFee.id;
          console.log('Update late fee result ::::: ', data);
          alert("Late fee updated successfully!");
        }).catch((error: any) => {
          console.log('there was an error sending the update late fee mutation result', error);
          return Promise.reject(`Could not retrieve update late fee data: ${error}`);
        });
      }
      
    }else{
      if(feeSettingData.lateFee.id === ""){
        return addLateFeeInput;
      }
      return updateLateFeeInput;
    }
    

  }

  saveAll= (e: any) => {
    const { id } = e.nativeEvent.target;
    const { addAllMutation } = this.props;
    const { feeSettingData } = this.state;
    let ddInput = this.saveDueDate(e);
    if(ddInput == null || ddInput === undefined){
        return;
    }
    let prInput = this.savePaymentRem(e);
    if(prInput == null || prInput === undefined){
      return;
    }
    let lfInput = this.saveLateFee(e);
    if(lfInput == null || lfInput === undefined){
      return;
    }
    return addAllMutation({
      variables: { inputd: ddInput,  inputp: prInput, inputl: lfInput}
    }).then(data => {
      console.log('Add all result ::::: ', data);
      alert("Due date, payment remainder and late fee added successfully");
    }).catch((error: any) => {
      console.log('there was an error sending the add all mutation result', error);
      alert("Due to some error due date, payment remainder and late fee could not be saved");
      return Promise.reject(`Could not retrieve add all data: ${error}`);
    });
  }

  render() {
    const { data: { getAllBranches, refetch }, addDueDateMutation, updateDueDateMutation, addPaymentRemainderMutation, updatePaymentRemainderMutation, addLateFeeMutation, updateLateFeeMutation, addAllMutation } = this.props;
    const { feeSettingData, branches } = this.state;

    return (
      <section className="plugin-bg-white p-1">
        <h3 className="bg-heading p-1">
          <i className="fa fa-university stroke-transparent" aria-hidden="true" /> Admin - Fee Management
        </h3>
        <div className="bg-heading px-1 dfinline">
          <h5 className="mtf-8 dark-gray">Fee Settngs</h5>
        </div>
        
        <div className="b-1 feeCategory">
          <form action="" className="grid">
            <h4 className="bg-heading p-1">Due Date</h4>
            <div className="border FirstRow p-1">
                <div>
                  <label htmlFor="">Branch</label>
                  <select required name="branch" id="branch" onChange={this.onChange} value={feeSettingData.branch.id} >
                      {this.createBranches(this.props.data.getAllBranches)}
                    </select>
                </div>
            </div>
            <div className="border FirstRow p-1">
              <div>
                <label htmlFor="">Payment Method</label>
                <select name="paymentOption" id="paymentOption" onChange={this.onChange}>
                  <option value="">Select</option>
                  <option value="INSTALLMENTS">Installments</option>
                  <option value="ONETIME">One Time</option>
                </select>
              </div>
              <div className="mx-2">
                <label htmlFor="">Installments</label>
                <select name="installments" id="installments" onChange={this.onChange}>
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div className="mx-2">
                <label htmlFor="">Day of Installment</label>
                <select name="dayOfInstallment" id="dayOfInstallment" onChange={this.onChange}>
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>              
                </select>
              </div>
              <div className="mx-2">
                <label htmlFor="">Frequency</label>
                <select name="frequency" id="frequency" onChange={this.onChange}>
                  <option value="">Select</option>
                  <option value="WEEKLY">Weekly</option>
                  <option value="MONTHLY">Monthly</option>
                  <option value="QUARTERLY">Quarterly</option>
                  <option value="HALFYEARLY">Half Yearly</option>
                  <option value="ANNUALLY">Yearly</option>
                </select>
              </div>
              <div>
                <label htmlFor="">&nbsp;</label>
                <button className="btn btn-primary dflex" type="button" id="btnSaveDueDate" name="btnSaveDueDate" onClick={this.saveDueDate}>Save Due Date</button>
              </div>

            </div>
            <div className="border SecondRow p-1">
              <div className="Reminder feeMy">
                {/* first row */}

                <div className="feeFlex">
                  <input type="radio" className="feeMr" name="pmtRemOpt" id="pmtRemOpt" value="NO" onChange={this.onChange}/>
                  <label htmlFor="">Do Not Send Payment Reminder Automatically</label>
                </div>
                <div className="feeFlex">
                  <input type="radio" className="feeMr" name="pmtRemOpt" id="pmtRemOpt" value="YES" onChange={this.onChange}/>
                  <label htmlFor="">Send Automatic Payment Reminder </label>
                </div>
              </div>
              {/* first row */}
              {/* second row */}
              <h4 className="bg-heading">Reminder</h4>
              <div className="Srow">
                <div className="firstColumn">
                  <div className="feeFlex">
                    <input type="checkbox" className="feeMr" name="chkFpRem" id="chkFpRem" onClick={(e: any) => this.checkFeeCheckbox(e)}/>
                    <label htmlFor="">First Payment Reminder</label>
                  </div>

                  <div className="feeFlex">
                    {/* <input type="radio" className="feeMr" name="" id="" /> */}
                    <label htmlFor="">Send Day(s) Before Due Date </label>
                    <input type="text" className="gf-form-input" name="txtFpPmtDays" id="txtFpPmtDays" disabled onChange={this.onChange} style={{width: '38px', height:'22px'}}/>
                  </div>
                </div>

                <div className="secondColumn">
                  <div className="feeFlex" >
                    <input type="checkbox" className="feeMr" name="chkScRem" id="chkScRem" onClick={(e: any) => this.checkFeeCheckbox(e)}/>
                    <label htmlFor="">Second Payment Reminder</label>
                  </div>

                  <div className="feeFlex">
                    {/* <input type="radio" className="feeMr" name="" id="" /> */}
                    <label htmlFor="">Send Day(s) Before Due Date </label>
                    <input type="text" className="gf-form-input" name="txtScPmtDays" id="txtScPmtDays" disabled onChange={this.onChange} style={{width: '38px', height:'22px'}}/>
                  </div>
                </div>

                <div className="thirdColumn">
                  <div className="feeFlex">
                    <input type="checkbox" className="feeMr" name="chkOdRem" id="chkOdRem" onClick={(e: any) => this.checkFeeCheckbox(e)}/>
                    <label htmlFor="">Overdue Payment Reminder</label>
                  </div>
                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="rdOdPrem" id="rdOdPrem" value="AFTERDUEDATE" onChange={this.onChange}/>
                    <label htmlFor="">Send Day(s) After Due Date</label>
                  </div>
                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="rdOdPrem" id="rdOdPrem" value="UNTILPAID" onChange={this.onChange}/>
                    <label htmlFor="">Send Day(s) Until Paid</label>
                  </div>
                </div>

                <div className="fourthColumn">
                  <div className="feeFlex">
                  <input type="checkbox" className="feeMr" name="remRcp" id="remRcp" onClick={(e: any) => this.checkFeeCheckbox(e)}/>
                    <label htmlFor="">Reminder Recipients</label>
                  </div>
                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="rdRemRcp" id="rdRemRcp" value="PRIMARYCONTACT" onChange={this.onChange}/>
                    <label htmlFor="">Send to Primary Contact Only</label>
                  </div>
                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="rdRemRcp" id="rdRemRcp" value="BOTH" onChange={this.onChange}/>
                    <label htmlFor="">Send to Primary and Secondary Contact Only</label>
                  </div>
                </div>

              </div>
              {/* second row */}
              <div className="feeFlexEnd">
                <button className="btn btn-primary" type="button" id="btnSavePmtRem" name="btnSavePmtRem" onClick={this.savePaymentRem} style={{width: '188px'}}>Save Payment Remainder</button>
              </div>
            </div>
            <div className="border ThirdRow p-1">
              <div className="Reminder feeMy">
                {/* first row */}

                <div className="feeFlex">
                  <input type="radio" className="feeMr" name="rdAutoLateFee" id="rdAutoLateFee" value="NO" onChange={this.onChange}/>
                  <label htmlFor="">Do Not Assign Late Fee Automatically</label>
                </div>
                <div className="feeFlex">
                  <input type="radio" className="feeMr" name="rdAutoLateFee" id="rdAutoLateFee" value="YES" onChange={this.onChange}/>
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
                    <label htmlFor="">Assign Late Fee Days(s) After Due Date</label>
                    <input type="text" className="gf-form-input" name="txtLtFDays" id="txtLtFDays" onChange={this.onChange} style={{width: '38px', height:'22px'}}/>
                  </div>
                </div>

                <div className="secondColumn">
                  <div className="feeFlex" >
                    <input type="checkbox" className="feeMr" name="chkLtFeeCalc" id="chkLtFeeCalc" onClick={(e: any) => this.checkFeeCheckbox(e)}/>
                    <label htmlFor="">Late Fee Calculation Method</label>
                  </div>

                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="rdLateFeeCalc" id="rdLateFeeCalc" value="FIXEDLATEFEE" onChange={this.onChange} />
                    <label htmlFor="">Flat Fee of Rs</label>
                    <input type="text" className="gf-form-input" name="txtFixedLateFee" id="txtFixedLateFee" disabled onChange={this.onChange} style={{width: '73px', height:'22px'}}/>
                  </div>
                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="rdLateFeeCalc" id="rdLateFeeCalc" value="PERCENTLATEFEE"  onChange={this.onChange} />
                    <label htmlFor="">% of invoice Total</label>
                    <input type="text" className="gf-form-input" name="txtPercentLateFee" id="txtPercentLateFee" disabled onChange={this.onChange} style={{width: '52px', height:'22px'}}/>
                  </div>
                </div>

                <div className="thirdColumn">
                  <div className="feeFlex">
                  <input type="checkbox" className="feeMr" name="chkLateFeeFrq" id="chkLateFeeFrq" onClick={(e: any) => this.checkFeeCheckbox(e)}/>
                    <label htmlFor="">Late Fee Assignment Frequency</label>
                  </div>
                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="rdLateFeeFrq" id="rdLateFeeFrq" value="ONETIMELATEFEE"  onChange={this.onChange} />
                    <label htmlFor="">One Time Only</label>
                  </div>
                  <div className="feeFlex">
                    <input type="radio" className="feeMr" name="rdLateFeeFrq" id="rdLateFeeFrq" value="REPEATEDLATEFEE"  onChange={this.onChange} />
                    <label htmlFor="">Repeat Every Days</label>
                    <input type="text" className="gf-form-input" name="txtLtFeeRptDays" id="txtLtFeeRptDays" onChange={this.onChange} style={{width: '38px', height:'22px'}}/>
                  </div>
                </div>
              </div>
              <div className="feeFlexEnd">
                <button className="btn btn-primary" type="button" id="btnSaveLateFee" name="btnSaveLateFee" onClick={this.saveLateFee} style={{width: '188px'}}>Save Late Fee</button>
              </div>
            </div>
            <div className="hide">
                <button className="btn btn-primary" type="button" id="btnSaveAll" name="btnSaveAll" disabled onClick={this.saveAll} style={{width: '188px'}}>Save All</button>
            </div>
          </form>
        </div>

      </section>
    )
  }
}


export default withBranchDataLoader(

  compose(
  
    graphql<DueDateAddMutationType, FeeSettingRootProps>(DueDateAddMutationGql, {
      name: "addDueDateMutation",
    }),
    graphql<DueDateUpdateMutationType, FeeSettingRootProps>(DueDateUpdateMutationGql, {
      name: "updateDueDateMutation",
    }),
    graphql<PaymentRemainderAddMutationType, FeeSettingRootProps>(PaymentRemainderAddMutationGql, {
      name: "addPaymentRemainderMutation",
    }),
    graphql<PaymentRemainderUpdateMutationType, FeeSettingRootProps>(PaymentRemainderUpdateMutationGql, {
      name: "updatePaymentRemainderMutation",
    }),
    graphql<LateFeeAddMutationType, FeeSettingRootProps>(LateFeeAddMutationGql, {
      name: "addLateFeeMutation",
    }),
    graphql<LateFeeUpdateMutationType, FeeSettingRootProps>(LateFeeUpdateMutationGql, {
      name: "updateLateFeeMutation",
    }),    
    graphql<AddAllMutationType, FeeSettingRootProps>(AddAllMutationGql, {
      name: "addAllMutation",
    })

  )

    (FeeSetting) as any
);