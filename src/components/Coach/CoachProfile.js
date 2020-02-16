import React, { PureComponent } from 'react';
import PlayerList from '../Player/PlayerList';
import PlayerStats from '../Player/PlayerStats';
import TeamStats from '../Team/TeamStats';
import GameList from '../Game/GameList';
import GameStats from '../Game/GameStats';
import GameSheet from '../Game/GameSheet';
import DemoHeader from '../layout/DemoHeader';
import TwoColumn from '../layout/TwoColumn';
import ViewTypeSwitch from '../layout/ViewTypeSwitch';
import BaseballField from '../layout/BaseballField';
import AddPlayerFor from '../Player/AddPlayerForm';
import { Consumer } from '../Context';


class CoachProfile extends PureComponent {

	render(){
		
		return (
			<div className="coach-profile">
				<DemoHeader />
				<TwoColumn 
					leftContent={[
						<Consumer key={1}>
		    				{ context => (
		    					<div className="left-wrapper">
									{ context.viewType !== "gameSheet" ? <BaseballField teamInFocus={context.teamInFocus} playerInFocus={context.playerInFocus} /> : null }
									{ context.viewType === "game" ? <GameStats gameInFocus={context.gameInFocus} /> : null }
									{ context.viewType === "gameSheet" ? <GameSheet gameInFocus={context.gameInFocus} /> : null }
									{ context.viewType === "team" ? <TeamStats teamInFocus={context.teamInFocus} /> : null }
									{ context.viewType === "player" ? <PlayerStats player={context.playerInFocus} /> : null }
								</div>
							)}
				    	</Consumer>
					]} 
					rightContent={[
						<Consumer key={2}>
		    				{ context => (
		    					<div className="relative">
			    					<header className="player-list-header">
			    						<div className="header-wrapper">
				    						<h1>{context.teamInFocus.name}</h1>
				    						<div>Coach {context.coach.firstName} {context.coach.lastName}</div>
				    					</div>
				    					<ViewTypeSwitch />	
				    					{ context.viewType === "player" && !context.addPlayer ? <button className="add-player" onClick={ () => context.action.setAddPlayerBoolean(true) }>+</button> : null }
				    					{ context.viewType === "player" && context.addPlayer ? <button className="add-player" onClick={ () => context.action.setAddPlayerBoolean(false) }>x</button> : null }
				    				</header>
				    				{ context.addPlayer && context.viewType === "player" ? <AddPlayerFor handleAddPlayer={context.action.handleAddPlayer}/> : null }
				    				{ context.viewType === "player" || context.viewType === "team" ? <PlayerList />: null }
				    				{ context.viewType === "game" || context.viewType === "gameSheet" ? <GameList />: null }
								</div>
							)}
				    	</Consumer>
					]}
				/>
			</div>
		);
	}
}


export default CoachProfile