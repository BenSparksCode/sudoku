import React, { createContext, useState } from 'react'

import { solveSudoku, generateBoard, checkSolved } from '../util/SudokuSolver'

export const SudokuContext = createContext()

const testGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const initialSudokuState = {
    initialBoard: testGrid,
    workingBoard: testGrid,
    solved: false
}


const SudokuContextProvider = (props) => {

    const [sudokuState, setSudokuState] = useState(initialSudokuState)

    const initializeGame = () => {
        let firstBoard = generateBoard(30)
        console.log("before", sudokuState);
        let newState = { ...sudokuState, ...{ initialBoard: firstBoard, workingBoard: firstBoard } }
        console.log("after", newState);

        setSudokuState(newState)
    }

    const setWorkingBoard = (board) => {
        setSudokuState({ ...sudokuState, ...{ workingBoard: board } })
    }

    const changeCellValue = (row, col, newVal) => {
        let gridCopy = [...sudokuState.workingBoard]
        gridCopy[row - 1][col - 1] = newVal
        setWorkingBoard(gridCopy)
    }

    const generateNewBoard = () => {
        const newBoard = generateBoard()

        setSudokuState({
            ...sudokuState, ...{
                initialBoard: newBoard,
                workingBoard: newBoard,
                solved: false
            }
        })
    }

    const solveBoard = () => {
        let newGrid = []
        for (let i = 0; i < 9; i++) {
            newGrid.push([...sudokuState.workingBoard[i]])
        }
        const res = solveSudoku(newGrid)

        if (res.solved) {
            setSudokuState({ ...sudokuState, ...{ solved: true, workingBoard: res.board } })
        } else {
            setWorkingBoard(res.board)
        }
    }

    const checkSolution = () => {
        let newGrid = []
        for (let i = 0; i < 9; i++) {
            newGrid.push([...sudokuState.workingBoard[i]])
        }
        const solved = checkSolved(newGrid)
        if (solved) {
            setSudokuState({ ...sudokuState, ...{ solved: true } })
        }
    }





    return (
        <SudokuContext.Provider value={{ sudokuState, changeCellValue, generateNewBoard, solveBoard, checkSolution, initializeGame }}>
            {props.children}
        </SudokuContext.Provider>
    )
}

export default SudokuContextProvider
