import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import moment from 'moment';

import './PresenceList.css';
import axios from '../../../../Api/axios';
import { PresenceCard } from '../../../../Components/PresenceCard';
import { Loading } from '../../../../Components/Loading';
import DateUtils from '../../../../Utils/DateUtils';

const PresenceList = (props) => {
  const { dateRange: { startDate, endDate } } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPresences = async () => {
      let url = '/presences?orderBy=desc&sortBy=checkIn&limit=100';
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
        setData(response.data);
      } catch (err) {
        const errorMessage = err?.response?.data?.message;
        toast.error(errorMessage || 'Error');
      } finally {
        setLoading(false);
      }
    };

    getPresences();
  }, [startDate, endDate]);

  const renderSection = ({ date, userPresences }) => {
    const isToday = new Date().setHours(0, 0, 0, 0) === new Date(date).setHours(0, 0, 0, 0);
    return (
      <div>
        <div className="sectionDate">
          {isToday && 'Today, '}
          {DateUtils.getDate(date)}
        </div>
        {userPresences.map(({
          id, userName, checkIn, checkOut
        }) => (
          <PresenceCard
            userName={userName}
            key={id}
            id={id}
            checkIn={checkIn}
            checkOut={checkOut}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      {loading
        ? <Loading />
        : data.length && data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map(renderSection)}
    </div>
  );
};

export default PresenceList;
