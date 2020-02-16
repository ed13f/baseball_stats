import React, { PureComponent } from 'react';
import Header from '../layout/Header';
import TwoColumn from '../layout/TwoColumn';
import GameSheet from './GameSheet';
import AtBatCard from './AtBatCard';
import PlayerSidebarStats from '../Player/PlayerSidebarStats';
import { Consumer } from '../Context';


class GameProfile extends PureComponent {

	render(){

		return (
			<div className="game-profile">
				<Header />
				<TwoColumn 
					leftContent={[
						<Consumer>
		    				{ context => (
		    					<div>
		    						<GameSheet 
		    							gameInFocus={context.gameInFocus}
		    							teamInFocus={context.teamInFocus}
		    						/>
		    					</div>
							)}
				    	</Consumer>
					]} 
					rightContent={[
						<Consumer>
	    					{ context => (
	    						<div>
									<AtBatCard 
										gameInFocus={context.gameInFocus}
										atBatInFocus={context.atBatInFocus}
										players={context.teamInFocus.players}
									/>
									<hr className="break"/>
									<PlayerSidebarStats
										gameInFocus={context.gameInFocus}
										atBatInFocus={context.atBatInFocus}
										players={context.teamInFocus.players}
									 />
								</div>
							)}
				    	</Consumer>
					]}
				/>
			</div>
		);
	}
}


export default GameProfile