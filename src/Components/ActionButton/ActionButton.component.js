import React, { useState } from 'react';

import './ActionButton.css';
import { Loading } from '../Loading';

const ActionButton = (props) => {
  const { text, onSubmit, ...buttonProps } = props;
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onSubmit();
    } catch (err) {
      console.log('error when do action, Err: ', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      {...buttonProps}
      onClick={handleClick}
    >
      {loading ? <Loading /> : text}
    </button>
  );
};

export default ActionButton;
