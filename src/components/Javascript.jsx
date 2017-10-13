import React, { Component } from 'react';
import '../css/style.css';


class Javascript extends Component {
	render() {
		return(
			<div className="Jav">
				<div className="container">
					<div className="row project-row">
						<div className="col-md-8">
							<a href={require('../projectImages/expense.png')}>
								<img src={require('../projectImages/expense.png')} alt="expense-screenshot" className="left img-responsive"/>
							</a>
						</div>
						<div className="col-md-4 description">
								<h1>The Budgety</h1>
								<br />
								<p>Budgety is an application completely built upon Javascript. It helps you in managing
								your expenses and incomes and also alerts you when your expenses exceeds income.</p>
						</div>
					</div>
					<hr />
					<div className="row project-row">
						<div className="col-md-4 description">
								<h1>Quote for the day</h1>
								<br />
								<p>Start your day with some enthusiastic words said by great people, scholars and philosophers.
								This app gives you some random motivational quotes when clicked the button, you get a new quote.</p>
						</div>
						<div className="col-md-8">
							<a href={require('../projectImages/quotes.png')}>
								<img src={require('../projectImages/quotes.png')} alt="id" className="right img-responsive"/>
							</a>
						</div>
					</div>
					<hr />
					<div className="row project-row">
						<div className="col-md-8">
							<a href={require('../projectImages/carFinder.png')}>
								<img src={require('../projectImages/carFinder.png')} alt="carfinder" className="left img-responsive"/>
							</a>
						</div>
						<div className="col-md-4 description">
							<h1>The Car Finder</h1>
							<p>Love for cars was always raising in me from childhood. This design came out of that love and
							the whole Idea was to build an app for customizing and trading. Completely built on bootstrap grid and its also mobile friendly.</p>

						</div>
					</div>
					<hr />
					<div className="row project-row">
						<div className="col-md-4 description">
							<h1>Business Development</h1>
							<p>I have a special attachment with this project. The first website I have built from scratch. This design
							using Bootstrap and other frameworks, stands special for me(first Love ;-)).</p>
						</div>
						<div className="col-md-8">
							<a href={require('../projectImages/enterprise.png')}>
								<img src={require('../projectImages/enterprise.png')} alt="enterpriseIT" className="right img-responsive"/>
							</a>
						</div>
					</div>
					<hr />
					<div className="row project-row">
						<div className="col-md-8">
							<a href={require('../projectImages/game2.png')}>
								<img src={require('../projectImages/game1.png')} alt="game1" className="left img-responsive"/>
							</a>
						</div>
						<div className="col-md-4 description">
							<h1>The Dice Game</h1>
							<p>Two players roll a dice one after the other and holds if a player wants the score to be added to their total.
							Completely written in vailla Javascript. This game taught me more of javascript.</p>
						</div>
					</div>
					<hr />
					<div className="row project-row">
						<div className="col-md-4 description">
							<h1>The Js Events</h1>
							<p>In the erly days of learning code, I was exhausted with Javascript and took a break.
							However in the mean time I was thinking to do something and all of a sudden I was stuck with this Idea.
						I felt it was a good idea to learn Javascript by actually building something using javascript and ended up with this.</p>
						</div>
						<div className="col-md-8">
							<a href={require('../projectImages/jaEvents.png')}>
								<img src={require('../projectImages/jaEvents.png')} alt="" className="right img-responsive"/>
							</a>
						</div>
					</div>
					<hr />
					<div className="row project-row">
						<div className="col-sm-6">
							<a href={require('../projectImages/lovely.mov')}>
								<video controls muted width="300" height="300" src={require('../projectImages/lovely.mov')} alt=""/>
							</a>
						</div>
						<div className="col-sm-6">
							<a href={require('../projectImages/Animation.mov')}>
								<video controls muted width="300" height="300" src={require('../projectImages/Animation.mov')} alt=""/>
							</a>
						</div>
					</div>
				</div>
				<div className="container links link">
					<div className="row">
						<p> Find more on GitHub.</p>
						<a href="https://github.com/sidhugantedi"><i className="ion-social-github github"></i></a>
					</div>
				</div>
			</div>
			);
	}
}
export default Javascript;
