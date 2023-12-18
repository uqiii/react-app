import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './DatePicker.css';

const InputBox = (props) => {
  const { selected, onChange } = props;

  return (
    <DatePicker
      wrapperClassName="datePicker"
      dateFormat="MMM d, yyyy"
      selected={selected}
      onChange={onChange}
      placeholderText="Select Date"
    />
  );
};

export default InputBox;
