import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import "../MaleList/dogList.css"
import Box from "../DogBox/index"


class  FemaleList extends Component  {
  constructor(props){
    super(props); 
    this.state = {
      dogsToShow: [],
      img: ''
    }
  }
  async componentDidMount(){
    const res = await axios.get(`http://localhost:4567/dogs/Female`)
    const dogsToShow = res.data.dogs;
    console.log(dogsToShow)
    this.setState({
      dogsToShow: dogsToShow
    })
  }

  render(){

    return (
      <div className="container">
        <br></br>
        <br></br>
        <br></br>
        <div className="register"><Link to='dog/create'> Register A Dog </Link></div>
        <div className="row">
          {this.state.dogsToShow.map ( (dog) => (
          <Link style={{ textDecoration: 'none' }} key={dog.id} to={`/dog/${dog.id}`}>
          <Box name={dog.name} breed={dog.breed} age={dog.age}></Box>
          </Link>
          ))}
        </div>
      </div>
    );
  }
}


export default FemaleList;