import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// import PlayerCard from '../Player/PlayerCard';
// import CoachList from '../Coach/CoachList';
import PlayerGameStatsList from './PlayerGameStatsList';
// import TeamStats from '../Team/TeamStats';
import Header from '../layout/Header';
import TwoColumn from '../layout/TwoColumn';
import BaseballField from '../layout/BaseballField';
import { Consumer } from '../Context';




class CoachProfile extends PureComponent {

	static propTypes = {
		id: PropTypes.number.isRequired,
		index: PropTypes.number,
	}

	render(){
		// const {
			// teamInFocus,
			// id,
			// index,
			// playerInFocus,
		// } = this.props;

		return (
			<div className="coach-profile">
				<Header />
				<TwoColumn 
				leftContent={
					[
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
					] 
				} 
				rightContent={
					[
						<Consumer>
	    				{ context => (
	    					<div>
								<PlayerGameStatsList
									playerInFocus={context.playerInFocus}
								/>	
							</div>
						)}
			    	</Consumer>
						
					] 
				}/>
			</div>
			
		    
		);
	}

}

  

export default CoachProfile