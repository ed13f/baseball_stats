import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';
import BallMarker from './BallMarker';
import { playerAtBats, playersAtBatsMulti, playerHits, playerHitsMulti, onBasePercentage, battingAverage, runsBattedIn, totalHitsByType } from '../../lib/player-stats';
import { gameAtBats } from '../../lib/game-stats';



class BaseballField extends PureComponent {

	static propTypes = {
		// id: PropTypes.number.isRequired,
		// index: PropTypes.number,
	}

	totalAtBats = ( ) => {
		let players = this.props.teamInFocus.players;
		let playersAtBats = playersAtBatsMulti(players);
		let playersHits = playerHitsMulti(players);
		// let playerHitsArray = playerHits(players[0]);
		let playerOnBasePercentages = onBasePercentage(players[0]);
		let playerBattingAverage = battingAverage(players[0]);
		let playerRunsBattedIns = runsBattedIn(players[0]);
		let playerTotalHitsByTypes = totalHitsByType(players[0], "CF");
		return playerTotalHitsByTypes.length
	}

	displayAtBats = ( ) => {
		return playerHitsMulti(this.props.TeamPlayers).map((player, index) => <BallMarker key={index} value={player.id} />) 
	}

	render(){

		const {
			teamInFocus,
			id,
			index,
			teamPlayers = this.props.teamInFocus.players,
			player = this.props.playerInFocus,
			teamHits = this.props.teamInFocus.players,
			// TeamHits = playerHitsMulti(this.props.TeamPlayers)
			// playersHits = playerHitsMulti(players)
		} = this.props;

		if (!this.props.teamInFocus.id) {
            return <div />
        }
		return (
			<Consumer>
	    		{ context => (
					<div className="stadium">
					{ context.viewType == "team" ? playersAtBatsMulti(teamPlayers).map( (bat, index) => <BallMarker key={index} value={bat.id} atBat={bat}/>) : null }
					{ context.viewType == "player" ? playerAtBats(player).map( (bat, index) => <BallMarker key={index} value={bat.id} atBat={bat}/>) : null }
					{ context.viewType == "game" ? gameAtBats(context.gameInFocus).map( (bat, index) => <BallMarker key={index} value={bat.id} atBat={bat}/>) : null }
				        <div className="field mowed-grass"></div>
				        <div className="in-field"></div>
				        <div className="in-field-grass mowed-grass"></div>
				        <div className="batting-circle"></div>
				        <div className="first-base base"></div>
				        <div className="second-base base"></div>
				        <div className="thrid-base base"></div>
				        <div className="home-plate"></div>
				        <div className="base-lines"></div>
				        <div className="pitchers-mound"></div>
				        <div className="pitchers-plate"></div>
				        <div className="first-circle half-circle"></div>
				        <div className="second-circle half-circle"></div>
				        <div className="third-circle half-circle"></div>
				        <div className="batters-box-right batters-box"></div>
				        <div className="batters-box-left batters-box"></div>
				        <div className="P dot"></div>
				        <div className="C dot"></div>
				        <div className="one-B dot"></div>
				        <div className="two-B dot"></div>
				        <div className="three-B dot"></div>
				        <div className="SS dot"></div>
				        <div className="LF dot"></div>
				        <div className="CF dot"></div>
				        <div className="RF dot"></div>
				        <div className="line-1 baseline"></div>
				        <div className="line-2 baseline"></div>
				        <div className="line-3 baseline"></div>
				        <div className="line-4 baseline"></div>
				    </div>
				)}
			</Consumer>
		);
	}
}

export default BaseballField