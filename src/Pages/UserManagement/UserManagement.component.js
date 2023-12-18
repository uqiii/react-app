import React, { useState } from 'react';

import { UserList } from './UserList';
import { UserCreator } from './UserCreator';
import './UserManagement.css';

const UserManagement = () => {
  const [refreshTime, setRefreshTime] = useState();

  return (
    <div className="page">
      <div className="createButton">
        <UserCreator
          onSuccess={() => setRefreshTime(new Date())}
        />
      </div>
      <UserList
        refreshTime={refreshTime}
      />
    </div>
  );
};

export default UserManagement;
