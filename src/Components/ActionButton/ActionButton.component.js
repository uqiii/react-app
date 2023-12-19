import React, { useState } from 'react';
import toast from 'react-hot-toast';

import './ActionButton.css';
import { Loading } from '../Loading';

const ActionButton = (props) => {
  const {
    text, onSubmit, onSuccess, ...buttonProps
  } = props;
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onSubmit();
    } catch (err) {
      const errorMessage = err?.response?.data?.message;
      toast.error(errorMessage || 'Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      className="border"
      {...buttonProps}
      onClick={handleClick}
    >
      {loading ? <Loading /> : text}
    </button>
  );
};

export default ActionButton;
