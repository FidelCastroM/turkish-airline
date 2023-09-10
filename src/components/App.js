import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import CurrentUserContext from '../context/CurrentUserContext';

function App() {
  return (
    <CurrentUserContext.Provider>
          <Header />
    </CurrentUserContext.Provider>
  )
}

export default App;