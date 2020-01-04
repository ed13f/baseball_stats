import React, { Component } from 'react';
import { Consumer } from './Context';


class AddPlayerFrom extends Component{

	playerInput = React.createRef();

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addPlayer(this.playerInput.current.value);
		e.currentTarget.reset();
	}

	render(){
		// console.log(this.state.value);
		return(
			<Consumer>
				{context => {
					const handleSubmit = (e) => {
						e.preventDefault();
						context.action.addPlayer(this.playerInput.current.value);
						e.currentTarget.reset();
					}
					return(
						<form onSubmit={this.handleSubmit}>
							<input 
								type="text"
								ref={ this.playerInput }
								Placeholder="Enter a player's name"
							/>
							<input 
								type="submit"
								value="Add Player"
							/>
						</form>
					);

				}}
			</Consumer>
			
		);
	}
}

export default AddPlayerFrom