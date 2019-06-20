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
        <div className="register"><button><Link to='dog/create'> <img src="https://img.icons8.com/ios/50/000000/plus-filled.png"/></Link></button></div>
        <div className="row">
          {this.state.dogsToShow.map ( (dog) => (
            <div  onClick={<Link key={dog.id} to={`/dog/${dog.id}`}></Link>}><Box name={dog.name} id={dog.id} breed={dog.breed} age={dog.age}></Box></div>
          ))}
      </div>
            </div>
    );
  }
}


export default MaleList;
