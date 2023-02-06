import React, { useContext } from 'react';
import AppContext from '../context/AppContext'
import GameBoard from '../containers/GameBoard';
import '../styles/Home.scss'

const Home = () => {
	const { state, addToCardsState } = useContext(AppContext);
	
	const mostrar = () => {
		addToCardsState(1,0)
	}
	
	return (
		<div className='Home'>
			<div className='Home-Title'>
				<h1>Connect 4</h1>
			</div>
			<GameBoard/>
		</div>
	);
}

export default Home;
