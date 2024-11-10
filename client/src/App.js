import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
  const [flights, setFlights] = useState([]);
  const [booking, setBooking] = useState(null);

  // פונקציה לדוגמה לחיפוש טיסות
  const searchFlights = () => {
    const sampleFlights = [
      { id: 1, origin: 'New York', destination: 'London', price: 500 },
      { id: 2, origin: 'Los Angeles', destination: 'Paris', price: 450 },
    ];
    setFlights(sampleFlights);
  };

  const bookFlight = (flight) => {
    setBooking(flight);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Flight Booking System</h1>
      
      <button onClick={searchFlights}>Search Flights</button>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Available Flights</h2>
        {flights.length > 0 ? (
          flights.map((flight) => (
            <div key={flight.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
              <p>From: {flight.origin}</p>
              <p>To: {flight.destination}</p>
              <p>Price: ${flight.price}</p>
              <button onClick={() => bookFlight(flight)}>Book</button>
            </div>
          ))
        ) : (
          <p>No flights available</p>
        )}
      </div>

      {booking && (
        <div style={{ marginTop: '20px', border: '1px solid green', padding: '10px' }}>
          <h2>Booking Confirmation</h2>
          <p>From: {booking.origin}</p>
          <p>To: {booking.destination}</p>
          <p>Price: ${booking.price}</p>
        </div>
      )}
    </div>
  );
}

export default App;
