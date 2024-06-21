// Seat.js
import React from 'react';
import './Seat.css';

const Seat = ({ seatNumber, isReserved, onSeatSelect }) => {
  return (
    <div
      className={`seat ${isReserved ? 'reserved' : ''}`}
      onClick={() => !isReserved && onSeatSelect(seatNumber)}
    >
      {seatNumber}
    </div>
  );
};

export default Seat;
