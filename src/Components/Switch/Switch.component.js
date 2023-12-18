import React from 'react';
import ReactSwitch from 'react-switch';

import './Switch.css';

const Switch = (props) => {
  const {
    label, checked, onChange, className
  } = props;

  return (
    <div className={`switchContainer ${className}`}>
      <div className="switchLabel">{label}</div>
      <ReactSwitch
        onChange={onChange}
        checked={checked}
        onColor="#2e8b57"
        height={20}
        width={40}
        activeBoxShadow="0 0 2px 3px #2e8b57"
      />
    </div>
  );
};

export default Switch;
