import React, { useContext, useState } from 'react'
import { Collapse } from 'react-collapse';

import { SudokuContext } from '../../contexts/SudokuContext'

const Controls = () => {

    const { sudokuState, generateNewBoard, solveBoard, checkSolution, setDifficulty } = useContext(SudokuContext)
    const difficulty = sudokuState.difficulty
    const [settingsVisible, setSettingsVisible] = useState(false)

    const toggleSettings = () => {
        setSettingsVisible(!settingsVisible)
    }

    const sliderChanged = (e) => {
        setDifficulty(e.target.value)
    }

    return (
        <div className="all-controls">
            <div className="controls-container">
                <button className="btn btn-new" onClick={generateNewBoard}>New</button>
                <button className="btn btn-solve" onClick={solveBoard}>Solve</button>
                <button className="btn btn-check" onClick={checkSolution}>Check</button>
            </div>

            <div className="control-options-container">
                <button className="btn " onClick={toggleSettings}> Settings &#x25BE; </button>
                <Collapse isOpened={settingsVisible}>
                    <div className="slider-container">
                        <p>Difficulty: {Math.floor(((difficulty-8)/56)*100)}%</p>
                        <input type="range" min="9" max="64" value={difficulty} class="slider" id="myRange" onChange={e => sliderChanged(e)}></input>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default Controls;