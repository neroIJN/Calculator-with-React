import React from 'react';

const Wrapper = ({childern}) => {
  return (
    <div className='wrapper' style={{
      height: '20rem',
  width: '30rem',
  padding: '2rem',
  marginTop: '4rem',
  background: '#f9f9f9',
  borderRadius: '1rem',
  boxShadow: 'none',
      
    }}>
      {childern}
      
    </div>
  );
};

export default Wrapper
