import gql from 'graphql-tag';

export const UPDATE_DUE_DATE = gql`
  mutation updateDueDate($input: UpdateDueDateInput!) {
    updateDueDate(input: $input) {
      dueDate {
        id
        paymentMethod
      }
    }
  }
`;
