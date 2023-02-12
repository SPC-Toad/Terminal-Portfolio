import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Terminal from './components/Terminal/Terminal';
import KR from './components/Main/Korean';
import EN from './components/Main/English';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Terminal /> } />
          <Route path='/korean' element={ <KR /> } />
          <Route path='/english' element={ <EN /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App