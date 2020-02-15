import React, { PureComponent } from 'react';
import GameSheetRow from './GameSheetRow';

class GameSheet extends PureComponent {

	displayAtBat = ( ) => {
		return "Blue"
	}

	getTeamPlayers = (game) =>{
		let teams = game.teams
		let team = teams[0]
		return team.players
	}

	render(){

		const {
			// id,
			// teamIndex = 0,
			gameInFocus
		} = this.props;
		if (!this.props.gameInFocus.id) {
            return <div />
        }

		return (

			<div>
			<div className="score-book">
				<header className="position one display-flex">
					<div className="player-info">Player</div>
					<div className="inning one">1</div>
					<div className="inning two">2</div>
					<div className="inning three">3</div>
					<div className="inning four">4</div>
					<div className="inning five">5</div>
					<div className="inning six">6</div>
					<div className="inning seven">7</div>
					<div className="inning eight">8</div>
					<div className="inning nine">9</div>
				</header>
				{this.getTeamPlayers(gameInFocus).map( (player, index) => (
					<div key={index} className="position one display-flex">
						<GameSheetRow 
							// key={index}
							player={player}
							gameInFocus={gameInFocus}
						/>
					</div>
				))}
			</div>
			</div>
		);
	}
}

export default GameSheet