import React from 'react';
import { Error } from '../../utils';

const Fallback: React.FC<Error> = ({ errorCode }) => {
  return (
    <div>
      <h3> Something went wrong</h3>
      <h4> Error Code: {errorCode}, Please try again </h4>
    </div>
  );
};

export default Fallback;
