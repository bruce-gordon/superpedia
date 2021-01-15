import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.js';
import Search from '../Search/Search.js';
import {getData} from '../../utilities/apiCalls.js';
import './App.scss';

const App = () => {
  const [charData, setCharData] = useState([]);
  const [error, setError] = useState('')

  const getCharacter = (name) => {
    console.log(name);
    getData(name)
    .then((data) => setCharData(data.results))
    .catch(error => setError(error.message))
  }

  return (
    <div className='App'>
      <Navbar />
      <main>
        <header className='App-header'>
        </header>
        <Search
          getCharacter={ getCharacter }
        />
      </main>
    </div>
  );
}

export default App;
