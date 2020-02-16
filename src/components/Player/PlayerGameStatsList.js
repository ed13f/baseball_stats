import React, { PureComponent } from 'react';
import { Consumer } from '../Context';


class PlayerGameStatsList extends PureComponent {

	render(){

		if (!this.props.atBatInFocus === {}) { return <div /> }

		return (
			<Consumer>
	    		{ context => (
	    			<div className="players-list">
						<h3>{this.playerAtBats()}</h3>
					</div>
	    		)}
	    	</Consumer>
		);
	}
}

  
export default PlayerGameStatsList