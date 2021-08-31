import React from 'react';
import { PaymentId } from '../../utils';

const Success: React.FC<PaymentId> = ({ paymentDataId }) => {
  return (
    <div>
      <h2 className='text-center'> Data successful saved</h2>
      <h3>paymentDataId: {paymentDataId}</h3>
    </div>
  );
};

export default Success;
