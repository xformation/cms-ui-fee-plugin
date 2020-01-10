import gql from 'graphql-tag';

export const CREATE_FEE_SETUP_DATA_CACHE = gql`
  query createFeeSetupDataCache($branchId: String!, $academicYearId: String!) {
    createFeeSetupDataCache(branchId: $branchId, academicYearId: $academicYearId) {
      departments {
        id
        name
        branch {
          id
        }
        academicyear {
          id
        }
      }
      batches {
        id
        batch
        department {
          id
        }
      }
      studentTypes {
        id
        description
      }
      genders {
        id
        description
      }
      feeDetails {
        id
        feeParticularsName
      }
      feeCategory {
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
    }
  }
`;
