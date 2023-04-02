import React from 'react';
import { Link } from 'react-router-dom';
// import ShowDetails from './ShowDetails';
import '../App.css';

function ShowList({ shows }) {
  return (
    <ul className="list-group">
      {shows.map(show => (
        <li key={show.show.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <h3>{show.show.name}</h3>
            <p >{show.show.type}</p>
          </div>
          <Link to={`/shows/${show.show.id}`} className="btn btn-primary">Details</Link>
        </li>
      ))}
    </ul>
  );
}

export default ShowList;
