import React, { useContext } from 'react'
import { Collapse } from 'react-collapse';

import { SudokuContext } from '../../contexts/SudokuContext'

const Controls = () => {

    const { generateNewBoard, solveBoard, checkSolution } = useContext(SudokuContext)



    return (

        <div>
            <div className="controls-container">
                <button className="btn btn-new" onClick={generateNewBoard}>New</button>
                <button className="btn btn-solve" onClick={solveBoard}>Solve</button>
                <button className="btn btn-check" onClick={checkSolution}>Check</button>
            </div>
            {/* <div className="control-options-container">
                <button onClick={generateNewBoard}> open </button>
                <Collapse isOpened={true || false}>
                    <div>Random content</div>
                    <div>Random content</div>
                    <div>Random content</div>

                </Collapse>
            </div> */}
        </div>

    )
}

export default Controls;