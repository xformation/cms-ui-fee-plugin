import gql from 'graphql-tag';

export const GET_FEE_SETTING_DATA = gql`
  mutation getFeeSettingData($branchId: Long) {
    getFeeSettingData(branchId: $branchId) {
      lateFeeId
      isAutoLateFee
      lateFeeDays
      chargeType
      fixedCharges
      percentCharges
      lateFeeFrequency
      lateFeeRepeatDays

      prId
      isAutoRemainder
      isFirstPaymentRemainder
      firstPaymentRemainderDays
      isSecondPaymentRemainder
      secondPaymentRemainderDays
      isOverDuePaymentRemainder
      overDuePaymentRemainderAfterDueDateOrUntilPaid
      overDuePaymentRemainderDays
      isRemainderRecipients
      remainderRecipients
    }
  }
`;
