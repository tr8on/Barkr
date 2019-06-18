import React, {Component} from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom"

class  CreateDogProfile extends Component  {
  constructor(){
    super(); 
    this.state = {
        name: "",
        breed: "",
        gender: "",
        zipcode: "",
        age: null,
        description: "",
        redirect: false
    }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

  }
    
      handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        })    
      }
    
      async handleSubmit(event){
        event.preventDefault();
       
        await axios.post(`http://localhost:4567/dogs/`, {
          name: this.state.name,
          description: this.state.description,
          breed: this.state.breed,
          gender: this.state.gender,
          zipcode: this.state.zipcode,
          age: this.state.age
        })
        this.setState({
          redirect: true
        })
      }
    
      render(){
        return (
          <div> 
            {this.state.redirect ? <Redirect to="/dogs"/>: null}
            <form 
            onChange={this.handleChange} 
            onSubmit={this.handleSubmit}
            >
              <input
                name="name"
                type="text"
                placeholder="name of dog"
                value={this.state.name}
              />
              <br/>
              <input
                name="description"
                type="textarea"
                placeholder="give a description"
                value={this.state.description}
                />
                <br/>
                <input
                  name="gender"
                  type="text"
                  placeholder="give it a gender"
                  value={this.state.gender}
                />
                <br/>
                <input
                  name="breed"
                  type="text"
                  placeholder="give it a breed"
                  value={this.state.breed}
                />
                <br/>
                <input
                  name="zipcode"
                  type="string"
                  placeholder="give it a zipcode"
                  value={this.state.zipcode}
                />
                <br/>
                <input
                  name="age"
                  type="number"
                  placeholder="give it a age"
                  value={this.state.age}
                />
                <br/>
                <input type="submit"
                />
    
              
            </form>
          </div>
        );
      }
    }


export default CreateDogProfile;