// ------------------------------------ REACT ------------------------------------
export type ReactFunctionOrComponentClass<P> =
  | React.ComponentClass<P>
  | React.StatelessComponent<P>;

// --------------------------------------

export type FeeData = {
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
