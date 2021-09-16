export interface Customer {
  firstName: string;
  lastName: string;
  streetName: string;
  city: string;
  accountOwner: string;
  ibnNumber: string;
  phoneNumber: number | null;
  houseNumber: string;
  zipCode: string;
}

export enum ActionType {
  PERSONAL_INFO = 'personalInfo',
  ADDRESS_INFO = 'addressInfo',
  PAYMENT_INFO = 'paymentInfo',
}

export interface PersonalData {
  firstName: string;
  lastName: string;
  phoneNumber: number;
}

export interface AddressData {
  streetName: string;
  city: string;
  houseNumber: number;
  zipCode: number;
}

export interface Payment {
  owner: string;
  iban: string;
  customerId?: number;
}

export interface PersonalInfoAction {
  type: string;
  payload: PersonalData;
}

export interface AddressInfoAction {
  type: string;
  payload: AddressData;
}

export interface PaymentInfoAction {
  type: string;
  payload: Payment;
}

export interface PaymentId {
  paymentDataId: string;
}

export interface Error {
  errorCode: number;
}

export const alertMessage = 'Input field cant blank';
export const demoPaymentApi =
  '/default/wunderfleet-recruiting-backend-dev-save-payment-data';
