import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div className="about-section">
				<div className="container about">
					<h1>Technology Stack</h1>
						<div className="link-content">
							<div className="row links">
							<i className="ion-social-html5-outline html"></i>
							<i className="ion-social-css3-outline css"></i>
							<i className="ion-social-sass sass"></i>
							<i className="ion-social-javascript javascript"></i>
							<i className="ion-social-nodejs node"></i>
							<i className="ion-social-angular angular"></i>
						</div>
						<div className="row links">
							<i className="ion-social-android android"></i>
							<i className="ion-social-apple apple"></i>
							<i className="ion-social-windows html"></i>
							<i className="ion-social-wordpress html"></i>
							<i className="ion-social-chrome chrome"></i>
							<i className="ion-social-github"></i>
						</div>
						</div>
				</div>
			</div>
		);
	}
}
export default About;
