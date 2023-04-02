import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { useMatch } from 'react-router-dom';
import '../App.css';

function ShowDetails() {
  const [show, setShow] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const match = useMatch(
    "/shows/:id"
  );
  const id = match.params.id;

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => setShow(response.data))
      .catch(error => console.error(error));
  }, [id]);


  if (!show) {
    return <div>Loading...</div>;
  }

  const handleBookTicketClick = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="container">
      <h1>{show.name}</h1>
      <img src={show.image.original} alt={show.name} />
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      
      <button onClick={handleBookTicketClick}>Book Ticket</button>
      {isFormVisible && <BookingForm showName={show.name} />}
    </div>
  );
}

export default ShowDetails;
