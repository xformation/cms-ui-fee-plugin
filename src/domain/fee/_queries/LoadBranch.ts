import gql from 'graphql-tag';

export const CREATE_FEE_DATA_CACHE = gql`
  query {
    createFeeDataCache {
      colleges {
        id
        shortName
      }
      branches {
        id
        branchName
        college {
          id
        }
      }
    }
  }
`;
