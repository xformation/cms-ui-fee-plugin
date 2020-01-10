import gql from 'graphql-tag';

export const ADD_DUE_DATE = gql`
  mutation addDueDate($input: AddDueDateInput!) {
    addDueDate(input: $input) {
      dueDate {
        id
        paymentMethod
      }
    }
  }
`;
