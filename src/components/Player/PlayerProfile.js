import React, { PureComponent } from 'react';
import PlayerGameStatsList from './PlayerGameStatsList';
import Header from '../layout/Header';
import TwoColumn from '../layout/TwoColumn';
import BaseballField from '../layout/BaseballField';
import { Consumer } from '../Context';


class CoachProfile extends PureComponent {

	render(){

		return (
			<div className="coach-profile">
				<Header />
				<TwoColumn 
					leftContent={[
						<Consumer>
		    				{ context => (
		    					<div>
									<BaseballField
										teamInFocus={context.teamInFocus}
										playerInFocus={context.playerInFocus}
									/>
								</div>
							)}
				    	</Consumer>
					]} 
					rightContent={[
						<Consumer>
		    				{ context => (
		    					<div>
									<PlayerGameStatsList
										playerInFocus={context.playerInFocus}
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

  
export default CoachProfile