import gql from 'graphql-tag';

export const ADD_PAYMENT_REMAINDER = gql`
  mutation addPaymentRemainder($input: AddPaymentRemainderInput!) {
    addPaymentRemainder(input: $input) {
      paymentRemainder {
        id
      }
    }
  }
`;
