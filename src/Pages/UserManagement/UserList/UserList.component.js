import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import axios from '../../../Api/axios';
import { Loading } from '../../../Components/Loading';
import { UserCard } from '../../../Components/UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const url = '/users';
      try {
        setLoading(true);
        const response = await axios.get(url);
        setUsers(response.data);
      } catch (err) {
        const errorMessage = err?.response?.data?.message;
        toast.error(errorMessage || 'Error');
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      {loading
        ? <Loading />
        : users.length && users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
    </div>
  );
};

export default UserList;
