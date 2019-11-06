import gql from 'graphql-tag';

export const SEARCH_INVOICE = gql`
  mutation searchInvoice(
    $invoiceNumber: String
    $studentId: Long
    $collegeId: Long
    $branchId: Long
    $academicYearId: Long
  ) {
    searchInvoice(
      invoiceNumber: $invoiceNumber
      studentId: $studentId
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
        studentContactNumber
      }
      paymentStatus
    }
  }
`;
