import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';
import { playerAtBats, playersAtBatsMulti, playerHits, playerHitsMulti, onBasePercentage, battingAverage, runsBattedIn, totalHitsByType } from '../../lib/player-stats';



class PlayerCard extends PureComponent {

	static propTypes = {
		// firstName: PropTypes.string,
		// lastName: PropTypes.string,
		// jerseyNumber: PropTypes.number,
		// age: PropTypes.number,
		// position: PropTypes.string,
		// id: PropTypes.number
	}


	test = (player) =>{
		console.log("gooooooo")
		return "hiiii"
	}

	render(){
	  	const {
			player,
			atBats,
			handlePlayerInFocus
		} = this.props;



		if (!this.props.player.id) {
            return <div />
        }

		return (
			
			    <article className="player">
			    <Consumer>
	    				{ context => (
	    			<div key>
	    				<header>
		    				<h2 className="player-name" ><span className="jersey-number">#{ player.jerseyNumber }</span> { player.firstName + ' ' + player.lastName }</h2>
		    				<div className="player-details"><span className="position">{ player.position }</span> | <span className="position">Age: { player.age }</span></div>
		    				<button onClick={() => { context.action.handlePlayerInFocus(player) }}>View Player Stats</button>
		    			</header>
		    			<div className="row display-flex">
		    				<div className="flex-1">
		    					OBP: { onBasePercentage(player) }
		    				</div>
		    				<div className="flex-1">
		    					AVG: { battingAverage(player) }
		    				</div>
		    				<div className="flex-1">
		    					RBI: { runsBattedIn(player) }
		    				</div>
		    				<div className="flex-1">
		    					Hits: { playerHits(player).length }
		    				</div>
		    			</div>
		    			<div className="additional-stats">
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
			    					AB's: { playerAtBats(player).length }
			    				</div>
			    				<div className="flex-1">
			    					K: { totalHitsByType(player, "K") }
			    				</div>
			    				<div className="flex-1">
			    					BB: { totalHitsByType(player, "BB") }
			    				</div>
			    				<div className="flex-1">
			    					E: { totalHitsByType(player, "E") }
			    				</div>
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