import React from 'react';

import SudokuContextProvider from './contexts/SudokuContext'

import NavBar from './components/navBar/NavBar'
import SudokuBoard from './components/sudokuBoard/SudokuBoard'
import Controls from './components/controls/Controls'



function App() {
  return (
    <div className="App">
      <NavBar />

      <SudokuContextProvider>
        <SudokuBoard />
      </SudokuContextProvider>
      
      <Controls />
    </div>
  );
}

export default App;


//VS CODE SHORTCUTS:
//nfn - named arrow function
//rafc - arrow functional component

