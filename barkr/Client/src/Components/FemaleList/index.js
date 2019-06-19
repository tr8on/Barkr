import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom"

class  FemaleList extends Component  {
  constructor(){
    super(); 
    this.state = {
      dogsToShow: [],
    }
  }
  async componentDidMount(){
    const res = await axios.get(`http://localhost:4567/dogs/Female`)
    const dogsToShow = res.data.dogs;
    console.log(dogsToShow)
    this.setState({
      dogsToShow: dogsToShow
    })
    console.log('female')
  }


  render(){
    return (<div> 
    <div> 
      {this.state.dogsToShow.map((dog)=>{
        return <Link key={dog.id} to={`/dog/${dog.id}`}> <div>{dog.name}</div></Link>
      })}
      </div>
      <Link to='dog/create'> Register A Dog </Link>
      </div>
    );
  }
}


export default FemaleList;