import gql from 'graphql-tag';

export const SEARCH_INVOICE_ONTYPE = gql`
  query searchInvoiceOnType(
    $invoiceType: String
    $branchId: Long
    $academicYearId: Long
  ) {
    searchInvoiceOnType(
      invoiceType: $invoiceType
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
