import React, { useState } from 'react';

import './Clock.css';
import axios from '../../../Api/axios';
import { ActionButton } from '../../../Components/ActionButton';

const Home = ({ onSuccess }) => {
  const time = new Date().toLocaleTimeString('id-ID');
  const [currentTime, setCurrentTime] = useState(time);

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString('id-ID'));
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
      <div className="time">
        {currentTime}
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
