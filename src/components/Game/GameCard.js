import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';
import { gameAtBats, gameAtBatsByTeam, inningRuns, inningRunsByTeam, gameRunsByTeam, gameHitsByTeam, gameErrorsByTeam } from '../../lib/game-stats';



class GameCard extends PureComponent {

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
			gameInFocus,
			handleGIF
		} = this.props;

		if (!gameInFocus.id) {
            return <div />
        }
		return (
			<Consumer>
	    		{ context => (
			    <article className="game-card">
	    			<div key>
	    				<header className="display-flex">
		    				<h2 className="" >{ gameInFocus.name }<br/> { gameInFocus.teams[0].name } vs <span className="">{ gameInFocus.teams[1].name }</span></h2>
		    				<button onClick={() => { context.action.handleGameInFocus(gameInFocus) }}>View Game Stats</button>
		    			</header>
		    			<div className="score-card">
			    			<div className="row display-flex header">
			    				<div className="flex-2">
			    					Final
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
			    					{gameInFocus.teams[0].name}
			    				</div>
			    				<div className="flex-1">
			    					{gameRunsByTeam(gameInFocus, gameInFocus.teams[0]).length}
			    				</div>
			    				<div className="flex-1">
			    					{gameHitsByTeam(gameInFocus, gameInFocus.teams[0]).length}
			    				</div>
			    				<div className="flex-1">
			    					{gameErrorsByTeam(gameInFocus, gameInFocus.teams[0]).length}
			    				</div>
			    			</div>
			    			<div className="row display-flex">
			    				<div className="flex-2">
			    					{gameInFocus.teams[1].name}
			    				</div>
			    				<div className="flex-1">
			    					{gameRunsByTeam(gameInFocus, gameInFocus.teams[1]).length}
			    				</div>
			    				<div className="flex-1">
			    					{gameHitsByTeam(gameInFocus, gameInFocus.teams[1]).length}
			    				</div>
			    				<div className="flex-1">
			    					{gameErrorsByTeam(gameInFocus, gameInFocus.teams[1]).length}
			    				</div>
			    			</div>
			    		</div>	
	    			</div>
			    </article>
			)}
	    </Consumer>
		);
	}
}

  

export default GameCard