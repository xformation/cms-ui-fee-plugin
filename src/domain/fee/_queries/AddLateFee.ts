import gql from 'graphql-tag';

export const ADD_LATE_FEE = gql`
  mutation addLateFee($input: AddLateFeeInput!) {
    addLateFee(input: $input) {
      lateFee {
        id
      }
    }
  }
`;
