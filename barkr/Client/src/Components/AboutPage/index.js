import React, {Component} from 'react';
import axios from "axios";
import {Redirect, Link}  from "react-router-dom"
import "./aboutPage.css"

class AboutPage extends Component {
  constructor(props) {
    super(props);

  };

  render() {
    
    return (
      <> 
      <div className="body">
      <div className="creators">
          <h1 align="center">The Creaters of Barkr</h1>
          <h3 align="center">are three young men</h3>
        </div>
        </div>
      </>
    );

  }
}

export default AboutPage;