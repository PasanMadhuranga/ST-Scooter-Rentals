// SeatSelection.js
import React, { useState } from 'react';
import Seat from './Seat';
import './SeatSelection.css';

const SeatSelection = () => {
  const [reservedSeats, setReservedSeats] = useState([1, 3, 5, 7, 9]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeats([...selectedSeats, seatNumber]);
  };

  const seats = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="seat-selection">
      {seats.map((seatNumber) => (
        <Seat
          key={seatNumber}
          seatNumber={seatNumber}
          isReserved={reservedSeats.includes(seatNumber)}
          onSeatSelect={handleSeatSelect}
        />
      ))}
      <div className="selected-seats">
        Selected Seats: {selectedSeats.join(', ')}
      </div>
    </div>
  );
};

export default SeatSelection;
