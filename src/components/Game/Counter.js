import React, { PureComponent } from 'react';
import { Consumer } from '../Context';


class Counter extends PureComponent {

	findTeamId = () =>{
		let players = this.props.players
		let atBatInFocus = this.props.atBatInFocus
		let gameInFocus = this.props.gameInFocus
		let player = players.find(player => player.id === atBatInFocus.playerId)
		let gameTeams = gameInFocus.teams
		let awayTeam = gameTeams[0]
		let homeTeam = gameTeams[1]
		let awayTeamPlayers = awayTeam.players
		awayTeamPlayers = awayTeamPlayers.filter(singleplayer => singleplayer.id === player.id);
		if(awayTeamPlayers.length > 0){
			return awayTeam.id 
		} else {
			return homeTeam.id 
		}
	}

	render(){

	  	const { atBatInFocus, attributeType } = this.props;

		if (!atBatInFocus.id) { return <div /> }

		return (
		    <Consumer>
	    		{context => (
	    			<div className="counter">
			        <button className="counter-action decrement" onClick={() => context.action.handleIncrement(atBatInFocus.playerId, this.findTeamId(), 1, attributeType)}> + </button>
			        <button className="counter-action increment" onClick={() => context.action.handleIncrement(atBatInFocus.playerId, this.findTeamId(), -1, attributeType)}> - </button>
			      </div>
	    		)}
	    	</Consumer>
		);
	}
}


export default Counter