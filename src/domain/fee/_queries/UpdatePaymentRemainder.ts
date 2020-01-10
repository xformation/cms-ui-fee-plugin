import gql from 'graphql-tag';

export const UPDATE_PAYMENT_REMAINDER = gql`
  mutation updatePaymentRemainder($input: UpdatePaymentRemainderInput!) {
    updatePaymentRemainder(input: $input) {
      paymentRemainder {
        id
      }
    }
  }
`;
