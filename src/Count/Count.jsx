import React, { Component } from 'react';
import Clock from './clock';
import '../css/style.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class Count extends Component {
		constructor(props) {
			super(props);
			this.state = {
				deadline: 'December 25, 2017',
				newDeadline: ''
			}
		}

		changeDeadline() {
			this.setState({deadline: this.state.newDeadline});
		}

	render() {
		return (
				<div className="count-app container">
				<h1>The Countdown Champ</h1>
				<div className="App">
					<div>
						<h2 className="App-title">Countdown to {this.state.deadline}</h2>
					</div>
					<Clock
					deadline = {this.state.deadline}

					 />
					<Form inline>
						<FormControl className="new-deadline" placeholder="New date" onChange = {event => this.setState({newDeadline: event.target.value})}
						onKeyPress = {event => {
								if(event.key === 'Enter') {
									this.changeDeadline();
								}
							}} />
						<Button onClick = {() => this.changeDeadline()} className="btn btn-primary">Submit</Button>
					</Form>
				</div>
				</div>
			)
	}
}

export default Count;