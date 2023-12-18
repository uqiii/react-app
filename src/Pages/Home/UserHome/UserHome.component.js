import React, { useState } from 'react';

import './UserHome.css';
import { Clock } from './Clock';
import { Filter } from '../Components/Filter';
import { PresenceList } from './PresenceList';

const UserHome = () => {
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

export default UserHome;
