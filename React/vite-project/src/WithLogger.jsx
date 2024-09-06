import React from 'react';

function WithLogger(WrappedComponent) {
  return function LoggerComponent(props) {
    console.log('Props:', props);
    return <WrappedComponent {...props} />;
  };
}

export default WithLogger;