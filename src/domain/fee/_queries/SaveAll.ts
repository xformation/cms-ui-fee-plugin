import gql from 'graphql-tag';

export const SAVE_ALL = gql`
  mutation saveDueDatePaymentRemLateFee(
    $inputd: UpdateDueDateInput
    $inputp: UpdatePaymentRemainderInput
    $inputl: UpdateLateFeeInput
  ) {
    saveDueDatePaymentRemLateFee(inputd: $inputd, inputp: $inputp, inputl: $inputl) {
      statusDesc
    }
  }
`;
