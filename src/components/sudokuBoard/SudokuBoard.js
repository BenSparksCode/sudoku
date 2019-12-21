import React from 'react'

const SodukoSquare = ({ value }) => {

    const printVal = () => {
        console.log(value);
    }

    return (
        <div onClick={printVal} className="sudoku-square">
            {value}
        </div>
    )
}

const SodukoSubGrid = ({ squareValues }) => {


    return (
        <div className="sudoku-subgrid">
            <div className="sudoku-subgrid-row">
            {squareValues.slice(0,3).map(n => {
                return (
                    <SodukoSquare value={n} />
                )
            })}
            </div>
            <div className="sudoku-subgrid-row">
            {squareValues.slice(3,6).map(n => {
                return (
                    <SodukoSquare value={n} />
                )
            })}
            </div>
            <div className="sudoku-subgrid-row">
            {squareValues.slice(6,9).map(n => {
                return (
                    <SodukoSquare value={n} />
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
            {nums.slice(0,3).map(n => {
                 return (
                    <SodukoSubGrid squareValues={nums} />
                )
            })}
            </div>
            <div className="sudoku-board-row">
            {nums.slice(3,6).map(n => {
                 return (
                    <SodukoSubGrid squareValues={nums} />
                )
            })}
            </div>
            <div className="sudoku-board-row">
            {nums.slice(6,9).map(n => {
                 return (
                    <SodukoSubGrid squareValues={nums} />
                )
            })}
            </div>

        </div>
    )
}

export default SudokuBoard;