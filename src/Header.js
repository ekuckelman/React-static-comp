import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <a className='header-write'> Write a Story </a>
      <h1>Medium</h1>
      <a className='header-signin'> Signin/Sign-up</a>
    </div>
  )
}

export default Header;
