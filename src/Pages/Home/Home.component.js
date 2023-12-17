import React, { useState, useEffect } from 'react';

import { PresenceCard } from '../../Components/PresenceCard';

const Home = () => {
  // const { getPresences } = props;
  const [presences, setPresences] = useState([]);

  useEffect(() => {
    // getPresences((response) => {
    //   setPresences(response.data);
    // });
    setPresences([{ id: 'id', checkIn: '2023-12-10T13:35:55.188Z' }]);
  }, []);

  const renderPresence = ({ id, checkIn }) => (
    <PresenceCard
      id={id}
      checkIn={checkIn}
    />
  );

  return (
    <div>
      <div>
        Hi, how are you today?
      </div>
      {presences.length && presences.map(renderPresence)}
    </div>
  );
};

export default Home;
