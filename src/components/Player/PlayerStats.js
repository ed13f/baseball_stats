import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { playerAtBats, playerHits, onBasePercentage, battingAverage, runsBattedIn, totalHitsByType } from '../../lib/player-stats';


class PlayerStats extends PureComponent {

	static propTypes = { player: PropTypes.object.isRequired }

	render(){

	  	const { player } = this.props;

		if (!player.id) { return <div /> }

		return (
		    <article className="player-stats">
    			<div>
    				<header>
	    				<h2 className="player-name" ><span className="jersey-number">#{ player.jerseyNumber }</span> { player.firstName + ' ' + player.lastName }</h2>
	    				<div className="player-details"><span className="position">{ player.position }</span> | <span className="position">Age: { player.age }</span></div>
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
	    			<div className="row display-flex">
	    				<div className="flex-1">
	    					1B: { totalHitsByType(player, "1B") }
	    				</div>
	    				<div className="flex-1">
	    					2B: { totalHitsByType(player, "2B") }
	    				</div>
	    				<div className="flex-1">
	    					3B: { totalHitsByType(player, "3B") }
	    				</div>
	    				<div className="flex-1">
	    					HR: { totalHitsByType(player, "HR") }
	    				</div>
	    			</div>
	    			<div className="row display-flex">
	    				<div className="flex-1">
	    					Hits: { playerHits(player).length }
	    				</div>
	    				<div className="flex-1">
	    					BB: { totalHitsByType(player, "BB") }
	    				</div>
	    				<div className="flex-1">
	    					K: { totalHitsByType(player, "K") }
	    				</div>
	    				<div className="flex-1">
	    					E: { totalHitsByType(player, "E") }
	    				</div>
	    			</div>
    			</div>
		    </article>
		);
	}
}


export default PlayerStats