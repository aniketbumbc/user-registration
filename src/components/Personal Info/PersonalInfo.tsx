import React, { useState, useEffect } from 'react';
import AddressInfo from '../Address Info/AddressInfo';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';
import { alertMessage, PersonalData } from '../../utils';

const PersonalInfo: React.FC = () => {
  const [next, setNext] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const { personalInfo } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.registration);

  useEffect(() => {
    getLocalstorageData();
    // eslint-disable-next-line
  }, []);

  /**
   * Method is submit form data to state and call local stoarage method.
   * Check value should not be null
   * @param event
   */

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (
      event.currentTarget.firstName.value.length &&
      event.currentTarget.lastName.value.length &&
      event.currentTarget.phoneNumber.value.length
    ) {
      setNext(true);
      const personalDetails: PersonalData = {
        firstName: event.currentTarget.firstName.value,
        lastName: event.currentTarget.lastName.value,
        phoneNumber: event.currentTarget.phoneNumber.value,
      };
      personalInfo(personalDetails);
      setLocalstorageData(personalDetails);
    } else {
      setNext(false);
      alert(alertMessage);
    }
  };

  /**
   *  Method set data to localstoarage
   *
   * @param personalDetails
   */

  const setLocalstorageData = (personalDetails: PersonalData): void => {
    localStorage.setItem('personalInfo', 'personalInfo');
    localStorage.setItem('firstName', personalDetails.firstName);
    localStorage.setItem('lastName', personalDetails.lastName);
    localStorage.setItem('phoneNumber', String(personalDetails.phoneNumber));
  };

  /**
   *  Method getData from local storage and pass to reducer method to set state
   */

  const getLocalstorageData = (): void => {
    if (localStorage.getItem('personalInfo')) {
      personalInfo({
        firstName: String(localStorage.getItem('firstName')),
        lastName: String(localStorage.getItem('lastName')),
        phoneNumber: Number(localStorage.getItem('phoneNumber')),
      });
    }
  };

  return (
    <div>
      {!next && (
        <form className='form' onSubmit={handleFormSubmit}>
          <h3 className='text-center'> Personal Information </h3>
          <div className='input-group'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              defaultValue={state['firstName']}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Last Name'
              defaultValue={state['lastName']}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='phoneNumber'>Number</label>
            <input
              type='text'
              name='phoneNumber'
              id='phoneNumber'
              placeholder='Phone Number'
              defaultValue={state['phoneNumber']}
            />
          </div>
          <div>
            <button className='btn btn-next btn-next-width'>Next</button>
          </div>
        </form>
      )}

      {next && <AddressInfo />}
    </div>
  );
};

export default PersonalInfo;
