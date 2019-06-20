import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom"

class  HomePage extends Component  {
  constructor(){
    super();
  }


  render(){
    return (
      <div className="homepage">
       <div className="homepage-links">
        <Link to="/dogs/MaleList"><button className="main-button-male" >Male</button> </Link>
        <Link to="/dogs/FemaleList"><button className="main-button-female" >Female</button> </Link>
       </div>
      </div>
    );
  }
}


export default HomePage;
