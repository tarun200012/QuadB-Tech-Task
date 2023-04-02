import React, { useState } from 'react';
import '../App.css';

function BookingForm({ showName }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingBookingDetails = JSON.parse(localStorage.getItem('bookingDetails')) || [];
    const newBookingDetails = {
      showName,
      name,
      email,
      phone,
    };
    const updatedBookingDetails = [...existingBookingDetails, newBookingDetails];
    localStorage.setItem('bookingDetails', JSON.stringify(updatedBookingDetails));
    alert('Booking confirmed!');
  };
 

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book {showName} Movie Ticket</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </div>
      <button type="submit">Confirm Booking</button>
    </form>
  );
}

export default BookingForm;
