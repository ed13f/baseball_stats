import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';
import { playerAtBats, onBasePercentage, battingAverage, runsBattedIn } from '../../lib/player-stats';


class PlayerCard extends PureComponent {

	static propTypes = { player: PropTypes.object.isRequired }

	render(){

	  	const { player } = this.props;

		if (!player.id) { return <div /> }

		return (
		    <article className="player">
			    <Consumer>
	    			{ context => (
		    			<div key>
		    				<header>
			    				<h2 className="player-name" ><span className="jersey-number">#{ player.jerseyNumber }</span> { player.firstName + ' ' + player.lastName }</h2>
			    				<div className="player-details"><span className="position">{ player.position }</span> | <span className="position">Age: { player.age }</span></div>
			    				{ context.viewType !== "team" ? <button className={ context.viewType === "player" && context.playerInFocus === player ? "active" : "" } onClick={() => { context.action.handlePlayerInFocus(player) }}>Stats</button>: null }
			    			</header>
			    			<div className="row display-flex">
			    				<div className="flex-1">
			    					BA: { battingAverage(player) }
			    				</div>
			    				<div className="flex-1">
			    					AB's: { playerAtBats(player).length }
			    				</div>
			    				<div className="flex-1">
			    					RBI: { runsBattedIn(player) }
			    				</div>
			    				<div className="flex-1">
			    					OBP: { onBasePercentage(player) }
			    				</div>
			    			</div>
		    			</div>
	    			)}
		    	</Consumer>
		    </article>
		);
	}
}

 
export default PlayerCard