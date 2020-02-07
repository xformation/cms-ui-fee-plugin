import gql from 'graphql-tag';

export const ADD_FEE_DETAILS = gql`
  mutation addFeeDetails($input: AddFeeDetailsInput!) {
    addFeeDetails(input: $input) {
      id
      feeParticularsName
      feeParticularDesc
      studentType
      gender
      amount
      status
      createdBy
      updatedBy
      feeCategory {
        id
      }
      batchId
      facility {
        id
        name
      }
      transportRoute {
        id
        routeName
        routeDetails
        routeMapUrl
      }
      departmentId
      strCreatedOn
      strUpdatedOn
      strStartDate
      strEndDate
    }
  }
`;
