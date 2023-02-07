import React, { useContext } from 'react';
import AppContext from '../context/AppContext'
import BoxTap from '../components/BoxTap';
import '../styles/GameBoard.scss'

const GameBoard = () => {
    const { state } = useContext(AppContext);
    const a = () => {
        console.log(state)
    }

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
            <div onClick={a} className='GameBoard-reset'>Reset</div>
        </div>
    );
};

export default GameBoard;