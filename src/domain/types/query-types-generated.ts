/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type AddFeeInput = {
  id?: number | null;
  feeParticularsName?: string | null;
  feeParticularDesc?: string | null;
  studentType?: string | null;
  gender?: string | null;
  amount?: string | null;
  feeCategory?: string | null;
  batch?: string | null;
  facility?: number | null;
  transportRoute?: number | null;
  college?: string | null;
  department?: string | null;
  branch?: string | null;
  academicYear?: string | null;
};

export type AddFeeMutationVariables = {
  input: AddFeeInput;
};

export type AddFeeMutation = {
  addFee: {
    fee: {
      id: string;
      feeParticularsName: string;
      feeParticularDesc: string;
      studentType: string;
      gender: string;
      amount: string;
      feeCategory: string;
      batch: string;
      facility: string;
      transportRoute: string;
      college: string;
      department: string;
      branch: string;
      academicYear: string;
    };
  };
};

/* Fee */

export type FeeListQuery = {
  // Return all known Pet Institutes
  fees: Array<{
    id: string;
    feeParticularsName: string;
    feeParticularDesc: string;
    studentType: string;
    gender: string;
    amount: string;
    feeCategory: string;
    batch: string;
    facility: string;
    transportRoute: string;
    college: string;
    department: string;
    branch: string;
    academicYear: string;
  }>;
};

export type FeeQueryVariables = {
  feeId: number;
};

export type FeeQuery = {
  fee: {
    id: string;
    feeParticularsName: string;
    feeParticularDesc: string;
    studentType: string;
    gender: string;
    amount: string;
    feeCategory: string;
    batch: string;
    facility: string;
    transportRoute: string;
    college: string;
    department: string;
    branch: string;
    academicYear: string;
  };
};

export type FeeFragment = {
  id: string;
  feeParticularsName: string;
  feeParticularDesc: string;
  studentType: string;
  gender: string;
  amount: string;
  feeCategory: string;
  batch: string;
  facility: string;
  transportRoute: string;
  college: string;
  department: string;
  branch: string;
  academicYear: string;
};

export type FeeDetailsFragment = {
  id: string;
  feeParticularsName: string;
  feeParticularDesc: string;
  studentType: string;
  gender: string;
  amount: string;
  feeCategory: string;
  batch: string;
  facility: string;
  transportRoute: string;
  college: string;
  department: string;
  branch: string;
  academicYear: string;
};

export type FeeSummaryFragment = {
  id: string;
  feeParticularsName: string;
  feeParticularDesc: string;
  studentType: string;
  gender: string;
  amount: string;
  feeCategory: string;
  batch: string;
  facility: string;
  transportRoute: string;
  college: string;
  department: string;
  branch: string;
  academicYear: string;
};

export type UpdateFeeInput = {
  id?: number | null;
  feeParticularsName?: string | null;
  feeParticularDesc?: string | null;
  studentType?: string | null;
  gender?: string | null;
  amount?: string | null;
  feeCategory?: string | null;
  batch?: string | null;
  facility?: number | null;
  transportRoute?: number | null;
  college?: string | null;
  department?: string | null;
  branch?: string | null;
  academicYear?: string | null;
};

export type UpdateFeeMutationVariables = {
  input: UpdateFeeInput;
};

export type UpdateFeeMutation = {
  updateFee: {
    fee: {
      id: string;
      feeParticularsName: string;
      feeParticularDesc: string;
      studentType: string;
      gender: string;
      amount: string;
      feeCategory: string;
      batch: string;
      facility: string;
      transportRoute: string;
      college: string;
      department: string;
      branch: string;
      academicYear: string;
    };
  };
};

/* tslint:enable */
