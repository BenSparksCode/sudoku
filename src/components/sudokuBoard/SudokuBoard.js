import React, { useContext } from 'react'
import { SudokuContext } from '../../contexts/SudokuContext' 

const SodukoSquare = ({ row, col, value }) => {


    const printVal = () => {
        console.log(value, row, col);
    }

    return (
        <div onClick={printVal} className="sudoku-square">
            {value}
        </div>
    )
}

const SodukoSubGrid = ({ gridNum, squareValues }) => {

    const {gridValues} = useContext(SudokuContext)

    const rowVals = [1, 2, 3].map(x => x + 3*(Math.floor(gridNum / 3 - 0.01)))
    let colVals
    if (gridNum % 3 === 0) {
        colVals = [7, 8, 9]
    } else {
        colVals = [1, 2, 3].map(x => x + 3*((gridNum % 3)-1))
    }

    return (
        <div className="sudoku-subgrid">
            <div className="sudoku-subgrid-row">
                {colVals.map(c => {
                    return (
                        <SodukoSquare row={rowVals[0]} col={c} value={gridValues[rowVals[0]-1][c-1]} />
                    )
                })}
            </div>
            <div className="sudoku-subgrid-row">
                {colVals.map(c => {
                    return (
                        <SodukoSquare row={rowVals[1]} col={c} value={gridValues[rowVals[1]-1][c-1]} />
                    )
                })}
            </div>
            <div className="sudoku-subgrid-row">
                {colVals.map(c => {
                    return (
                        <SodukoSquare row={rowVals[2]} col={c} value={gridValues[rowVals[2]-1][c-1]} />
                    )
                })}
            </div>

        </div>
    )
}

const SudokuBoard = () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className="sudoku-board">
            <div className="sudoku-board-row">
                {nums.slice(0, 3).map(n => {
                    return (
                        <SodukoSubGrid gridNum={n} />
                    )
                })}
            </div>
            <div className="sudoku-board-row">
                {nums.slice(3, 6).map(n => {
                    return (
                        <SodukoSubGrid gridNum={n} />
                    )
                })}
            </div>
            <div className="sudoku-board-row">
                {nums.slice(6, 9).map(n => {
                    return (
                        <SodukoSubGrid gridNum={n} />
                    )
                })}
            </div>

        </div>
    )
}

export default SudokuBoard;