import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import './PresenceCard.css';
import DateUtils from '../../Utils/DateUtils';

const PresenceCard = (props) => {
  const {
    userName, id, checkIn, checkOut
  } = props;
  const isToday = new Date().setHours(0, 0, 0, 0) === new Date(checkIn).setHours(0, 0, 0, 0);

  const getCheckOutText = () => {
    if (checkOut) {
      const checkOutTime = DateUtils.getTime(checkOut);
      return `${checkOutTime} WIB`;
    }
    if (userName) {
      return isToday ? `${userName} has not checked out` : `${userName} did not check out`;
    }
    return isToday ? 'You have not checked out' : 'You did not check out';
  };

  const date = DateUtils.getDate(checkIn);
  const checkInTime = DateUtils.getTime(checkIn);
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
