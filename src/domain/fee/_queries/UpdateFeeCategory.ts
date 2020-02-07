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
      branchId
      strCreatedOn
      strUpdatedOn
      strStartDate
      strEndDate
    }
  }
`;
