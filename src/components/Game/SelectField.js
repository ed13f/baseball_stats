import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Consumer } from '../Context';



class SlectField extends PureComponent {

	// static propTypes = {
		// firstName: PropTypes.string,
	// }

	findTeamId = () =>{
		let players = this.props.players
		let atBatInFocus = this.props.atBatInFocus
		let gameInFocus = this.props.gameInFocus
		// debugger
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
	  	const {
			// player,
			atBatInFocus,
			attributeType,
			// players,
			// gameInFocus,
			// attributeType,
			// selectValue = atBatInFocus.baseValue
		} = this.props;


		if (!this.props.atBatInFocus.id) {
            return <div />
        }
		return (
		    <Consumer>
	    		{context => (
	    			<div>
	    				{attributeType === "baseValue" ? (
	    					<select id="lang" onChange={(newValue) => context.action.selectChange(atBatInFocus.playerId, this.findTeamId(), newValue.target.value, attributeType )} value={atBatInFocus.baseValue}>
					        	<option value="KK">KK</option>
			                    <option value="BB">BB</option>
			                    <option value="ER">ER</option>
			                    <option value="1B">1B</option>
			                    <option value="2B">2B</option>
			                    <option value="3B">3B</option>
			                    <option value="HR">HR</option>
			                    <option value="F.O.">Fly</option>
		                    	<option value="G.O.">Gr</option>	
		                    </select>
				      	) : (
				      	<select id="lang" onChange={(newValue) => context.action.selectChange(atBatInFocus.playerId, this.findTeamId(), newValue.target.value, attributeType )} value={atBatInFocus.fieldPosition}>	
				        	<option value="P">P</option>
		                    <option value="C">C</option>
		                    <option value="1B">1B</option>
		                    <option value="1B">2B</option>
		                    <option value="3B">3B</option>
		                    <option value="SS">SS</option>
		                    <option value="LF">LF</option>
		                    <option value="CF">CF</option>
		                    <option value="RF">RF</option>
		                </select>	
				      	)}

	               </div>
	    		)}
	    	</Consumer>
		);
	}

}

  

export default SlectField