import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import Counter from './Counter';
import SelectField from './SelectField';
// import { playerAtBats, playersAtBatsMulti, playerHits, playerHitsMulti, onBasePercentage, battingAverage, runsBattedIn, totalHitsByType } from '../../lib/player-stats';


class AtBatCard extends PureComponent {

	// static propTypes = {
		// firstName: PropTypes.string,
		// lastName: PropTypes.string,
		// jerseyNumber: PropTypes.number,
		// age: PropTypes.number,
		// position: PropTypes.string,
		// id: PropTypes.number
	// }

	findPlayer = () =>{
		let players = this.props.players
		let atBatInFocus = this.props.atBatInFocus
		// debugger
		let player = players.find(player => player.id === atBatInFocus.playerId)
		return player
	}


	render(){
		// {console.log("hhh")}
	  	const {
			// player,
			atBatInFocus,
			players,
			gameInFocus
		} = this.props;

		if (!this.props.atBatInFocus.id) {
            return <div />
        }
		return (
			
			<article className="at-bat-card">
				<header>
				<h2 className="player-name">{this.findPlayer().firstName} {this.findPlayer().lastName}</h2>
		    	<div className="player-name">#{this.findPlayer().jerseyNumber} | {this.findPlayer().position}</div>
				</header>
		    	<div className="row">
			    	<div className="single column">
			    		<div>
			    			<div className="h3">Pitch Count:</div> 
			    			<div className="description">(B-S)</div>
			    		</div>
			    		<div className="counter-wrapper">
				    		<Counter 
				    			atBatInFocus={atBatInFocus}
				    			gameInFocus={gameInFocus}
				    			players={players}
				    			attributeType={"balls"}
			    			/>
			    			<div className="count display-flex">
				    			<div className="value">{atBatInFocus.balls}</div>
				    			<div className="dash">-</div>
				    			<div className="value">{atBatInFocus.strikes}</div>
			    			</div>
			    			<Counter 
				    			atBatInFocus={atBatInFocus}
				    			gameInFocus={gameInFocus}
				    			players={players}
				    			attributeType={"strikes"}
				    		/>
			    			

			    		</div>
		    			
		    		</div>	
			    </div>	
			    <div className="row">
			    	<div className="column">
			    		<div className="h3">RBI's: {atBatInFocus.runsBattedIn}</div>
			    		<Counter 
			    			atBatInFocus={atBatInFocus}
			    			gameInFocus={gameInFocus}
			    			players={players}
			    			attributeType={"runsBattedIn"}
		    			/>
		    		</div>
		    		<div className="column">
			    		<div className="h3">Base: {atBatInFocus.basePosition}</div>
			    		<Counter 
			    			atBatInFocus={atBatInFocus}
			    			gameInFocus={gameInFocus}
			    			players={players}
			    			attributeType={"basePosition"}
		    			/>
		    		</div>
			    </div>
			    <div className="row">
			    	<div className="column">
			    	<span className="select-header">Position:</span>
			    		<SelectField 
		    				atBatInFocus={atBatInFocus}
			    			gameInFocus={gameInFocus}
			    			players={players}
			    			attributeType={"fieldPosition"}
		    			/>
		    		</div>
		    		<div className="column">
			    		<span>Hit Value:</span>
			    		<SelectField 
		    				atBatInFocus={atBatInFocus}
			    			gameInFocus={gameInFocus}
			    			players={players}
			    			attributeType={"baseValue"}
		    			/>
		    		</div>
			    </div>
			</article>
		);
	}

}

  

export default AtBatCard