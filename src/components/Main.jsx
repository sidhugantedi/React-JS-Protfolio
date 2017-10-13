import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import AppReact from './Projects';
import Contact from './Contact';
import Javascript from './Javascript';
import { footer } from 'react-bootstrap';
import '../css/style.css';

class Main extends Component {
	render() {
		return (
			<div className="app">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/About" component={About}/>
                    <Route exact path="/Projects" component={AppReact}/>
                    <Route exact path="/Javascript" component={Javascript}/>
                    <Route exact path="/Contact" component={Contact}/>
                </Switch>
				<footer className="navbar navbar-bottom">
					<div className="container-fluid">
						<div className="row">
						<p>&copy;2017 developed by Sid with <i className="ion-heart"></i></p>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
export default Main;
