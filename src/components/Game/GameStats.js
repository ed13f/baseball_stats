import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';
import { gameAtBats, gameAtBatsByTeam, inningRuns, inningRunsByTeam, gameRunsByTeam, gameHitsByTeam, gameErrorsByTeam } from '../../lib/game-stats';
import { isGameWinner } from '../../lib/team-stats';



class GameStats extends PureComponent {

	static propTypes = {
		// firstName: PropTypes.string,
		// lastName: PropTypes.string,
		// jerseyNumber: PropTypes.number,
		// age: PropTypes.number,
		// position: PropTypes.string,
		// id: PropTypes.number
	}

	render(){
	  	const {
			player,
			atBats,
			handlePlayerInFocus
		} = this.props;

		if (!this.props.gameInFocus.id) {
            return <div />
        }
		return (
			
			    <article className="game-stats">
			    <Consumer>
	    				{ context => (
	    			<div key>
	    				<header>
		    				<h2 className="game-matchup" >{ context.gameInFocus.teams[0].name } vs <span className="">{ context.gameInFocus.teams[1].name }</span></h2>
		    				<div className="game-winner">( { isGameWinner(context.gameInFocus, context.gameInFocus.teams[0])? "W": "L" } - { isGameWinner(context.gameInFocus, context.gameInFocus.teams[1])? "W": "L" } )</div>
		    			</header>
		    			<div className="score-card">
			    			<div className="row display-flex header">
			    				<div className="flex-2">
			    					Final
			    				</div>
			    				<div className="flex-1">
			    					1 
			    				</div>
			    				<div className="flex-1">
			    					2
			    				</div>
			    				<div className="flex-1">
			    					3
			    				</div>
			    				<div className="flex-1">
			    					4
			    				</div>
			    				<div className="flex-1">
			    					5
			    				</div>
			    				<div className="flex-1">
			    					6
			    				</div>
			    				<div className="flex-1">
			    					7
			    				</div>
			    				<div className="flex-1">
			    					8
			    				</div>
			    				<div className="flex-1">
			    					9
			    				</div>
			    				<div className="flex-1">
			    					10
			    				</div>
			    				<div className="flex-1">
			    					R
			    				</div>
			    				<div className="flex-1">
			    					H
			    				</div>
			    				<div className="flex-1">
			    					E
			    				</div>
			    			</div>
							<div className="row display-flex">
			    				<div className="flex-2">
			    					{context.gameInFocus.teams[0].name}
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[0], context.gameInFocus.teams[0]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[1], context.gameInFocus.teams[0]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[2], context.gameInFocus.teams[0]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[3], context.gameInFocus.teams[0]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[4], context.gameInFocus.teams[0]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[5], context.gameInFocus.teams[0]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[6], context.gameInFocus.teams[0]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[7], context.gameInFocus.teams[0]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[8], context.gameInFocus.teams[0]).length }
			    				</div>
			    				<div className="flex-1">
			    					-
			    				</div>
			    				<div className="flex-1">
			    					{gameRunsByTeam(context.gameInFocus, context.gameInFocus.teams[0]).length}
			    				</div>
			    				<div className="flex-1">
			    					{gameHitsByTeam(context.gameInFocus, context.gameInFocus.teams[0]).length}
			    				</div>
			    				<div className="flex-1">
			    					{gameErrorsByTeam(context.gameInFocus, context.gameInFocus.teams[0]).length}
			    				</div>
			    			</div>
			    			<div className="row display-flex">
			    				<div className="flex-2">
			    					{context.gameInFocus.teams[1].name}
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[0], context.gameInFocus.teams[1]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[1], context.gameInFocus.teams[1]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[2], context.gameInFocus.teams[1]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[3], context.gameInFocus.teams[1]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[4], context.gameInFocus.teams[1]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[5], context.gameInFocus.teams[1]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[6], context.gameInFocus.teams[1]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[7], context.gameInFocus.teams[1]).length }
			    				</div>
			    				<div className="flex-1">
			    					{ inningRunsByTeam(context.gameInFocus.innings[8], context.gameInFocus.teams[1]).length }
			    				</div>
			    				<div className="flex-1">
			    					-
			    				</div>
			    				<div className="flex-1">
			    					{gameRunsByTeam(context.gameInFocus, context.gameInFocus.teams[1]).length}
			    				</div>
			    				<div className="flex-1">
			    					{gameHitsByTeam(context.gameInFocus, context.gameInFocus.teams[1]).length}
			    				</div>
			    				<div className="flex-1">
			    					{gameErrorsByTeam(context.gameInFocus, context.gameInFocus.teams[1]).length}
			    				</div>
			    			</div>
			    		</div>	
	    			</div>
	    			)}
			    	</Consumer>
			    </article>
		);
	}

}

  

export default GameStats