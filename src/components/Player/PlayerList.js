import React, { PureComponent } from 'react';
import PlayerCard from './PlayerCard'
import { Consumer } from '../Context';


class PlayerList extends PureComponent {

	render(){

		return (
			<Consumer>
	    		{ context => (
	    			<div className="players-list">
						{context.players.map( (player, index) =>
		              		<PlayerCard 
			              		player={player}
					            key={player.id.toString()}       
					        />
				        )}
					</div>
	    		)}
	    	</Consumer>
		);
	}
}

  
export default PlayerList