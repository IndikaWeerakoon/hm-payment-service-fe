export interface SalaryRes {
  salaryPayId: string;
  year: number;
  month: string;
  salery: number;
  createdDate: Date;
  employee: EmployeeRes;
}

export interface EmployeeRes {
  nic: string;
  empId: string;
  contactNo: string;
}
