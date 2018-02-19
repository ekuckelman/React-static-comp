import React from 'react';
import './App';
import './Author.css';

const Author = (props) => {
  return (
    // Create an Author component
    <div className='author-info'>
      <img src={props.authImg} className='author-image'/>
      <div className='author-info-text'>
        <h4 className='author-text'>{props.authName}</h4>
        <h4 className='author-text'>{props.authTime} read</h4>
      </div>
    </div>
  );
};

export default Author;