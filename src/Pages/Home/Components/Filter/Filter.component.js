import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import './Filter.css';
import { DatePicker } from '../../../../Components/DatePicker';
import { ActionButton } from '../../../../Components/ActionButton';

const Home = ({ onApply }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div className="filterContainer">
      <div className="datePickersContainer">
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <FaArrowRight />
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>
      <div className="filterButtonsContainer">
        <ActionButton text="Apply" onSubmit={() => onApply({ startDate, endDate })} />
        <ActionButton
          text="Reset"
          onSubmit={() => {
            setStartDate();
            setEndDate();
            onApply({});
          }}
        />
      </div>
    </div>
  );
};

export default Home;
