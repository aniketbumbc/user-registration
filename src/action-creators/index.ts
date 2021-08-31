import {
  ActionType,
  PersonalData,
  Payment,
  AddressData,
  PaymentInfoAction,
  PersonalInfoAction,
  AddressInfoAction,
} from '../utils';
import { Dispatch } from 'redux';

export const personalInfo = (data: PersonalData) => {
  return (dispatch: Dispatch<PersonalInfoAction>) => {
    dispatch({
      type: ActionType.PERSONAL_INFO,
      payload: data,
    });
  };
};

export const addressInfo = (data: AddressData) => {
  return (dispatch: Dispatch<AddressInfoAction>) => {
    dispatch({
      type: ActionType.ADDRESS_INFO,
      payload: data,
    });
  };
};

export const paymentInfo = (data: Payment) => {
  return (dispatch: Dispatch<PaymentInfoAction>) => {
    dispatch({
      type: ActionType.PAYMENT_INFO,
      payload: data,
    });
  };
};
