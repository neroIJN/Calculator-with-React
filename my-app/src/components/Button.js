import React from 'react';

const Button = ({ value }) => {
  return (
    <button
      className="bts"
      style={{
        background: '#e9f0f4',
        height: '3.5rem',
        padding: '10px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#242424',
        border: 'none',
        fontSize: '1.5rem'
      }}
    >
      {value}
    </button>
  );
};

export default Button;

