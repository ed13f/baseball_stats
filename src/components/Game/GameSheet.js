import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GameSheetRow from './GameSheetRow';


class GameSheet extends PureComponent {

	static propTypes = { gameInFocus: PropTypes.object.isRequired }

	getTeamPlayers = (game) =>{
		let teams = game.teams
		let team = teams[0]
		return team.players
	}

	render(){

		const { gameInFocus } = this.props;
		
		if (!gameInFocus.id) { return <div /> }

		return (
			<div>
			<header>
				<h2 className="sheet-title">{gameInFocus.teams[0].name} - { gameInFocus.name }</h2>
			</header>
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