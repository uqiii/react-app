import React, { useState, useEffect } from 'react';
import axios from '../../Api/axios';

import { PresenceCard } from '../../Components/PresenceCard';

const Home = () => {
  const [presences, setPresences] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPresences = async () => {
      const url = '/users/current/presences';
      try {
        setLoading(true);
        const response = await axios.get(url);
        setPresences(response.data);
      } catch (err) {
        console.log('Error when fetching :', err);
      } finally {
        setLoading(false);
      }
    };

    getPresences();
  }, []);

  const renderPresence = ({ id, checkIn }) => (
    <PresenceCard
      key={id}
      id={id}
      checkIn={checkIn}
    />
  );

  return (
    <div>
      <div>
        Hi, how are you today?
      </div>
      {loading ? <div>loading</div> : presences.length && presences.map(renderPresence)}
    </div>
  );
};

export default Home;
