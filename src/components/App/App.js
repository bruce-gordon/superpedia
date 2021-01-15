import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.js';
import Search from '../Search/Search.js';
import ResultView from '../ResultView/ResultView.js'
import { getData } from '../../utilities/apiCalls.js';
import './App.scss';

const App = () => {
  const [charData, setCharData] = useState([]);
  const [error, setError] = useState('')

  const getCharacter = (name) => {
    getData(name)
    .then((data) => setCharData(data.results))
    .catch(error => setError(error.message));
  }

  return (
    <div className='App'>
      <Navbar />
      <main>
        <header className='App-header'>
        </header>
        <Switch>
          <Route
            path='/results'
            render={() => {
              return (
                <ResultView
                  searchResults={ charData }
                />)}
            }>
          </Route>
          <Route
            path='/'
            render={() => {
              return (
                <Search
                  getCharacter={ getCharacter }
                />)}
            }>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
