import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const Counter = ({ index, score }) => {


    return (
    	<Consumer>
    		{context => (
    			<div className="counter">
		        <button className="counter-action decrement" onClick={() => context.action.changeScore(index, -1)}> - </button>
		        <span className="counter-score">{ score }</span>
		        <button className="counter-action increment" onClick={() => context.action.changeScore(index, +1)}> + </button>
		      </div>
    		)}
    	</Consumer>
    );
}

// Validation of Props
Counter.propTypes = {
	index: PropTypes.number, 
	score: PropTypes.number,
	// changeScore: PropTypes.func
};

export default Counter