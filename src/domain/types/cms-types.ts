// ------------------------------------ REACT ------------------------------------
export type ReactFunctionOrComponentClass<P> =
  | React.ComponentClass<P>
  | React.StatelessComponent<P>;

// --------------------------------------

// export type StudentData = {
//   // id: string;
//   studentName: string;
//   fatherName: string;
//   fatherMiddleName: string;
//   fatherLastName: string;
//   motherName: string;
//   motherMiddleName: string;
//   motherLastName: string;
//   aadharNo: number;
//   dateOfBirth: number;
//   placeOfBirth: string;
//   religion: string;
//   caste: string;
//   subCaste: string;
//   age: number;
//   sex: string;
//   bloodGroup: string;
//   addressLineOne: string;
//   addressLineTwo: string;
//   addressLineThree: string;
//   town: string;
//   state: string;
//   country: string;
//   pincode: number;
//   studentContactNumber: number;
//   alternateContactNumber: number;
//   studentEmailAddress: string;
//   alternateEmailAddress: string;
//   relationWithStudent: string;
//   emergencyContactName: string;
//   emergencyContactMiddleName: string;
//   emergencyContactLastName: string;
//   emergencyContactNo: string;
//   emergencyContactEmailAddress: string;
//   uploadPhoto: string;
//   admissionNo: number;
//   rollNo: number;
//   studentType: string;
//   batch: {
//     batch: any;
//   };
//   section: {
//     section: any;
//   };
//   branch: {
//     branchName: any;
//   };
//   department: {
//     name: any;
//   };
// };

// export type FeeData = {
//   id: number;
//   feeParticularsName: number;
//   feeParticularDesc: number;
//   studentType: number;
//   gender: number;
//   amount: number;
//   feeCategory: {
//     feeCategory: any;
//   }
//   batch: {
//     batch: any;
//   }

//   facility: {
//     facility: any;
//   }

//   transportRoute: {
//     transportRoute: any;
//   }

//   college: {
//     college: any;
//   }

//   department: {
//     department: any;
//   }

//   branch: {
//     branch: any;
//   }

//   academicYear: {
//     academicYear: any;
//   }
// };

// export type GetInvoiceData = {
//   totalInvoice: any;
//   totalPaidInvoice: any;
//   totalUnPaidInvoice: any;
//   totalCanceledInvoice: any;
// };
