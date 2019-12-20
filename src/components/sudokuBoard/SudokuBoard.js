import React from 'react'

const SodukoSquare = ({ value }) => {
    return (
        <div>
            [{value}]
        </div>
    )
}

const SodukoSubGrid = ({ squareValues }) => {


    return (
        <div>
            {squareValues.map(n => {
                return (
                    <SodukoSquare value={n} />
                )
            })}
        </div>
    )
}

const SudokuBoard = () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div>
            {nums.map(n => {
                return (
                    <SodukoSubGrid squareValues={nums} />
                )
            })}
        </div>
    )
}

export default SudokuBoard;