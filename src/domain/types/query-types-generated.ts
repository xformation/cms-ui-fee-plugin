export type AddFeeInput = {
  id?: number | null;
  feeParticularsName?: number | null;
  feeParticularDesc?: number | null;
  studentType?: number | null;
  gender?: number | null;
  amount?: number | null;
  feeCategory?: number | null;
  batch?: number | null;
  facility?: number | null;
  transportRoute?: number | null;
  college?: number | null;
  department?: number | null;
  branch?: number | null;
  academicYear?: number | null;
};

export type AddFeeMutationVariables = {
  input: AddFeeInput;
};

export type AddFeeMutation = {
  addFee: {
    fee: {
      id: number;
      feeParticularsName: number;
      feeParticularDesc: number;
      studentType: number;
      gender: number;
      amount: number;
      feeCategory: number;
      batch: number;
      facility: number;
      transportRoute: number;
      college: number;
      department: number;
      branch: number;
      academicYear: number;
    };
  };
};

export type FeeListQuery = {
  fees: Array<{
    id: number;
    feeParticularsName: number;
    feeParticularDesc: number;
    studentType: number;
    gender: number;
    amount: number;
    feeCategory: number;
    batch: number;
    facility: number;
    transportRoute: number;
    college: number;
    department: number;
    branch: number;
    academicYear: number;
  }>;
};

export type FeeQueryVariables = {
  feeId: number;
};

export type FeeQuery = {
  fee: {
    id: number;
    feeParticularsName: string;
    feeParticularDesc: string;
    studentType: string;
    gender: string;
    amount: number;
    feeCategory: {
      feeCategory: number;
    };
    batch: {
      batch: any;
    };
    facility: {
      facility: string;
    };
    transportRoute: {
      transportRoute: string;
    };
    college: {
      college: string;
    };
    department: {
      department: string;
    };
    branch: {
      branch: string;
    };
    academicYear: {
      academicYear: number;
    };
  };
};

export type FeeFragment = {
  id: number;
  feeParticularsName: string;
  feeParticularDesc: string;
  studentType: string;
  gender: string;
  amount: number;
  feeCategory: {
    categoryName: number;
  };
  batch: {
    batch: any;
  };
  facility: {
    facility: string;
  };
  transportRoute: {
    transportRoute: string;
  };
  college: {
    college: string;
  };
  department: {
    department: string;
  };
  branch: {
    branch: string;
  };
  academicYear: {
    academicYear: number;
  };
};

export type FeeDetailsFragment = {
  id: number;
  feeParticularsName: string;
  feeParticularDesc: string;
  studentType: string;
  gender: string;
  amount: number;
  feeCategory: {
    feeCategory: number;
  };
  batch: {
    batch: any;
  };
  facility: {
    facility: string;
  };
  transportRoute: {
    transportRoute: string;
  };
  college: {
    college: string;
  };
  department: {
    department: string;
  };
  branch: {
    branch: string;
  };
  academicYear: {
    academicYear: number;
  };
};

export type FeeSummaryFragment = {
  id: number;
  feeParticularsName: number;
  feeParticularDesc: number;
  studentType: number;
  gender: number;
  amount: number;
  feeCategory: number;
  batch: number;
  facility: number;
  transportRoute: number;
  college: number;
  department: number;
  branch: number;
  academicYear: number;
};

export type UpdateFeeInput = {
  id?: number | null;
  feeParticularsName?: number | null;
  feeParticularDesc?: number | null;
  studentType?: number | null;
  gender?: number | null;
  amount?: number | null;
  feeCategory?: number | null;
  batch?: number | null;
  facility?: number | null;
  transportRoute?: number | null;
  college?: number | null;
  department?: number | null;
  branch?: number | null;
  academicYear?: number | null;
};

export type UpdateFeeMutationVariables = {
  input: UpdateFeeInput;
};

export type UpdateFeeMutation = {
  updateFee: {
    fee: {
      id: number;
      feeParticularsName: number;
      feeParticularDesc: number;
      studentType: number;
      gender: number;
      amount: number;
      feeCategory: number;
      batch: number;
      facility: number;
      transportRoute: number;
      college: number;
      department: number;
      branch: number;
      academicYear: number;
    };
  };
};

/* tslint:enable */

// InvoiceCount
export type getInvoiceDataQuery = {
  getinvoicedata: {
    totalInvoice: any;
    totalPaidInvoice: any;
    totalUnPaidInvoice: any;
    totalCanceledInvoice: any;
  };
};

export type getInvoiceDataSummaryFragment = {
  totalInvoice: any;
  totalPaidInvoice: any;
  totalUnPaidInvoice: any;
  totalCanceledInvoice: any;
};

export type getInvoiceDataDetailsFragment = {
  totalInvoice: any;
  totalPaidInvoice: any;
  totalUnPaidInvoice: any;
  totalCanceledInvoice: any;
};
export type getInvoiceDataFragment = {
  totalInvoice: any;
  totalPaidInvoice: any;
  totalUnPaidInvoice: any;
  totalCanceledInvoice: any;
};

