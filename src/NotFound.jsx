import React from 'react';
import '.'
import PNF from './assets/PNF.svg';
function NotFound() {
  return (
    <div className='notfound'>
        <h4>oops</h4>
      <img src={PNF} alt='Not found'></img>
    </div>
  )
}

export default NotFound