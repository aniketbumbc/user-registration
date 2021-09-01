import React, { useState, useEffect } from 'react';
import PersonalInfo from '../Personal Info/PersonalInfo';
import PaymentInfo from '../Payment Info/PaymentInfo';
import { actionCreators, State } from '../../state';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { alertMessage, AddressData } from '../../utils';

const AddressInfo: React.FC = () => {
  const [next, setNext] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const [previous, setPrevious] = useState<boolean>(false);
  const state = useSelector((state: State) => state.registration);
  const { addressInfo } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (localStorage.getItem('addressInfo')) {
      getLocalstorageData();
    }
    // eslint-disable-next-line
  }, []);

  /**
   *  Method set data to localstoarage
   *
   * @param addressDetails {AddressData}
   */

  const setLocalstorageData = (addressDetails: AddressData): void => {
    localStorage.setItem('addressInfo', 'addressInfo');
    localStorage.setItem('streetName', addressDetails.streetName);
    localStorage.setItem('city', addressDetails.city);
    localStorage.setItem('houseNumber', String(addressDetails.houseNumber));
    localStorage.setItem('zipCode', String(addressDetails.zipCode));
  };

  /**
   *  Method getData from local storage and pass to reducer method to set state
   */

  const getLocalstorageData = (): void => {
    addressInfo({
      streetName: String(localStorage.getItem('streetName')),
      city: String(localStorage.getItem('city')),
      houseNumber: Number(localStorage.getItem('houseNumber')),
      zipCode: Number(localStorage.getItem('zipCode')),
    });
  };

  /**
   * Method is submit form data to state and call local stoarage method.
   * Check value should not be null
   * @param event
   */

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      event.currentTarget.streetName.value.length &&
      event.currentTarget.houseNumber.value.length &&
      event.currentTarget.city.value.length &&
      event.currentTarget.zipCode.value
    ) {
      const addressDetail: AddressData = {
        streetName: event.currentTarget.streetName.value,
        houseNumber: event.currentTarget.houseNumber.value,
        city: event.currentTarget.city.value,
        zipCode: event.currentTarget.zipCode.value,
      };

      setNext(true);
      addressInfo(addressDetail);
      setLocalstorageData(addressDetail);
    } else {
      setNext(false);
      alert(alertMessage);
    }
  };

  const handlePrevious = (): void => {
    setPrevious(true);
    setNext(false);
  };

  return (
    <div>
      {!next && !previous && (
        <form className='form' onSubmit={handleFormSubmit}>
          <h3 className='text-center'> Address Information </h3>
          <div className='form-step form-step-active'>
            <div className='input-group'>
              <label htmlFor='streetName'>Street Name</label>
              <input
                type='text'
                name='streetName'
                placeholder='Street Name'
                id='streetName'
                defaultValue={state['streetName']}
              />
            </div>
            <div className='input-group'>
              <label htmlFor='houseNumber'>House Number</label>
              <input
                type='text'
                name='houseNumber'
                placeholder='House Number'
                id='houseNumber'
                defaultValue={state['houseNumber']}
              />
            </div>
            <div className='input-group'>
              <label htmlFor='zipCode'>Zip Code</label>
              <input
                type='text'
                name='zipCode'
                id='zipCode'
                placeholder='Zip Code'
                defaultValue={state['zipCode']}
              />
            </div>
            <div className='input-group'>
              <label htmlFor='city'>City</label>
              <input
                type='text'
                name='city'
                id='city'
                placeholder='City'
                defaultValue={state['city']}
              />
            </div>
            <div className='btns-group'>
              <button className='btn btn-prev' onClick={handlePrevious}>
                Previous
              </button>
              <button className='btn btn-next'>Next</button>
            </div>
          </div>
        </form>
      )}
      {next && !previous && <PaymentInfo />}
      {previous && <PersonalInfo />}
    </div>
  );
};

export default AddressInfo;
