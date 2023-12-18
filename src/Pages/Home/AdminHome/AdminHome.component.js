import React, { useState } from 'react';

import { Filter } from '../Components/Filter';
import { PresenceList } from './PresenceList';

const AdminHome = () => {
  const [dateRange, setDateRage] = useState({});

  console.log(dateRange);
  return (
    <div>
      <Filter
        onApply={(newDateRange) => setDateRage(newDateRange)}
      />
      <PresenceList
        dateRange={dateRange}
      />
    </div>
  );
};

export default AdminHome;
