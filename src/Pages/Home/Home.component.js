import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import './Home.css';
import axios from '../../Api/axios';
import { PresenceCard } from '../../Components/PresenceCard';
import { ActionButton } from '../../Components/ActionButton';

const Home = () => {
  const [presences, setPresences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState();

  useEffect(() => {
    const getPresences = async () => {
      const url = '/users/current/presences?orderBy=desc';
      try {
        setLoading(true);
        const response = await axios.get(url);
        setPresences(response.data);
      } catch (err) {
        const errorMessage = err?.response?.data?.message;
        toast.error(errorMessage || 'Error');
      } finally {
        setLoading(false);
      }
    };

    getPresences();
  }, [refresh]);

  const doCheckIn = async () => {
    const url = '/users/current/presences?type=IN';
    await axios.post(url);
    setRefresh(new Date());
  };

  const doCheckOut = async () => {
    const url = '/users/current/presences?type=OUT';
    await axios.post(url);
    setRefresh(new Date());
  };

  const renderPresence = ({ id, checkIn, checkOut }) => (
    <PresenceCard
      key={id}
      id={id}
      checkIn={checkIn}
      checkOut={checkOut}
    />
  );

  return (
    <div>
      <div>
        Hi, how are you today?
      </div>
      {!loading && (
      <div className="buttonsContainer">
        <ActionButton text="Check In" onSubmit={doCheckIn} />
        <ActionButton text="Check Out" onSubmit={doCheckOut} />
      </div>
      )}
      <div className="presencesContainer">
        {loading ? <div>loading</div> : presences.length && presences.map(renderPresence)}
      </div>
    </div>
  );
};

export default Home;
