import { useState } from "react";

const initialState = {
    playerPlay:1,
	amountWinPlayerOne:0,
	amountWinPlayerTwo:0,
	boardState:[
		[// row
			{ id: 1, value: false, player:null },// column
			{ id: 2, value: false, player:null },
			{ id: 3, value: false, player:null },
			{ id: 4, value: false, player:null },
			{ id: 5, value: false, player:null },
			{ id: 6, value: false, player:null }
		],
		[// row
			{ id: 7, value: false, player:null },// column
			{ id: 8, value: false, player:null },
			{ id: 9, value: false, player:null },
			{ id: 10, value: false, player:null },
			{ id: 11, value: false, player:null },
			{ id: 12, value: false, player:null }
		],
		[// row
			{ id: 13, value: false, player:null },// column
			{ id: 14, value: false, player:null },
			{ id: 15, value: false, player:null },
			{ id: 16, value: false, player:null },
			{ id: 17, value: false, player:null },
			{ id: 18, value: false, player:null }
		],
		[// row
			{ id: 19, value: false, player:null },// column
			{ id: 20, value: false, player:null },
			{ id: 21, value: false, player:null },
			{ id: 22, value: false, player:null },
			{ id: 23, value: false, player:null },
			{ id: 24, value: false, player:null }
		],
		[// row
			{ id: 25, value: false, player:null },// column
			{ id: 26, value: false, player:null },
			{ id: 27, value: false, player:null },
			{ id: 28, value: false, player:null },
			{ id: 29, value: false, player:null },
			{ id: 30, value: false, player:null }
		],
		[// row
			{ id: 31, value: false, player:null },// column
			{ id: 32, value: false, player:null },
			{ id: 33, value: false, player:null },
			{ id: 34, value: false, player:null },
			{ id: 35, value: false, player:null },
			{ id: 36, value: false, player:null }
		],
		[// row
			{ id: 37, value: false, player:null },// column
			{ id: 38, value: false, player:null },
			{ id: 39, value: false, player:null },
			{ id: 40, value: false, player:null },
			{ id: 41, value: false, player:null },
			{ id: 42, value: false, player:null }
		],

	]
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const trueCardsState = (positionX,positionY,player) => {
		state.boardState[positionX][positionY].value=true
		state.boardState[positionX][positionY].player=player
		setState({
			...state,
			boardState:state.boardState
		});
	};
	const falseCardsState = (positionX,positionY) => {
		state.boardState[positionX][positionY].value=false
		state.boardState[positionX][positionY].player=null
		setState({
			...state,
			boardState:state.boardState
		});
	};
	const togglePlayerPlay = () => {
		state.playerPlay = state.playerPlay==1 ? 2:1
		setState({
			...state,
			playerPlay:state.playerPlay
		});
	};

	return {
		state,
		trueCardsState,
		falseCardsState,
		togglePlayerPlay
	}
}

export default useInitialState;