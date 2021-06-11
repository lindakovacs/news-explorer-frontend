import React from 'react';

const Popup = ({ setIsPopupOpen, setFormPopup, isPopupOpen, children }) => {
  function closePopup() {
    setIsPopupOpen(false);
    setFormPopup(false);
  }
  return (
    <section className={`modal ${isPopupOpen ? 'modal_visible' : ''}`}>
      <div className={`popup ${isPopupOpen ? 'popup_visible' : ''}`}>
        <div className='popup-container'>
          <i className='popup__exit' onClick={closePopup}></i>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Popup;
