import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext'
import '../styles/BoxTap.scss'

const BoxTap = ({id,boolean}) => {

    const { state, trueCardsState,  togglePlayerPlay, sumAmountWinPlayer, resetBoard } = useContext(AppContext);

    const x = ()=>{
        let pintar, i=0,j=0
        pintar = state.playerPlay==1?'activeSelectOne':'activeSelectTwo'
        state.boardState.map(row=>{
                j=0;
                row.map(column=>{
                    if(column.id==id){
                        if (column.player==null){
                            if(!boolean) {
                                trueCardsState(i,j,state.playerPlay)
                                togglePlayerPlay()
                            }
                        }
                    }
                    j++ 
                })
                i++
            }
        )
        !boolean ? document.getElementById(id).classList.add(pintar):document.getElementById(id).classList.remove(pintar)
        validarWin()
    }

    function comparar ( a, b ){ return a - b; }
    
    let auxCantidadP11,auxCantidadP15,auxCantidadP16,auxCantidadP17,p1,p2,auxCantidadP21,auxCantidadP25,auxCantidadP26,auxCantidadP27,boolWin
    
    const cicloValidar = (playerArray,player)=>{
        let finish = false
        for (let i = 0;i<playerArray.length;i++){
            if(playerArray[i]+1==playerArray[i+1]){
                auxCantidadP11+=1
                if (auxCantidadP11==3) {
                    finish=true
                    sumAmountWinPlayer(player)
                }
            }else{
                auxCantidadP11=0
            }
            if (playerArray.includes(playerArray[i]+5) && playerArray.includes(playerArray[i]+10) && playerArray.includes(playerArray[i]+15) && playerArray[i]!=1 && playerArray[i]!=2 && playerArray[i]!=3 && playerArray[i]!=7 && playerArray[i]!=8 && playerArray[i]!=9 && playerArray[i]!=13 && playerArray[i]!=14 && playerArray[i]!=15){
                finish=true
                sumAmountWinPlayer(player)
            }else{
                auxCantidadP15=0
            }
            if (playerArray.includes(playerArray[i]+6) && playerArray.includes(playerArray[i]+12) && playerArray.includes(playerArray[i]+18) ){
                finish=true
                sumAmountWinPlayer(player)
            }else{
                auxCantidadP16=0
            }
            if (playerArray.includes(playerArray[i]+7) && playerArray.includes(playerArray[i]+14) && playerArray.includes(playerArray[i]+21) && playerArray[i]!=4 && playerArray[i]!=5 && playerArray[i]!=6 && playerArray[i]!=10 && playerArray[i]!=11 && playerArray[i]!=12 && playerArray[i]!=16 && playerArray[i]!=17 && playerArray[i]!=18){
                finish=true
                sumAmountWinPlayer(player)
            }else{
                auxCantidadP17=0
            }
        }
        return finish
    }

    const validarWin =()=>{
        auxCantidadP11=0,auxCantidadP15=0,auxCantidadP16=0,auxCantidadP17=0,auxCantidadP21=0,auxCantidadP25=0,auxCantidadP26=0,auxCantidadP27=0,p1=[],p2=[]
        state.boardState.map(row=>{
            row.map(column=>{
                if(column.player==1) p1.push(column.id)
                if(column.player==2) p2.push(column.id)
            })
        })
        if (p1.length > 3 || p2.length > 3){            
            p1.sort(comparar)
            p2.sort(comparar)
            boolWin = cicloValidar(p1,1) || cicloValidar(p2,2) 

        }
        if (boolWin) {
            resetBoard()
        }
    }

    useEffect(()=>{
        state.boardState.map(row=>{
            row.map(column=>{
                if(column.id==id){
                    if (column.player==null){
                        document.getElementById(id).classList.remove('activeSelectOne')
                        document.getElementById(id).classList.remove('activeSelectTwo')
                    }
                }
            })
        }
    )})

    return (
        <div className='BoxTap' onClick={x}>
            <div id={id} className="BoxTap__Inside">
            </div>
        </div>
    );
};

export default BoxTap;