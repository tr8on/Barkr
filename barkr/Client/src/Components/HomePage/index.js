import React , { Component } from 'react';
import { Link } from "react-router-dom"

class HomePage extends Component {
	
	
	render () {
		return ( <div className="homepage">
				<div className="homepage-links">
					<div className="header-headline-wrap">
						<div className="label cc-cover-label w-inline-block">Find the right partner for your
							buddy!
						</div>
						<div className="header-headline">BarkR</div>
						<p className="big-paragraph cc-cover-paragraph">With Over 2000 Dogs In New York City
							<br/>We Know You Will Find<br/>
							<br/>The Right One<br/>
						</p>
					</div>
					<Link to="/dogs/MaleList">
						<button className="main-button-male">Male</button>
					</Link>
					<Link to="/dogs/FemaleList">
						<button className="main-button-female">Female</button>
					</Link>
				</div>
			</div> );
	}
}


export default HomePage;
