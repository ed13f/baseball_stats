import React, { PureComponent } from 'react';

class BallMaker extends PureComponent {

	displayAtBat = ( ) => {
		return "Blue"
	}

	isHit = () =>{
		let bat = ""
		if(this.props.atBat){bat = this.props.atBat.isHit}
		return bat
	}

	hitPosition = ( ) => {
		let bat = ""
		if(this.props.atBat){bat = this.props.atBat.fieldPosition}
		return bat
	}

	classBuilder = ( ) => {
		let classPrefix = ["neg-lg", "neg-md", "neg-sm", "zero", "sm", "md", "lg"]
		let hitPosition = this.hitPosition()
		hitPosition += hitPosition === "1B" ? " one-B" : "";
		hitPosition += hitPosition === "2B" ? " two-B" : "";
		hitPosition += hitPosition === "3B" ? " three-B" : "";
		let isHit = this.isHit() ? "hit" : "out"
		let positionX = classPrefix[Math.floor(Math.random() * classPrefix.length)];
		let positionY = classPrefix[Math.floor(Math.random() * classPrefix.length)];
		return "ball-marker " + hitPosition + " " + isHit + " " + positionX + "-transform-x " + positionY + "-transform-y"
	}

	render(){

		// const {
		// 	id
		// } = this.props;

		return (
			<i className={this.classBuilder()}></i>
		);
	}
}

export default BallMaker