import React, {Component} from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom"

class  HomePage extends Component  {
  constructor(){
    super(); 
  }


  render(){
    return (
      <div>
        <button to="/ShowDogList">Male</button> <button>Female</button>
      </div>
    );
  }
}


export default HomePage;