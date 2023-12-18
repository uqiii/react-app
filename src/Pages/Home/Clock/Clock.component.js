import React from 'react';

import './Clock.css';
import axios from '../../../Api/axios';
import { ActionButton } from '../../../Components/ActionButton';

const Home = ({ onSuccess }) => {
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
    <div className="buttonsContainer">
      <ActionButton text="Check In" onSubmit={doCheckIn} />
      <ActionButton text="Check Out" onSubmit={doCheckOut} />
    </div>
  );
};

export default Home;
