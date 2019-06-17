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
        age: "",
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
        await axios.post("/Dogs/", {
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
            {this.state.redirect ? <Redirect to="/"/>: null}
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
              <input
                name="description"
                type="textarea"
                placeholder="give a description"
                value={this.state.description}
                />
                <input
                  name="rating"
                  type="number"
                  placeholder="give it a rating"
                  value={this.state.rating}
                />
                <br />
                <input type="submit"
                />
    
              
            </form>
          </div>
        );
      }
    }


export default CreateDogProfile;
