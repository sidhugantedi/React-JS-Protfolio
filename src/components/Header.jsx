import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/style.css';

class Header extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">The coding pen</a>
                            <button type="button" className="navbar-toggle hamburger-icon" data-target="#navbar-collapse" data-toggle="collapse">
                                <span className="sr-only">toggle navigation</span>
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse" id="navbar-collapse">
                            <div className="nav navbar-nav">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/About">About</NavLink></li>
                                <li><NavLink to="/Projects">React</NavLink></li>
                                <li><NavLink to="/Javascript">Javascript</NavLink></li>
                                <li><NavLink to="/Contact">Contact</NavLink></li>
                            </div>
                        </div>
                    </div>
                </nav>
			</div>
		);
	}
}
export default Header;
