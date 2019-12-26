import React, { createContext, useState } from 'react'
import Toastify from 'toastify-js'

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
        let newBoardCopy = []
        for (let i = 0; i < 9; i++) {
            newBoardCopy.push([...newBoard[i]])
        }

        setSudokuState({
            ...sudokuState, ...{
                initialBoard: newBoard,
                workingBoard: newBoardCopy,
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
            //Toast triggered here
            Toastify({
                text: "Correct!",
                duration: 2000,
                newWindow: true,
                close: false,
                gravity: "top", // `top` or `bottom`
                position: 'center', // `left`, `center` or `right`
                backgroundColor: "green",
              }).showToast();
        } else {
            setSudokuState({ ...sudokuState, ...{ solved: false } })
            Toastify({
                text: "Wrong, try again.",
                duration: 2000,
                newWindow: true,
                close: false,
                gravity: "top", // `top` or `bottom`
                position: 'center', // `left`, `center` or `right`
                backgroundColor: "red",
              }).showToast();
        }
    }





    return (
        <SudokuContext.Provider value={{ sudokuState, changeCellValue, generateNewBoard, solveBoard, checkSolution }}>
            {props.children}
        </SudokuContext.Provider>
    )
}

export default SudokuContextProvider
