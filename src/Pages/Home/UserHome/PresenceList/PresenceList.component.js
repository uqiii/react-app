import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import moment from 'moment';

import './PresenceList.css';
import axios from '../../../../Api/axios';
import { PresenceCard } from '../../../../Components/PresenceCard';
import { Loading } from '../../../../Components/Loading';

const PresenceList = (props) => {
  const { dateRange: { startDate, endDate }, refreshTime } = props;
  const [presences, setPresences] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPresences = async () => {
      let url = '/users/current/presences?orderBy=desc';
      if (startDate) {
        const startDateQuery = moment(startDate).startOf('day').toISOString();
        url += `&startDate=${startDateQuery}`;
      }
      if (endDate) {
        const endDateQuery = moment(endDate).endOf('day').toISOString();
        url += `&endDate=${endDateQuery}`;
      }
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
  }, [startDate, endDate, refreshTime]);

  return (
    <div>
      {loading
        ? <Loading />
        : presences.length && presences.map(({ id, checkIn, checkOut }) => (
          <PresenceCard
            key={id}
            id={id}
            checkIn={checkIn}
            checkOut={checkOut}
          />
        ))}
    </div>
  );
};

export default PresenceList;
