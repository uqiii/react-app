import React from 'react';
import { useNavigate } from 'react-router-dom';

const withNavigate = (ComposedComponent) => {
  const HOCNavigate = (props) => {
    const navigate = useNavigate();

    return (
      <ComposedComponent {...props} navigate={navigate} />
    );
  };

  return HOCNavigate;
};

export default withNavigate;
