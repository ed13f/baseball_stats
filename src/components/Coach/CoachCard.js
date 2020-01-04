import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';



class CoachCard extends PureComponent {

	static propTypes = {
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		id: PropTypes.number.isRequired,
	};

	render(){
  
	  	const {
			first_name,
			last_name,
			id,
			email,
			phone
		} = this.props;

		return (
			
			    <div className="player">
			    	<Consumer>
			    		{ context => (
			    			<span className="player-name">
				        		{ first_name + ' ' + last_name }
				      		</span>
			    		)}
			    	</Consumer>
		        	
			    </div>
		    
		);
	}

}

  

export default CoachCard