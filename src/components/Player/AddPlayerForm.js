import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../Context';



class AddPlayerFrom extends Component{
	constructor() {
        super();
        this.state = {
        	firstName: '',
            lastName: '',
            jerseyNumber: '',
            age: '',
        };
    }

    onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { firstName, lastName, jerseyNumber, age } = this.state;
        let data = { firstName: firstName, lastName: lastName, jerseyNumber: jerseyNumber, age: age, id: 100000, atBats: [], createdAt: new Date().getTime(), updatedAt: new Date().getTime(), position:"1B" }
        this.props.handleAddPlayer(data)
        // debugger

        axios.post('/', data).then((result) => {
        	console.log(result)
            //access the results here....
          });
    }




	render(){
		// console.log(this.state.value);
		const { firstName, lastName, jerseyNumber, age } = this.state;
		return(
			<Consumer>
				{context => {
					return(
						<form onSubmit={ this.onSubmit }>
							<input type="text" name="firstName" value={firstName} Placeholder="First Name" onChange={this.onChange} />
							<input type="text" name="lastName" value={lastName} Placeholder="Last Name" onChange={this.onChange} />
							<input type="number" name="jerseyNumber" value={jerseyNumber} Placeholder="Jersey Number" onChange={this.onChange} />
							<input type="number" name="age" value={age} Placeholder="Age" onChange={this.onChange} />
							<input type="submit" value="Submit" />
						</form>
					);

				}}
			</Consumer>
			
		);
	}
}

export default AddPlayerFrom