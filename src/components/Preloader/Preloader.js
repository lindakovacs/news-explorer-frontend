import React from 'react';

function Preloader() {
    return (
      <div className='circle-preloader'>
        <i className='circle-preloader__spin'></i>
        <p className='circle-preloader__text'>Searching for news...</p>
      </div>
    );
}
export default Preloader;
