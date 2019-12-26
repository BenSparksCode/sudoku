import React, { useContext } from 'react'
import { SudokuContext } from '../../contexts/SudokuContext'

const SudokuSquare = ({ row, col, value }) => {
    const { sudokuState, changeCellValue } = useContext(SudokuContext)
    const editable = sudokuState.initialBoard[row - 1][col - 1] === 0

    const keyPressed = (e) => {
        const numEntered = e.key

        if (numEntered.match("^[0-9]$")) {
            changeCellValue(row, col, parseInt(numEntered))
        } else {
            return
        }
    }

    if (editable) {
        return (
            <div onKeyPress={e => keyPressed(e)} tabIndex={0} className={"editable sudoku-square"}>
                {value === 0 ? "" : value}
            </div>
        )
    } else {
        return (
            <div tabIndex={0} className={"uneditable sudoku-square"}>
                {value === 0 ? "" : value}
            </div>
        )
    }
}

const SudokuSubGrid = ({ gridNum }) => {

    const { sudokuState } = useContext(SudokuContext)
    const gridValues = sudokuState.workingBoard
    const solved = sudokuState.solved

    const rowVals = [1, 2, 3].map(x => x + 3 * (Math.floor(gridNum / 3 - 0.01)))
    let colVals
    if (gridNum % 3 === 0) {
        colVals = [7, 8, 9]
    } else {
        colVals = [1, 2, 3].map(x => x + 3 * ((gridNum % 3) - 1))
    }

    return (
        <div className={solved ? "sudoku-subgrid-solved" : "sudoku-subgrid"}>
            <div className="sudoku-subgrid-row">
                {colVals.map(c => {
                    return (
                        <SudokuSquare row={rowVals[0]} col={c} value={gridValues[rowVals[0] - 1][c - 1]} />
                    )
                })}
            </div>
            <div className="sudoku-subgrid-row">
                {colVals.map(c => {
                    return (
                        <SudokuSquare row={rowVals[1]} col={c} value={gridValues[rowVals[1] - 1][c - 1]} />
                    )
                })}
            </div>
            <div className="sudoku-subgrid-row">
                {colVals.map(c => {
                    return (
                        <SudokuSquare row={rowVals[2]} col={c} value={gridValues[rowVals[2] - 1][c - 1]} />
                    )
                })}
            </div>

        </div>
    )
}

const SudokuBoard = () => {
    const { sudokuState } = useContext(SudokuContext)
    const solved = sudokuState.solved

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className={(solved ? "solved" : "unsolved") + " sudoku-board"}>
            <div className="sudoku-board-row">
                {nums.slice(0, 3).map(n => {
                    return (
                        <SudokuSubGrid gridNum={n} />
                    )
                })}
            </div>
            <div className="sudoku-board-row">
                {nums.slice(3, 6).map(n => {
                    return (
                        <SudokuSubGrid gridNum={n} />
                    )
                })}
            </div>
            <div className="sudoku-board-row">
                {nums.slice(6, 9).map(n => {
                    return (
                        <SudokuSubGrid gridNum={n} />
                    )
                })}
            </div>

        </div>
    )
}

export default SudokuBoard;