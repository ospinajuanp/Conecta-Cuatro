import React, { useContext } from 'react';
import AppContexts from '../context/AppContext'

const ComponentName = ({ result }) => {

    const { addToNameState } = useContext(AppContexts); // example addState

	const handleClick = (resultItem) => { // example addState
		addToNameState(resultItem)
	}

    return (
        <div>
            <img src={result.img[0]} alt={result.title} />
            <button onClick={ () => handleClick(result)}></button> // example addState
        </div>
    );
};

export default ComponentName;