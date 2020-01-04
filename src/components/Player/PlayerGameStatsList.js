import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PlayerGameStatsCard from './PlayerGameStatsCard'
import { Consumer } from '../Context';



class PlayerGameStatsList extends PureComponent {

	static propTypes = {
		// firstName: PropTypes.string,
		// lastName: PropTypes.string,
		// id: PropTypes.number,
		// index: PropTypes.number,
	};

	playerAtBats = () =>{
		let atBats = this.props.playerInFocus.atBats
		// debugger
		console.log(this.props.playerInFocus.atBats)
		return 'atBats'
	}

	render(){

		const {
			playerInFocus,
			// lastName,
			// id,
			// number,
			// position
		} = this.props;

		if (!this.props.atBatInFocus == {}) {
            return <div />
        }

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