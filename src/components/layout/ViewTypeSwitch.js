import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Consumer } from '../Context';



class ViewTypeSwitch extends PureComponent {

	// static propTypes = {
	// 	// firstName: PropTypes.string,
	// }


	// findTeamId = () =>{
	// 	let players = this.props.players
	// 	let atBatInFocus = this.props.atBatInFocus
	// 	let gameInFocus = this.props.gameInFocus
	// 	// debugger
	// 	let player = players.find(player => player.id == atBatInFocus.playerId)
	// 	let gameTeams = gameInFocus.teams
	// 	let awayTeam = gameTeams[0]
	// 	let homeTeam = gameTeams[1]
	// 	let awayTeamPlayers = awayTeam.players
	// 	awayTeamPlayers = awayTeamPlayers.filter(singleplayer => singleplayer.id == player.id);
	// 	if(awayTeamPlayers.length > 0){
	// 		return awayTeam.id 
	// 	} else {
	// 		return homeTeam.id 

	// 	}
	// }

	render(){
	  	// const {
			// player,
			// atBatInFocus,
			// players,
			// gameInFocus,
			// attributeType,
		// } = this.props;

		// if (!this.props.atBatInFocus.id) {
  //           return <div />
  //       }
		return (
		    <Consumer>
	    		{context => (
	    			<div className="view-toggle">
			        <button className={ context.viewType === "team" ? "active" : "" } onClick={() => context.action.setViewType("team")}> Team </button>
			        <button className={ context.viewType === "player" ? "active" : "" } onClick={() => context.action.setViewType("player")}> Player </button>
			        <button className={ context.viewType === "game" || context.viewType === "gameSheet" ? "active" : "" } onClick={() => context.action.setViewType("game")}> Game </button>
			      </div>
	    		)}
	    	</Consumer>
		);
	}

}

  

export default ViewTypeSwitch