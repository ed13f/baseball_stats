import React, { PureComponent } from 'react';
import CoachCard from './CoachCard'
import { Consumer } from '../Context';


class CoachList extends PureComponent {

	render(props){

		return (
			<Consumer>
	    		{ context => (
	    			<div className="coaches-list">
						{context.coaches.map( (coach, index) =>
		              		<CoachCard
				            first_name={coach.first_name}
				            last_name={coach.last_name}
				            id={coach.id}
				            key={coach.id.toString()} 
				            index={index}        
				          />
				        )}
					</div>
	    		)}
	    	</Consumer>	
		);
	}
}


export default CoachList