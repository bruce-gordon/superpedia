import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.js';
import Search from '../Search/Search.js';
import './App.scss';

const App = () => {
  const [charData, setCharData] = useState([]);

  return (
    <div className='App'>
      <Navbar />
      <main>
        <header className='App-header'>
        </header>
        <Search />
      </main>
    </div>
  );
}

export default App;
