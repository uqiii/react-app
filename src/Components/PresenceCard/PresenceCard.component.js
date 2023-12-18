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
  const { id, checkIn, checkOut } = props;
  const isToday = new Date().setHours(0, 0, 0, 0) === new Date(checkIn).setHours(0, 0, 0, 0);

  const date = getDate(checkIn);
  const checkInTime = getTime(checkIn);
  const checkInText = `${checkInTime} WIB`;
  const checkOutTime = getTime(checkOut);
  const checkOutText = checkOutTime
    ? `${checkOutTime} WIB`
    : 'You have not checked out';

  const dateTitle = isToday ? `Today, ${date}` : date;

  return (
    <div key={id} className={`wrapper border ${isToday && 'today'}`}>
      <div className="date">
        {dateTitle}
      </div>
      <div className="check">
        <FaArrowRight color="seagreen" />
        {checkInText}
      </div>
      <div className="check">
        <FaArrowLeft color="brown" />
        {checkOutText}
      </div>
    </div>
  );
};

export default PresenceCard;
