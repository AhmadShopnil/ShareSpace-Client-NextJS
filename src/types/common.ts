import { USER_ROLE } from "@/contants/role";

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export type TFlat = {
  id: string;
  squareFeet: number;
  totalBedrooms: number;
  totalRooms: number;
  utilitiesDescription: string;
  location: string;
  description: string;
  rent: number;
  availability: boolean;
  advanceAmount: number;
  createdAt: string;
  updatedAt: string;
};

export type TUserRegistration = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type UserRole = keyof typeof USER_ROLE;

// id: '7ca149cc-cd5e-4a5c-b777-1eb97061344a',
// squareFeet: 1050,
// totalBedrooms: 3,
// totalRooms: 7,
// utilitiesDescription: 'Includes water and electricity',
// location: 'Rangpur',
// description: 'Lthis is desription.',
// rent: 18000,
// availability: true,
// advanceAmount: 500,
// createdAt: '2024-04-01T17:11:28.006Z',
// updatedAt: '2024-04-01T17:11:28.006Z'
