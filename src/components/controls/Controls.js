import React, { useContext } from 'react'
import { SudokuContext } from '../../contexts/SudokuContext' 

const Controls = () => {

    const {generateNewBoard, solveBoard, checkSolution } = useContext(SudokuContext)

    

    return (
        <div className="controls-container">
            <button className="btn btn-new" onClick={generateNewBoard}>New</button>
            <button className="btn btn-solve" onClick={solveBoard}>Solve</button>
            <button className="btn btn-check" onClick={checkSolution}>Check</button>
        </div>
    )
}

export default Controls;