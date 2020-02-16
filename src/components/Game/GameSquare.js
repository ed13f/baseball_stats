import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context';


class GameSquare extends PureComponent {

	static propTypes = { atBat: PropTypes.object.isRequired }

	ballsClassbuilder = (number) =>{
		let atBat = this.props.atBat
		let className = ""
		if(atBat.balls >= number ){ className += " active" }
		return className
	}

	strikessClassbuilder = (number) =>{
		let atBat = this.props.atBat
		let className = ""
		if(atBat.strikes >= number ){ className += " active" }
		return className
	}

	basesClassbuilder = () =>{
		let atBat = this.props.atBat
		let className = "base-" + atBat.basePosition
		return className
	}

	render(){

		const { atBat } = this.props;

		return (
			<Consumer>
	    		{context => (
					<div className={"at-bat-square " + (atBat.id ? "active" : "") } onClick={() => context.action.makeGameInFocus(atBat)}>
						<div className="field-position"> {atBat.baseValue} </div>
						<div className="count">
							<div className="balls">
								<i className={ "ball b1" + this.ballsClassbuilder(1) + " " +this.props.atBat.balls }></i>
								<i className={ "ball b2" + this.ballsClassbuilder(2) }></i>
								<i className={ "ball b3" + this.ballsClassbuilder(3) }></i>
							</div>
							<div className="strikes">
								<i className={ "strike s1" + this.strikessClassbuilder(1) }></i>
								<i className={ "strike s2" + this.strikessClassbuilder(2) }></i>
							</div>
						</div>
						<div className="bases">
							
							<div className={"baselines " + this.basesClassbuilder() }></div>
						</div>
					</div>
				)}
	    	</Consumer>
		);
	}
}


export default GameSquare