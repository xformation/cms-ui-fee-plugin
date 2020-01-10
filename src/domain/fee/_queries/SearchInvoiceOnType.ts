import gql from 'graphql-tag';

export const SEARCH_INVOICE_ONTYPE = gql`
  query searchInvoiceOnType(
    $invoiceType: String
    $collegeId: Long
    $branchId: Long
    $academicYearId: Long
  ) {
    searchInvoiceOnType(
      invoiceType: $invoiceType
      collegeId: $collegeId
      branchId: $branchId
      academicYearId: $academicYearId
    ) {
      id
      amountPaid
      strPaymentDate
      invoiceNumber
      feeCategory {
        categoryName
      }
      student {
        id
        studentName
        studentPrimaryCellNumber
      }
      paymentStatus
    }
  }
`;
