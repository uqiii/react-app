import React from 'react';

import './InputBox.css';

const InputBox = (props) => {
  const { icon: Icon, ...inputProps } = props;

  return (
    <div className="input-box">
      <input {...inputProps} className="border" />
      {Icon && <Icon className="icon" />}
    </div>
  );
};

export default InputBox;
