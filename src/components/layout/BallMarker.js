import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class BallMaker extends PureComponent {

	static propTypes = { atBat: PropTypes.object }

	isHit = ( atBat ) =>{
		let bat = ""
		if(atBat){bat = atBat.isHit}
		return bat
	}

	hitPosition = ( atBat ) => {
		let bat = ""
		if(atBat){bat = atBat.fieldPosition}
		return bat
	}

	classBuilder = ( atBat ) => {
		let classPrefix = ["neg-lg", "neg-md", "neg-sm", "zero", "sm", "md", "lg"]
		let hitPosition = this.hitPosition(atBat)
		hitPosition += hitPosition === "1B" ? " one-B" : "";
		hitPosition += hitPosition === "2B" ? " two-B" : "";
		hitPosition += hitPosition === "3B" ? " three-B" : "";
		let isHit = this.isHit(atBat) ? "hit" : "out"
		let positionX = classPrefix[Math.floor(Math.random() * classPrefix.length)];
		let positionY = classPrefix[Math.floor(Math.random() * classPrefix.length)];
		return "ball-marker " + hitPosition + " " + isHit + " " + positionX + "-transform-x " + positionY + "-transform-y"
	}

	render(){

		const { atBat } = this.props;

		return (
			<i className={this.classBuilder(atBat)}></i>
		);
	}
}


export default BallMaker