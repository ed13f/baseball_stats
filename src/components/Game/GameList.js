import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import GameCard from './GameCard';
import { Consumer } from '../Context';



class GameList extends PureComponent {

	// static propTypes = {
		// firstName: PropTypes.string,
		// lastName: PropTypes.string,
		// id: PropTypes.number,
		// index: PropTypes.number,
	// };

	

	// handlePlayerInFocus = ( ) => {
	// 	let games = this.props.teamInFocus.games;
	// 	return "atBats.length"
	// }

	render(){

		// const {
			// firstName,
			// lastName,
			// id,
			// number,
			// position
		// } = this.props;

		return (
			<Consumer>
	    		{ context => (
	    			<div className="players-list">
	    				
						{context.teamInFocus.games.map( (game, index) =>
		              		<GameCard 
		              		gameInFocus={game}
				            key={game.id.toString()} 
				            index={index} 
				          />
				        )}
					</div>
	    		)}
	    	</Consumer>
		);
	}

}

  

export default GameList