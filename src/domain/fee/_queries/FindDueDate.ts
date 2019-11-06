import gql from 'graphql-tag';

export const GET_FEE_SETTING_DUE_DATE_DATA = gql`
  mutation getFeeSettingDueDateData($branchId: Long, $paymentType: String) {
    getFeeSettingDueDateData(branchId: $branchId, paymentType: $paymentType) {
      dueDateId
      paymentMethod
      installments
      paymentDay
      frequency
    }
  }
`;
