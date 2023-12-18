import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import './PresenceCard.css';

const getTime = (timestamp) => {
  if (!timestamp) {
    return null;
  }
  return new Date(timestamp).toLocaleTimeString('id-ID');
};

const getDate = (timestamp) => {
  if (!timestamp) return null;
  return new Date(timestamp).toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'
  });
};

const PresenceCard = (props) => {
  const {
    userName, id, checkIn, checkOut
  } = props;
  const isToday = new Date().setHours(0, 0, 0, 0) === new Date(checkIn).setHours(0, 0, 0, 0);

  const getCheckOutText = () => {
    if (checkOut) {
      const checkOutTime = getTime(checkOut);
      return `${checkOutTime} WIB`;
    }
    if (userName) {
      return isToday ? `${userName} has not checked out` : `${userName} did not check out`;
    }
    return isToday ? 'You have not checked out' : 'You did not check out';
  };

  const date = getDate(checkIn);
  const checkInTime = getTime(checkIn);
  const checkInText = `${checkInTime} WIB`;

  const dateTitle = isToday ? `Today, ${date}` : date;

  return (
    <div key={id} className={`presenceCard border ${isToday && 'today'}`}>
      <div className="date">
        {userName || dateTitle}
      </div>
      <div className="check">
        <FaArrowRight color="seagreen" />
        {checkInText}
      </div>
      <div className="check">
        <FaArrowLeft color="brown" />
        {getCheckOutText()}
      </div>
    </div>
  );
};

export default PresenceCard;
