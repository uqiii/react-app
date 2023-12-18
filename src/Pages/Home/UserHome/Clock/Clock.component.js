import React, { useState } from 'react';

import './Clock.css';
import axios from '../../../../Api/axios';
import { ActionButton } from '../../../../Components/ActionButton';
import DateUtils from '../../../../Utils/DateUtils';

const Home = ({ onSuccess }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  const doCheckIn = async () => {
    const url = '/users/current/presences?type=IN';
    await axios.post(url);
    onSuccess();
  };

  const doCheckOut = async () => {
    const url = '/users/current/presences?type=OUT';
    await axios.post(url);
    onSuccess();
  };

  return (
    <div className="clockContainer">
      <div className="date">
        {DateUtils.getDate(currentTime)}
      </div>
      <div className="time">
        {DateUtils.getTime(currentTime)}
        {' '}
        WIB
      </div>
      <div className="buttonsContainer">
        <ActionButton text="Check In" onSubmit={doCheckIn} />
        <ActionButton text="Check Out" onSubmit={doCheckOut} />
      </div>
    </div>
  );
};

export default Home;
