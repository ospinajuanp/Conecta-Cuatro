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
        validarWin()
    }
    function comparar ( a, b ){ return a - b; }
    
    let auxCantidadP11,auxCantidadP15,auxCantidadP16,auxCantidadP17,p1,p2,auxCantidadP21,auxCantidadP25,auxCantidadP26,auxCantidadP27
    
    const validarWin =()=>{
        auxCantidadP11=0
        auxCantidadP15=0
        auxCantidadP16=0
        auxCantidadP17=0
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
            console.log(p1,p2)
            for (let i=0;i<(p1.length-1);i++){
                if (p1.includes(p1[i]+1)){
                    auxCantidadP11+=1
                    if (auxCantidadP11==3) console.log(`Ya son 4 seguidas o mas del p11 ${auxCantidadP11}`)
                    auxCantidadP15=0
                    auxCantidadP16=0
                    auxCantidadP17=0
                }
                if (p1.includes(p1[i]+5)){
                    auxCantidadP15+=1
                    if (auxCantidadP15==3) console.log(`Ya son 4 seguidas o mas del p15 ${auxCantidadP15}`)
                    auxCantidadP11=0
                    auxCantidadP16=0
                    auxCantidadP17=0
                }
                if (p1.includes(p1[i]+6)){
                    auxCantidadP16+=1
                    if (auxCantidadP16==3) console.log(`Ya son 4 seguidas o mas del p16 ${auxCantidadP16}`)
                    auxCantidadP11=0
                    auxCantidadP15=0
                    auxCantidadP17=0
                }
                if (p1.includes(p1[i]+7)){
                    auxCantidadP17+=1
                    if (auxCantidadP17==3) console.log(`Ya son 4 seguidas o mas del p17 ${auxCantidadP17}`)
                    auxCantidadP11=0
                    auxCantidadP15=0
                    auxCantidadP16=0
                }
                
                if (p2.includes(p2[i]+1)){
                    auxCantidadP21+=1
                    if (auxCantidadP21==3) console.log(`Ya son 4 seguidas o mas del p11 ${auxCantidadP21}`)
                    auxCantidadP25=0
                    auxCantidadP26=0
                    auxCantidadP27=0
                }
                
                if (p2.includes(p2[i]+5)){
                    auxCantidadP25+=1
                    if (auxCantidadP25==3) console.log(`Ya son 4 seguidas o mas del p25 ${auxCantidadP25}`)
                    auxCantidadP21=0
                    auxCantidadP26=0
                    auxCantidadP27=0
                }
                if (p2.includes(p2[i]+6)){
                    auxCantidadP26+=1
                    if (auxCantidadP26==3) console.log(`Ya son 4 seguidas o mas del p26 ${auxCantidadP26}`)
                    auxCantidadP21=0
                    auxCantidadP25=0
                    auxCantidadP27=0
                }
                if (p2.includes(p2[i]+7)){
                    auxCantidadP27+=1
                    if (auxCantidadP27==3) console.log(`Ya son 4 seguidas o mas del p27 ${auxCantidadP27}`)
                    auxCantidadP21=0
                    auxCantidadP25=0
                    auxCantidadP26=0
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