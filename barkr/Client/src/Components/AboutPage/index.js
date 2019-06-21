import React , { Component } from 'react';

import "./aboutPage.css"
import Amigos from "../../Images/Three-Amigos-origianl-640x359.jpg"

class AboutPage extends Component {
	constructor ( props ) {
		super ( props );
		
	};
	
	render () {
		
		return ( <>
			<div className="body">
				<div className="creators">
					<h1 align="center">The Creaters of Barkr</h1>
					<h3 align="center">are three young men</h3>
					<img className="image-about" src={ Amigos } alt=""/>
				</div>
			</div>
		</> );
		
	}
}

export default AboutPage;
