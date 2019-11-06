import gql from 'graphql-tag';

export const GET_INVOICE_DATA = gql`
  query getInvoiceData($collegeId: String, $branchId: String, $academicYearId: String) {
    getInvoiceData(
      collegeId: $collegeId
      branchId: $branchId
      academicYearId: $academicYearId
    ) {
      totalInvoice
      totalPaidInvoice
      totalUnPaidInvoice
      totalCanceledInvoice
    }
  }
`;
