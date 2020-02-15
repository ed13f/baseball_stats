import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import PlayerCard from './PlayerCard'
// import AddPlayerFor from './AddPlayerForm';
import { Consumer } from '../Context';



class PlayerList extends PureComponent {

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
	    				
						{context.players.map( (player, index) =>
		              		<PlayerCard 
		              		player={player}
		              		handlePlayerInFocus={player}
				            key={player.id.toString()} 
				            index={index}        
				          />
				        )}
					</div>
	    		)}
	    	</Consumer>
		);
	}

}

  

export default PlayerList