import gql from 'graphql-tag';

export const UPDATE_FEE_CATEGORY = gql`
  mutation updateFeeCategory($input: UpdateFeeCategoryInput!) {
    updateFeeCategory(input: $input) {
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
