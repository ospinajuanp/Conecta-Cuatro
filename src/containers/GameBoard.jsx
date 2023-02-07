import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext'
import BoxTap from '../components/BoxTap';
import '../styles/GameBoard.scss'

const GameBoard = () => {
    const { state, resetBoard, togglePlayerPlay, resetGame } = useContext(AppContext);
    const [ stateReset, SetStateReset ] = useState(false)
    const [ stateResetGame, SetStateResetGame ] = useState(false)
    const resetThisGame = () => {
        SetStateReset(true)
        resetBoard()
    }
    const resetAllGame = () => {
        stateResetGame(true)
        resetGame()
        console.log(state)
    }
    useEffect(()=>{
        if (stateReset){
            let x = ((state.amountWinPlayerOne+state.amountWinPlayerTwo)%2) ? 2:1
            togglePlayerPlay(x)
            SetStateReset(false)
        }
        if(stateResetGame){
            resetGame()
            SetStateResetGame(false)
        }
    })


    return (
        <div className='GameBoard'>
            <div className='GameBoard-stat'>
                <div>Player1:{state.amountWinPlayerOne}</div>
                <div>Player2:{state.amountWinPlayerTwo}</div>
            </div>
            <div className='GameBoard-table'>
            {
                state.boardState.map(row=>(
                    row.map(column=>(
                            <BoxTap id={column.id} boolean={column.value}/>
                            )
                        )
                    )
                )
            }
            </div>
            <div id='reset' onClick={resetThisGame} className='GameBoard-reset'>Reset Progress</div>
            <div id='reset' onClick={resetAllGame} className='GameBoard-reset'>Reset Game</div>
        </div>
    );
};

export default GameBoard;