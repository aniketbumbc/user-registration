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

/**
 * Action creator function for PersonalData
 * method call reducer function and send payload to it.
 * @param data {payload}
 */

export const personalInfo = (data: PersonalData) => {
  return (dispatch: Dispatch<PersonalInfoAction>) => {
    dispatch({
      type: ActionType.PERSONAL_INFO,
      payload: data,
    });
  };
};

/**
 * Action creator function for AddressData
 * method call reducer function and send payload to it.
 * @param data {payload}
 */

export const addressInfo = (data: AddressData) => {
  return (dispatch: Dispatch<AddressInfoAction>) => {
    dispatch({
      type: ActionType.ADDRESS_INFO,
      payload: data,
    });
  };
};

/**
 * Action creator function for Payment
 * method call reducer function and send payload to it.
 * @param data {payload}
 */

export const paymentInfo = (data: Payment) => {
  return (dispatch: Dispatch<PaymentInfoAction>) => {
    dispatch({
      type: ActionType.PAYMENT_INFO,
      payload: data,
    });
  };
};
