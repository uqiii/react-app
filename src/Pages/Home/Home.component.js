import React, { useState } from 'react';

import './Home.css';
import { Clock } from './Clock';
import { Filter } from './Filter';
import { PresenceList } from './PresenceList';

const Home = () => {
  const [dateRange, setDateRage] = useState({});
  const [refreshTime, setRefreshTime] = useState();

  return (
    <div className="page">
      <Clock
        onSuccess={() => setRefreshTime(new Date())}
      />
      <Filter
        onApply={(newDateRange) => setDateRage(newDateRange)}
      />
      <PresenceList
        refreshTime={refreshTime}
        dateRange={dateRange}
      />
    </div>
  );
};

export default Home;
