import React, { PureComponent } from 'react';
import { playerAtBats, playerHits, onBasePercentage, battingAverage, runsBattedIn, totalHitsByType } from '../../lib/player-stats';


class PlayerSidebarStats extends PureComponent {

	findPlayer = (props) =>{
		let players = props.players
		let atBatInFocus = props.atBatInFocus
		let player = players.find(player => player.id === atBatInFocus.playerId)
		return player
	}

	render(){

		if (!this.props.atBatInFocus.id) { return <div /> }

		return (
		    <article className="player-sidebar-stats">
		    	<h2>Player Stats</h2>
    			<div>
	    			<div className="row display-flex">
	    				<div className="stat flex-1">
	    					<span className="header">AVG:</span> <span>{ battingAverage(this.findPlayer(this.props)) }</span>
	    				</div>
	    				<div className="stat flex-1">
	    					<span className="header">OBP:</span> <span>{ onBasePercentage(this.findPlayer(this.props)) }</span>
	    				</div>
	    			</div>
	    			<div className="row display-flex">
	    				<div className="stat flex-1">
	    					<span className="header">AB's:</span> <span>{ playerAtBats(this.findPlayer(this.props)).length }</span>
	    				</div>
	    				<div className="stat flex-1">
	    					<span className="header">Hits:</span> <span>{ playerHits(this.findPlayer(this.props)).length }</span>
	    				</div>
	    			</div>
	    			<div className="row display-flex">
	    				<div className="stat flex-1">
	    					<span className="header">1B:</span> <span>{ totalHitsByType(this.findPlayer(this.props), "1B") }</span>
	    				</div>
	    				<div className="stat flex-1">
	    					<span className="header">2B:</span> <span>{ totalHitsByType(this.findPlayer(this.props), "2B") }</span>
	    				</div>
	    			</div>
	    			<div className="row display-flex">
	    				<div className="stat flex-1">
	    					<span className="header">3B:</span> <span>{ totalHitsByType(this.findPlayer(this.props), "3B") }</span>
	    				</div>
	    				<div className="stat flex-1">
	    					<span className="header">HR:</span> <span>{ totalHitsByType(this.findPlayer(this.props), "HR") }</span>
	    				</div>
	    			</div>
	    			<div className="row display-flex">
	    				<div className="stat flex-1">
	    					<span className="header">K:</span> <span>{ totalHitsByType(this.findPlayer(this.props), "K") }</span>
	    				</div>
	    				<div className="stat flex-1">
	    					<span className="header">BB:</span> <span>{ totalHitsByType(this.findPlayer(this.props), "BB") }</span>
	    				</div>
	    			</div>
	    			<div className="row display-flex">
	    				<div className="stat flex-1">
	    					<span className="header">RBI:</span> <span>{ runsBattedIn(this.findPlayer(this.props)) }</span>
	    				</div>
	    				<div className="stat flex-1">
	    					<span className="header">E:</span> <span>{ totalHitsByType(this.findPlayer(this.props), "E") }</span>
	    				</div>
	    			</div>
    			</div>
		    </article>
		);
	}
}

  
export default PlayerSidebarStats