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
            
            {state.boardState.map(row=>(
                    row.map(column=>(
                            <BoxTap id={column.id} boolean={column.value}/>
                            )
                        )
                    )
                )
            }
            <div>{state.amountWinPlayerOne}</div>
            <div>{state.amountWinPlayerTwo}</div>
            <div onClick={a}>as</div>
        </div>
    );
};

export default GameBoard;