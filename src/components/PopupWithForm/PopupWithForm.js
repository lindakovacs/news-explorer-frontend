import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
  return (
    <>
      <section
        className={`form form__${props.name} ${
          props.isOpen ? 'form_visible' : ''
        }`}
      >
        <form
          className='form__container'
          name={`form__${props.name}`}
          action='#'
          noValidate
          onSubmit={props.onSubmit}
        >
          <h2 className='form__title'>{props.title}</h2>
          {props.children}
          <button className='form__submit-button' type='submit'>
            {props.buttonText}
          </button>
          <button
            className='form__reset-button'
            type='reset'
            aria-label='Close button'
            onClick={props.onClose}
          ></button>
        </form>
      </section>
    </>
  );
}

export default PopupWithForm;
