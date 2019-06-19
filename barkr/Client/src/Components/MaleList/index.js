import React, {Component} from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom"

class MaleList extends Component  {
    constructor(){
        super(); 
        this.state = {
          dogsToShow: [],
        }
      }
      async componentDidMount(){
        const res = await axios.get('http://localhost:4567/dogs')
        const dogsToShow = res.data.dogs.male;
        console.log(dogsToShow)
        this.setState({
          dogsToShow: dogsToShow
        })
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


export default MaleList;