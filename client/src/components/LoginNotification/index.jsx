import React from 'react';

import PropTypes from 'prop-types';

export default function LoginNotification({ message, type }) {
  return (
    <>
        <div
        className="test"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            background: '#ee4d4d',
            width: '100%',
            padding: '0.5em',
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          Invalid email/password provided.
        </div>
    </>
  );
}

LoginNotification.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};
