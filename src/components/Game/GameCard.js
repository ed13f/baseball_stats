import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';
import { gameRunsByTeam, gameHitsByTeam, gameErrorsByTeam } from '../../lib/game-stats';


class GameCard extends PureComponent {

	static propTypes = { gameInFocus: PropTypes.object.isRequired }
	
	handleScorebookClick = (contextVar, game) =>{
		contextVar.action.handleGameInFocus(game);
		contextVar.action.setViewType("gameSheet");
		return true
	}

	render(){

	  	const { gameInFocus } = this.props;

		if (!gameInFocus.id) { return <div /> }

		return (
			<Consumer>
	    		{ context => (
				    <article className="game-card">
		    			<div key>
		    				<header className="display-flex">
			    				<h2 className="" >{ gameInFocus.name }<br/> { gameInFocus.teams[0].name } vs <span className="">{ gameInFocus.teams[1].name }</span></h2>
			    				<div className="view-toggle">
			    					<button className={ context.viewType === "game" && context.gameInFocus.id === gameInFocus.id ? "active" : "" } onClick={() => { context.action.handleGameInFocus(gameInFocus) }}>Overview</button>
			    					<button className={ context.viewType === "gameSheet" && context.gameInFocus.id === gameInFocus.id ? "active" : "" } onClick={() => this.handleScorebookClick(context, gameInFocus)}>Scorebook</button>
			    				</div>
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