import React from 'react';

import './Button.css';

const InputBox = (props) => {
  const { text, type, ...buttonProps } = props;

  return (
    <button
      type="submit"
      {...buttonProps}
    >
      {text}
    </button>
  );
};

export default InputBox;
