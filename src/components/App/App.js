import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.js';
import Search from '../Search/Search.js';
import ResultView from '../ResultView/ResultView.js';
import SavedView from '../SavedView/SavedView.js';
import Character from '../Character/Character.js';
import { getData } from '../../utilities/apiCalls.js';
import './App.scss';

const App = () => {
  const [allCharData, setAllCharData] = useState([]);
  const [character, setCharacter] = useState('');
  const [saved, setSaved] = useState([]);
  const [error, setError] = useState('')

  useEffect(() => {
    setAllCharData([]);
  }, [])

  const getCharacter = (name) => {
    getData(name)
    .then((data) => setAllCharData(data.results))
    .catch(error => setError(error.message));
  }

  const findCharacter = (id) => {
    const match = allCharData.find(char => char.id === id);
    setCharacter(match);
  }

  const updateSavedById = (id) => {
    const savedChar = saved.find(char => char.id === id);
    console.log(savedChar);
    if (savedChar) {
      const remaining = saved.filter(char => char.id !== id);
      console.log('test', remaining);
      setSaved(remaining);
    } else {
      const match = allCharData.find(char => char.id === id);
      setSaved([...saved, match]);
    }
  }

  const updateSavedByChar = (character) => {
    if (saved.includes(character)) {
      const remaining = saved.filter(char => char !== character);
      setSaved(remaining);
    } else {
      setSaved([...saved, character]);
    }
  }

  return (
    <div className='App'>
      <Navbar />
      <main>
        <header className='App-header'>
        </header>
        <Switch>
          <Route
            exact path='/saved'
            render={() => {
              return (
                <SavedView
                  saved={ saved }
                  findCharacter={ findCharacter }
                  updateSavedById={ updateSavedById }
                />)}
            }>
          </Route>
          <Route
            exact path={'/character/:id'}
            render={({match}) => {
              return (
                <Character
                  key={ `${match.params.id}1` }
                  id={ `${match.params.id}` }
                  details={ character }
                  updateSaved={ updateSavedByChar }
                />)}
            }>
          </Route>
          <Route
            exact path='/results'
            render={() => {
              return (
                <ResultView
                  searchResults={ allCharData }
                  findCharacter={ findCharacter }
                  updateSavedById={ updateSavedById }
                />)}
            }>
          </Route>
          <Route
            exact path='/'
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
