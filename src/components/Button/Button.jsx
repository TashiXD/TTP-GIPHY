import React from 'react';
import "./buttonStyle.css";

//this component returns a button with the name that is passed down
const Button = (props) => {
  return (
    <div>
      <button className='button'>{props.btnName}</button>
    </div>
  )
}

export default Button;
