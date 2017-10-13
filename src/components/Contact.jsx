import React, { Component } from 'react';
import {FormGroup, Form, FormControl} from 'react-bootstrap';

class Contact extends Component {
	render() {
		return (
			<div className="contactForm">
				<FormGroup>
					<Form inline>
					Name
					<FormControl 
					placeholder="Enter Name"/>
				</Form>
				</FormGroup>
			</div>
		);
	}
}
export default Contact;
