import React, { useContext } from 'react';
import AppContext from '../context/AppContext'
import '../styles/BoxTap.scss'

const BoxTap = ({id,boolean}) => {

    const { state, trueCardsState, falseCardsState, togglePlayerPlay } = useContext(AppContext);

    const x = ()=>{
        let pintar, i=0,j=0,play
        pintar = state.playerPlay==1?'activeSelectOne':'activeSelectTwo'
        state.boardState.map(row=>{
                j=0;
                row.map(column=>{
                    if(column.id==id){
                        if (column.player==null){
                            if(!boolean) {
                                trueCardsState(i,j,state.playerPlay)
                                console.log(state)
                                togglePlayerPlay()
                            }
                        }
                        // falseCardsState(i,j)
                    }
                    j++ 
                })
                i++
            }
        )
        !boolean ? document.getElementById(id).classList.add(pintar):document.getElementById(id).classList.remove(pintar)
        
        
    }
    return (
        <div className='BoxTap' onClick={x}>
            <div id={id} className="BoxTap__Inside">
            
            </div>
        </div>
    );
};

export default BoxTap;