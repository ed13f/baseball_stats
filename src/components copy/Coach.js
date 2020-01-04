import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import { Consumer } from './Context';



class Player extends PureComponent {

	static propTypes = {
		name: PropTypes.string,
		id: PropTypes.number.isRequired,
		score: PropTypes.number,
		index: PropTypes.number,
	};

	render(){
  
	  	const {
			name,
			id,
			score,
			index,
			changeScore
		} = this.props;

		return (
			
			    <div className="player">
			    	<Consumer>
			    		{ context => (
			    			<span className="player-name">
				        		<button className="remove-player" onClick={() => context.action.removePlayer(id)}>✖</button>
				        		{ name }
				      		</span>
			    		)}
			    	</Consumer>
		        	
			    	<Counter 
			      		score={score}
			      		index={index}
			        />
			    </div>
		    
		);
	}

}

  

export default Player