export type InvoiceCountQueryType = {
  getInvoiceData: {
    totalInvoice: number;
    totalPaidInvoice: number;
    totalUnPaidInvoice: number;
    totalCanceledInvoice: number;
  };
};

// Invoice Count

// Search Invoice

// export type SearchInvoiceListQuery = {
//   searchInvoice: Array<{
//     studentName: string;
//     studentContactNumber: string;
//     categoryName: string;
//     amountPaid: number;
//     paymentDate: any;
//   }>;
// };

// export type SearchInvoiceListQueryOne = {
//   searchInvoice: Array<{
//     students: Array<{
//       studentName: string;
//       studentContactNumber: string;
//     }>;
//     feeCategory: Array<{
//       categoryName: string;
//     }>;
//     amountPaid: number;
//     paymentDate: any;
//   }>;
// }

export type SearchInvoiceListType = {
  searchInvoice: {
    invoiceNumber: string;
    id: number;
    amountPaid: number;
    strPaymentDate: string;
    feeCategory: {
      categoryName: string;
    };
    student: {
      studentName: string;
      studentContactNumber: string;
    };
    paymentStatus: any;
  };
};

export type SearchInvoiceOnTypeListType = {
  searchInvoiceOnType: {
    invoiceNumber: string;
    id: number;
    amountPaid: number;
    strPaymentDate: string;
    feeCategory: {
      categoryName: string;
    };
    student: {
      studentName: string;
      studentContactNumber: string;
    };
    paymentStatus: any;
  };
};

// Search Invoice
export type GetInvoiceData = {
  totalInvoice: any;
  totalPaidInvoice: any;
  totalUnPaidInvoice: any;
  totalCanceledInvoice: any;
};

export type SearchInvoiceData = {
  // id: number;
  invoiceNumber: any;
  amountPaid: number;
  paymentDate: number;
  nextPaymentDate: number;
  outStandingAmount: number;
  modeOfPayment: string;
  chequeNumber: number;
  demandDraftNumber: number;
  onlineTxnRefNumber: number;
  paymentStatus: string;
  comments: string;
  updatedBy: string;
  feeCategory: {
    feeCategory: any;
  };
  feeDetails: {
    feeDetails: any;
  };

  dueDate: {
    dueDate: any;
  };
  paymentRemainder: {
    paymentRemainder: any;
  };

  college: {
    college: any;
  };
  branch: {
    branch: any;
  };
  student: {
    studentName: any;
  };
  academicYear: {
    academicYear: any;
  };
};

export type LoadBranchQueryType = {
  createFeeDataCache: {
    colleges: Array<{
      id: number;
      shortName: string;
    }>;
    branches: Array<{
      id: number;
      branchName: string;
      college: {
        id: number;
      };
    }>;
  };
};

export type DueDateAddMutationType = {
  addDueDate: {
    dueDate: {
      id: number;
      paymentMethod: string;
    };
  };
};

export type DueDateUpdateMutationType = {
  updateDueDate: {
    dueDate: {
      id: number;
      paymentMethod: string;
    };
  };
};

export type PaymentRemainderAddMutationType = {
  addPaymentRemainder: {
    paymentRemainder: {
      id: number;
    };
  };
};

export type PaymentRemainderUpdateMutationType = {
  updatePaymentRemainder: {
    paymentRemainder: {
      id: number;
    };
  };
};

export type LateFeeAddMutationType = {
  addLateFee: {
    lateFee: {
      id: number;
    };
  };
};

export type LateFeeUpdateMutationType = {
  updateLateFee: {
    lateFee: {
      id: number;
    };
  };
};

export type SaveAllMutationType = {
  saveDueDatePaymentRemLateFee: {
    // QueryResult: {
    statusDesc: string;
    // };
  };
};

export type FeeSettingsType = {
  getFeeSettingData: {
    lateFeeId: number;
    isAutoLateFee: string;
    lateFeeDays: number;
    chargeType: string;
    fixedCharges: number;
    percentCharges: string;
    lateFeeFrequency: string;
    lateFeeRepeatDays: number;

    prId: number;
    isAutoRemainder: string;
    isFirstPaymentRemainder: string;
    firstPaymentRemainderDays: number;
    isSecondPaymentRemainder: string;
    secondPaymentRemainderDays: number;
    isOverDuePaymentRemainder: string;
    overDuePaymentRemainderAfterDueDateOrUntilPaid: string;
    overDuePaymentRemainderDays: number;
    isRemainderRecipients: string;
    remainderRecipients: string;
  };
};

export type FindDueDateDataType = {
  getFeeSettingDueDateData: {
    dueDateId: number;
    paymentMethod: string;
    installments: number;
    paymentDay: number;
    frequency: any;
  };
};
