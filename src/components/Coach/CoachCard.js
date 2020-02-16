import React, { PureComponent } from 'react';
import { Consumer } from '../Context';


class CoachCard extends PureComponent {

	render(){

	  	const { first_name, last_name } = this.props;
	  	
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