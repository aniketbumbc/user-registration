import React from 'react';
import { Error } from '../../utils';

const Fallback: React.FC<Error> = ({ errorCode }) => {
  return (
    <div>
      <h3> Something went wrong</h3>
      <h4> Error Code: {errorCode}, Please try again </h4>
      <h2>
        The 405 Method Not Allowed error occurs when the web server is
        configured in a way that does not allow you to perform a specific action
        for a particular URL. It’s an HTTP response status code that indicates
        that the request method is known by the server but is not supported by
        the target resource.
      </h2>
    </div>
  );
};

export default Fallback;
