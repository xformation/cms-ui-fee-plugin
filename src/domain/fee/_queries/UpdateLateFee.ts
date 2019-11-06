import gql from 'graphql-tag';

export const UPDATE_LATE_FEE = gql`
  mutation updateLateFee($input: UpdateLateFeeInput!) {
    updateLateFee(input: $input) {
      lateFee {
        id
      }
    }
  }
`;
