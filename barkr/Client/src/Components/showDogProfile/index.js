import React, {Component} from 'react';
import axios from "axios";
import {Redirect, Link} from "react-router-dom"


class  ShowDogProfile extends Component  {
  constructor(){
    super(); 
    this.state = {
      doggyToShow: {},
      redirect: false
    }
    this.handleDelete = this.handleDelete.bind(this)
  }
  async componentDidMount(){
    const res = await axios.get(`http://localhost:4567/dogs/${this.props.match.params.id}`)
    console.log(res)
  const dog = res.data.dog
  console.log(dog)
  this.setState({
    doggyToShow: dog
  })
  }

  async handleDelete(){
    await axios.delete(`http://localhost:4567/dogs/${this.props.match.params.id}`)
  this.setState({
    redirect: true
  })
  }


  render(){
    const doggyToShow = this.state.doggyToShow;
    return (
      <div> 
        {this.state.redirect ? <Redirect to='/dogs' /> : null}
        <div> Name: {doggyToShow.name}</div>
        <div> Breed: {doggyToShow.breed}</div>
        <div> Age: {doggyToShow.age}</div>
        <p> Description: {doggyToShow.description}</p>
        <div> Zipcode: {doggyToShow.zipcode}</div>
        <Link to={`/dog/${doggyToShow.id}/edit`}> edit </Link>
        <button onClick={this.handleDelete}> delete</button>

              
      </div>
    );
  }
}


export default ShowDogProfile;