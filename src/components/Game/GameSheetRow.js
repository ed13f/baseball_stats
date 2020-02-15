import React, { PureComponent } from 'react';
// import BaseballField from '../layout/BaseballField';
import GameSquare from './GameSquare';

// import PropTypes from 'prop-types';
// import { Consumer } from '../Context';



class GameSheetRow extends PureComponent {

	static propTypes = {
		// first_name: PropTypes.string,
		// last_name: PropTypes.string,
		// id: PropTypes.number.isRequired,
	}

	getAtBatsIDs = () =>{
		let atBats = this.props.player.atBats
		let ids = []
		atBats.forEach( (bat) => { ids.push(bat) })
		console.log(ids)
		return ids.length
	}

	displayAtBats = () => {
		let inning = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
		let atBats = this.props.player.atBats
		let gameId = this.props.gameInFocus.id
		atBats.forEach( function(bat, index) { 
			// if( index == 0 ){ inning[bat.inningNumber - 1] = bat }
			if(bat.gameId === gameId ){ inning[bat.inningNumber - 1] = bat }
		})
		return inning

	}




	render(){
  
	  	const {
			// id,
			player,
			// key,
			gameInFocus,
		} = this.props;

		if (!this.props.player.id) {
            return <div />
        }

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
							// key={index}
						 />
					</div>
				))}
			</div>
		);
	}

}

  

export default GameSheetRow