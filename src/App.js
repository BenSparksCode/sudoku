import React from 'react';

import NavBar from './components/navBar/NavBar'
import SudokuBoard from './components/sudokuBoard/SudokuBoard'
import Controls from './components/controls/Controls'



import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SudokuBoard />
      <Controls />
    </div>
  );
}

export default App;
