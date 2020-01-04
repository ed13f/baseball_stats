import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CoachCard from './CoachCard'
import { Consumer } from '../Context';



class CoachList extends PureComponent {

	static propTypes = {
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		id: PropTypes.number.isRequired,
		index: PropTypes.number,
	};

	render(props){

		const {
			first_name,
			last_name,
			id,
			index
		} = this.props;

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