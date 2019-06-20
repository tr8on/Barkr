import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom"

class  HomePage extends Component  {
  constructor(){
    super();
  }


  render(){
    return (
      <div className="homepage">
        <Link to="/dogs/MaleList"><button >Male</button> </Link>
        <Link to="/dogs/FemaleList"><button >Female</button> </Link>
      </div>
    );
  }
}


export default HomePage;
