import React from 'react';

var FontAwesome = require('react-fontawesome');
 
const MyIcon  = ()=>{
 
    return (
      <FontAwesome
        className='super-crazy-colors'
        name='rocket'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    );
  };
  export default MyIcon;