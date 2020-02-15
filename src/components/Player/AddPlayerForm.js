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
            position: ''
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
        const { firstName, lastName, jerseyNumber, age, position } = this.state;
        let data = { firstName: firstName, lastName: lastName, jerseyNumber: jerseyNumber, age: age, id: 100000, atBats: [], createdAt: new Date().getTime(), updatedAt: new Date().getTime(), position:position }
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
						<form className="add-player" onSubmit={ this.onSubmit }>
							<input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={this.onChange} />
							<input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={this.onChange} />
							<input type="number" name="jerseyNumber" value={jerseyNumber} placeholder="Jersey Number" onChange={this.onChange} />
							<input type="number" name="age" value={age} placeholder="Age" onChange={this.onChange} />
                            <select name="position" onChange={this.onChange.bind(this)} value={this.state.position}>
                                <option value="P">P</option>
                                <option value="C">C</option>
                                <option value="1B">1B</option>
                                <option value="2B">2B</option>
                                <option value="3B">3B</option>
                                <option value="SS">SS</option>
                                <option value="LF">LF</option>
                                <option value="CF">CF</option>
                                <option value="RF">RF</option>
                            </select>
							<input type="submit" value="Submit" />
						</form>
					);

				}}
			</Consumer>
			
		);
	}
}

export default AddPlayerFrom