import gql from 'graphql-tag';

export const ADD_FEE_CATEGORY = gql`
  mutation addFeeCategory($input: AddFeeCategoryInput!) {
    addFeeCategory(input: $input) {
      id
      categoryName
      description
      status
      createdBy
      createdOn
      updatedBy
      updatedOn
      startDate
      endDate
      branch {
        id
        branchName
      }
      strCreatedOn
      strUpdatedOn
      strStartDate
      strEndDate
    }
  }
`;
