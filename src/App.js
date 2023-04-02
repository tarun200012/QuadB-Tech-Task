import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import './App.css';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setShows(response.data))
      .catch(error => console.error(error));
  }, []);


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ShowList shows={shows} />} />
        <Route path="/shows/:id" element={<ShowDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;