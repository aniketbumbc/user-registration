import React, { useState, useEffect } from 'react';
import AddressInfo from '../Address Info/AddressInfo';
import Fallback from '../Error Boundary/Fallback';
import Success from '../Success/Success';
import { actionCreators, State } from '../../state';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { alertMessage, Payment, demoPaymentApi } from '../../utils';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const PaymentInfo: React.FC = React.memo(() => {
  const [previous, SetPrevious] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<number>();
  const [paymentId, setPaymentID] = useState<string>('');
  const dispatch = useDispatch();
  const { paymentInfo } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.registration);

  useEffect(() => {
    if (localStorage.getItem('paymentInfo')) {
      getLocalstorageData();
    }
    // eslint-disable-next-line
  }, []);

  /**
   *  Method set data to localstoarage
   *
   * @param paymentDetails
   */

  const setLocalstorageData = (paymentDetails: Payment): void => {
    localStorage.setItem('paymentInfo', 'paymentInfo');
    localStorage.setItem('owner', paymentDetails.owner);
    localStorage.setItem('iban', paymentDetails.iban);
  };

  /**
   *  Method getData from local storage and pass to reducer method to set state
   */

  const getLocalstorageData = (): void => {
    paymentInfo({
      owner: String(localStorage.getItem('owner')),
      iban: String(localStorage.getItem('iban')),
    });
  };

  /**
   * Method is submit form data to state and call local stoarage method.
   * Check value should not be null.
   * Call sendPaymentDetails method for post data.
   * @param event
   */

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    setLoading(true);
    event.preventDefault();

    const paymentDetails: Payment = {
      owner: event.currentTarget.accountOwner.value,
      iban: event.currentTarget.ibnNumber.value,
    };
    if (
      event.currentTarget.accountOwner.value.length &&
      event.currentTarget.ibnNumber.value.length
    ) {
      paymentInfo(paymentDetails);
      setLocalstorageData(paymentDetails);
      sendPaymentDetails(paymentDetails);
    } else {
      alert(alertMessage);
    }
  };

  /**
   * Method used post data to api and set paymentId
   * @param paymentDetails
   */

  const sendPaymentDetails = async (paymentDetails: Payment) => {
    paymentDetails['customerId'] = Math.floor(Math.random() * (100 - 1) + 1);

    try {
      const response = await fetch(demoPaymentApi, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
      });
      if (response.status !== 200) {
        const errorObj = {
          statusText: response.statusText,
          status: response.status,
        };
        setLoading(false);
        setError(response.status);
        throw new Error(JSON.stringify(errorObj));
      } else {
        const paymentDataId = await response.json();
        setLoading(false);
        setPaymentID(paymentDataId.paymentDataId);
      }
    } catch (error) {
      console.log(error);
    }
    localStorage.clear();
  };

  return (
    <div>
      {!previous && !error && !paymentId && (
        <form className='form' onSubmit={handleFormSubmit}>
          <h3 className='text-center'> Payment Information </h3>
          <div className='form-step form-step-active'>
            <div className='input-group'>
              <label htmlFor='accountOwner'>Account Owner</label>
              <input
                type='text'
                name='accountOwner'
                id='accountOwner'
                defaultValue={state['accountOwner']}
              />
            </div>
            <div className='input-group'>
              <label htmlFor='ibnNumber'>IBAN Number</label>
              <input
                type='text'
                name='ibnNumber'
                id='ibnNumber'
                defaultValue={state['ibnNumber']}
              />
            </div>
            <div className='btns-group'>
              <button
                className='btn btn-prev'
                onClick={() => SetPrevious(true)}
              >
                Previous
              </button>
              <button className='btn btn-next'>Submit</button>
            </div>
          </div>
        </form>
      )}
      {previous && <AddressInfo />}
      {error && <Fallback errorCode={error} />}
      {paymentId && !error && <Success paymentDataId={paymentId} />}
      <div className='loader'>
        {loading && (
          <Loader type='Oval' color='#00BFFF' height={50} width={50} />
        )}
      </div>
    </div>
  );
});

export default PaymentInfo;
