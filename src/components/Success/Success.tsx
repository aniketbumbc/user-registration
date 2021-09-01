import React from 'react';
import { PaymentId } from '../../utils';
import '../../App.scss';

const Success: React.FC<PaymentId> = ({ paymentDataId }) => {
  return (
    <div className='success'>
      <h2> Data successful saved</h2>
      <h3 className='paymentId'>paymentDataId: {paymentDataId}</h3>
    </div>
  );
};

export default Success;
