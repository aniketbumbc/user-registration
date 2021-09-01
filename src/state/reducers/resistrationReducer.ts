import {
  Customer,
  ActionType,
  PersonalInfoAction,
  AddressInfoAction,
  PaymentInfoAction,
  PersonalData,
  AddressData,
  Payment,
} from '../../utils';

// Define the initial state using that type
const initialState: Customer = {
  firstName: '',
  lastName: '',
  streetName: '',
  city: '',
  accountOwner: '',
  ibnNumber: '',
  phoneNumber: null,
  houseNumber: '',
  zipCode: '',
};

/**
 *  type of action
 */

type Action = PersonalInfoAction | PaymentInfoAction | AddressInfoAction;

/**
 * Reducer function whihch take action and state
 * return state
 * @param state
 * @param action
 */

const registrationReducer = (
  state: Customer = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.PERSONAL_INFO:
      return setPersonalInfo(state, action.payload as PersonalData);
    case ActionType.ADDRESS_INFO:
      return setAddressInfo(state, action.payload as AddressData);
    case ActionType.PAYMENT_INFO:
      return setPaymentInfo(state, action.payload as Payment);
    default:
      return state;
  }
};

/**
 * Method set and return state for PersonalData
 * @param state
 * @param payload
 */

const setPersonalInfo = (state: Customer, payload: PersonalData) => {
  const firstName = payload.firstName;
  const lastName = payload.lastName;
  const phoneNumber = payload.phoneNumber;
  return {
    ...state,
    firstName,
    lastName,
    phoneNumber,
  };
};

/**
 * Method set and return state for AddressData
 * @param state
 * @param payload
 */

const setAddressInfo = (state: Customer, payload: AddressData) => {
  const streetName = payload.streetName;
  const houseNumber = payload.houseNumber;
  const zipCode = payload.zipCode;
  const city = payload.city;
  return {
    ...state,
    streetName,
    houseNumber,
    zipCode,
    city,
  };
};

/**
 * Method set and return state for Payment
 * @param state
 * @param payload
 */

const setPaymentInfo = (state: Customer, payload: Payment) => {
  const accountOwner = payload.owner;
  const ibnNumber = payload.iban;
  return {
    ...state,
    accountOwner,
    ibnNumber,
  };
};

export default registrationReducer;
