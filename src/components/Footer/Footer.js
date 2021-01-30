import React from 'react';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import facebook from '../../images/facebook.svg';
import website from '../../images/website.png';
import './Footer.css';

function Footer(props) {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        © 2020 Linda Kovacs | Powered by New API
      </p>
      <div className='footer__content-container'>
        <ul className='footer__content footer__links'>
          <li className='footer__item'>
            <a className='footer__link' href='/'>
              Home
            </a>
          </li>
          <li className='footer__item'>
            <a
              className='footer__link'
              href='https://practicum.yandex.com/'
              target='_blank'
              rel='noreferrer'
            >
              Practicum by Yandex
            </a>
          </li>
        </ul>
        <ul className='footer__content footer__icons'>
          <li>
            <a
              href='https://github.com/lindakovacs/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={github} alt='github' className=' footer__icon' />
            </a>
          </li>
          <li>
            <a
              href='https://linda-kovacs.com/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={website} alt='website' className='footer__icon ' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/lindakovacsart/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={linkedin} alt='facebook' className='footer__icon' />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
              <img src={facebook} alt='facebook' className='footer__icon ' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
