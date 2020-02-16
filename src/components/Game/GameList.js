import React, { PureComponent } from 'react';
import GameCard from './GameCard';
import { Consumer } from '../Context';


class GameList extends PureComponent {

	render(){

		return (
			<Consumer>
	    		{ context => (
	    			<div className="players-list">
						{context.teamInFocus.games.map( (game) =>
		              		<GameCard 
			              		gameInFocus={game}
					            key={game.id.toString()}
				          	/>
				        )}
					</div>
	    		)}
	    	</Consumer>
		);
	}
}


export default GameList