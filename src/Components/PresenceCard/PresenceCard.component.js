import React from 'react';

import './PresenceCard.css';

const PresenceCard = (props) => {
  const { id, checkIn, checkOut } = props;
  const date = checkIn && new Date(checkIn).toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'
  });
  const checkInText = `Checked in at ${checkIn && new Date(checkIn).toLocaleTimeString('id-ID')} WIB`;
  const checkOutText = checkOut
    ? `Checked out at ${checkOut}`
    : 'You have not checked in';

  return (
    <div key={id} className="wrapper border">
      <div className="date">
        {date}
      </div>
      <div>
        {checkInText}
      </div>
      <div>
        {checkOutText}
      </div>
    </div>
  );
};

export default PresenceCard;
