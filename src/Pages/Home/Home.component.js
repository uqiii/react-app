import React, { useState } from 'react';

import './Home.css';
import { Clock } from './Clock';
import { Filter } from './Filter';
import { PresenceList } from './PresenceList';

const Home = () => {
  const [dateRange, setDateRage] = useState({});
  console.log('===== date range', dateRange);

  return (
    <div className="page">
      <Clock
        onSuccess={() => {}}
      />
      <Filter
        onApply={(newDateRange) => setDateRage(newDateRange)}
      />
      <PresenceList
        dateRange={dateRange}
      />
    </div>
  );
};

export default Home;
