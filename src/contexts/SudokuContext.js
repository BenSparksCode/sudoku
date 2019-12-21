import React, { createContext, useState } from 'react'

export const SudokuContext = createContext()

const gridConfig = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
]

const SudokuContextProvider = (props) => {

    const [gridValues, setGridValues] = useState(gridConfig)

    const changeCellValue = (row, col, newVal) => {
        let gridCopy = [...gridValues]
        gridCopy[row-1][col-1] = newVal
        setGridValues(gridCopy)
    }

    return (
        <SudokuContext.Provider value={{gridValues, changeCellValue}}>
            {props.children}
        </SudokuContext.Provider>
    )
}

export default SudokuContextProvider
