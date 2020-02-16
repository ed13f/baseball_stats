import React, { PureComponent } from 'react';
import GameSquare from './GameSquare';
import PropTypes from 'prop-types';


class GameSheetRow extends PureComponent {

	static propTypes = {
		gameInFocus: PropTypes.object.isRequired,
		player: PropTypes.object.isRequired
	}

	displayAtBats = () => {
		let inning = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
		let atBats = this.props.player.atBats
		let gameId = this.props.gameInFocus.id
		atBats.forEach( function(bat, index) { if(bat.gameId === gameId ){ inning[bat.inningNumber - 1] = bat } })
		return inning
	}

	render(){
  
	  	const { player, gameInFocus } = this.props;

		if (!player.id) { return <div /> }

		return (
			<div className="position one display-flex">
			    <div className="player-info">
			    	<div className="batting-order">{player.id}</div>
			    	<div className="player-name">
			    		<div>{player.firstName + " " + player.lastName}</div> <div className="player-number">#{player.jerseyNumber}</div>
			    	</div>
			    </div>
			    {this.displayAtBats().map( (atBat, index) => (
					<div  key={index} className={ "inning inning-" + (index + 1) }>
						<GameSquare 
							gameInFocus={gameInFocus}
							atBat={atBat}
						 />
					</div>
				))}
			</div>
		);
	}
}


export default GameSheetRow