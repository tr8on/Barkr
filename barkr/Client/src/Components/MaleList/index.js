import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import "./dogList.css"
import Box from "../DogBox/index"
import ShowDogList from '../ShowDogList';
import ShowDogProfile from '../showDogProfile';

class  MaleList extends Component  {

  constructor(props){
    super(props); 
    this.state = {
      dogsToShow: [],
      img: ''
    }
  }
  async componentDidMount(){
    console.log('hi')
    const res = await axios.get(`http://localhost:4567/dogs/Male`)
    const dogsToShow = res.data.dogs;
    console.log(dogsToShow)
    this.setState({
      dogsToShow: dogsToShow
    })

  //   const apiRes = await axios.get(`https://dog.ceo/api/breed/${this.state.dogsToShow.dog.breed.toLowerCase()}/images/random`)
  // const dogPic = apiRes.data.message
  // console.log(dogPic)
  // this.setState({
  //   img: dogPic
  // })
  // console.log(apiRes)

  }


  render(){

   

    return (
      <div className="container">
        <br></br>
        <br></br><br></br>
       <div className="register"><Link to='dog/create'> Register A Dog </Link></div>
      <div className="row">
          {this.state.dogsToShow.map ( (dog) => (
            <Link style={{ textDecoration: 'none' }} key={dog.id} to={`/dog/${dog.id}`}>
              <Box name={dog.name} id={dog.id} breed={dog.breed} age={dog.age}></Box>
            </Link>
          ))}
      </div>
</div>
    );
  }
} 


export default MaleList;
