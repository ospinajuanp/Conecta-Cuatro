import React, { useContext } from 'react';
import AppContext from '../context/AppContext'
import '../styles/BoxTap.scss'

const BoxTap = ({id,boolean}) => {

    const { state, trueCardsState,  togglePlayerPlay } = useContext(AppContext);

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
    
    let auxCantidadP11,auxCantidadP15,auxCantidadP16,auxCantidadP17,p1,p2,auxCantidadP21,auxCantidadP25,auxCantidadP26,auxCantidadP27
    
    const validarWin =()=>{
        auxCantidadP11=0
        auxCantidadP15=0
        auxCantidadP16=0
        auxCantidadP17=0
        auxCantidadP21=0
        auxCantidadP25=0
        auxCantidadP26=0
        auxCantidadP27=0
        p1=[]
        p2=[]
        state.boardState.map(row=>{
            row.map(column=>{
                if(column.player==1) p1.push(column.id)
                if(column.player==2) p2.push(column.id)
            })
        })
        if (p1.length > 3){            
            p1.sort(comparar)
            p2.sort(comparar)
            for (let i = 0;i<p1.length;i++){
                if(p1[i]+1==p1[i+1]){
                    auxCantidadP11+=1
                    if (auxCantidadP11==3) console.log(`Ya son 4 seguidas o mas del p15 4`)
                }else{
                    auxCantidadP11=0
                }
                if (p1.includes(p1[i]+5) && p1.includes(p1[i]+10) && p1.includes(p1[i]+15) && p1[i]!=1 && p1[i]!=2 && p1[i]!=3 && p1[i]!=7 && p1[i]!=8 && p1[i]!=9 && p1[i]!=13 && p1[i]!=14 && p1[i]!=15){
                    console.log(`Ya son 4 seguidas o mas del p15 4`)
                }else{
                    auxCantidadP15=0
                }
                if (p1.includes(p1[i]+6) && p1.includes(p1[i]+12) && p1.includes(p1[i]+18) ){
                    console.log(`Ya son 4 seguidas o mas del p15 4`)
                }else{
                    auxCantidadP16=0
                }
                if (p1.includes(p1[i]+7) && p1.includes(p1[i]+14) && p1.includes(p1[i]+21) && p1[i]!=4 && p1[i]!=5 && p1[i]!=6 && p1[i]!=10 && p1[i]!=11 && p1[i]!=12 && p1[i]!=16 && p1[i]!=17 && p1[i]!=18){
                    console.log(`Ya son 4 seguidas o mas del p15 4`)
                }else{
                    auxCantidadP17=0
                }

                if(p2[i]+1==p2[i+1]){
                    auxCantidadP21+=1
                    console.log(auxCantidadP21)
                    if (auxCantidadP21==3) console.log(`Ya son 4 seguidas o mas del p25 4`)
                }else{
                    auxCantidadP21=0
                }
                if (p2.includes(p2[i]+5) && p2.includes(p2[i]+10) && p2.includes(p2[i]+15) && (p2[i]%3)==0){
                    console.log(`Ya son 4 seguidas o mas del p25 4`)
                }else{
                    auxCantidadP25=0
                }
                if (p2.includes(p2[i]+6) && p2.includes(p2[i]+12) && p2.includes(p2[i]+18) ){
                    console.log(`Ya son 4 seguidas o mas del p25 4`)
                }else{
                    auxCantidadP26=0
                }
                if (p2.includes(p2[i]+7) && p2.includes(p2[i]+14) && p2.includes(p2[i]+21) && p2[i]!=4 && p2[i]!=5 && p2[i]!=6 && p2[i]!=10 && p2[i]!=11 && p2[i]!=12 && p2[i]!=16 && p2[i]!=17 && p2[i]!=18){
                    console.log(`Ya son 4 seguidas o mas del p25 4`)
                }else{
                    auxCantidadP27=0
                }
            }
        }
    }
    return (
        <div className='BoxTap' onClick={x}>
            <div id={id} className="BoxTap__Inside">
            {id}
            </div>
        </div>
    );
};

export default BoxTap;