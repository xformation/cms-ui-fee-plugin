import {number} from 'prop-types';

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
      id: number;
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
      id: number;
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

export type FeeCategoryAddMutationType = {
  addFeeCategory: Array<{
    id: number;
    categoryName: string;
    description: string;
    status: any;
    createdBy: string;
    createdOn: any;
    updatedBy: string;
    updatedOn: any;
    startDate: any;
    endDate: any;
    branch: {
      id: number;
      branchName: string;
    };
    strCreatedOn: string;
    strUpdatedOn: string;
    strStartDate: string;
    strEndDate: string;
  }>;
};

export type LoadFeeSetupCacheType = {
  createFeeSetupDataCache: {
    departments: Array<{
      id: number;
      name: string;
      branch: {
        id: number;
      };
      academicyear: {
        id: number;
      };
    }>;
    batches: Array<{
      id: number;
      batch: string;
      department: {
        id: number;
      };
    }>;
    studentTypes: Array<{
      id: number;
      description: string;
    }>;
    genders: Array<{
      id: number;
      description: string;
    }>;
    feeDetails: Array<{
      id: number;
      feeParticularsName: string;
    }>;
    feeCategory: Array<{
      id: number;
      categoryName: string;
      description: string;
      status: any;
      createdBy: string;
      createdOn: any;
      updatedBy: string;
      updatedOn: any;
      startDate: any;
      endDate: any;
      branch: {
        id: number;
        branchName: string;
      };
      strCreatedOn: string;
      strUpdatedOn: string;
      strStartDate: string;
      strEndDate: string;
    }>;
    facility: Array<{
      id: number;
      name: string;
    }>;
    transportRoute: Array<{
      id: number;
      routeName: string;
      routeDetails: string;
      routeMapUrl: string;
    }>;
  };
};

export type FeeCategoryUpdateMutationType = {
  updateFeeCategory: Array<{
    id: number;
    categoryName: string;
    description: string;
    status: any;
    createdBy: string;
    createdOn: any;
    updatedBy: string;
    updatedOn: any;
    startDate: any;
    endDate: any;
    branch: {
      id: number;
      branchName: string;
    };
    strCreatedOn: string;
    strUpdatedOn: string;
    strStartDate: string;
    strEndDate: string;
  }>;
};

export type FeeDetailsAddMutationType = {
  addFeeDetails: {
    id: number;
    feeParticularsName: string;
    feeParticularDesc: string;
    studentType: any;
    gender: any;
    amount: number;
    status: any;
    createdBy: string;
    updatedBy: string;
    feeCategory: {
      id: number;
    };
    batch: {
      id: number;
      batch: string;
    };
    facility: {
      id: number;
      name: string;
    };
    transportRoute: {
      id: number;
      routeName: string;
      routeDetails: string;
      routeMapUrl: string;
    };
    department: {
      id: number;
      name: string;
    };
    strCreatedOn: string;
    strUpdatedOn: string;
    strStartDate: string;
    strEndDate: string;
  };
};
