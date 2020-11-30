import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button
      disabled={props.disabled}
      name={props.name}
      data-role={props.role}
      className={`button ${props.bgColor}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
