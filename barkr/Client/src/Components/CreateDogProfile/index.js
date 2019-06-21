import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import CreateOwnerForm from "../CreateOwnerForm/index";

class CreateDogProfile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      breed: "",
      gender: "",
      zipcode: "",
      age: null,
      description: "",
      owner_id: null,
      ownerArray: [],
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleGender = this.handleGender.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setOwner = this.setOwner.bind(this);
  }
  async componentDidMount() {
    const res = await axios.get("http://localhost:4567/dogs/owners");
    const ownerArray = res.data.owner;
    this.setState({
      ownerArray: ownerArray
    });
  }
  setOwner(event) {
    console.log(event.currentTarget.value);
    this.setState({
      owner_id: event.currentTarget.value
    });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }
  handleGender(event){
    const value = event.target.value;
    this.setState({
      gender: value
    })
  }

  async handleSubmit(event) {
    event.preventDefault();

    await axios.post(
      `http://localhost:4567/dogs/owner/${this.state.owner_id}`,
      {
        name: this.state.name,
        description: this.state.description,
        breed: this.state.breed,
        gender: this.state.gender,
        zipcode: this.state.zipcode,
        age: this.state.age
      }
    );
    this.setState({
      redirect: true
    });
  }

  render() {
    return (
      <div className="container1">
        <div className="container2">
      <div>
        <div>
          <select value={this.state.currentOwner} onChange={this.setOwner}>
            <option label="select an owner" />
            {this.state.ownerArray.map(owner => {
              return <option value={`${owner.id}`}>{`${owner.name}`}</option>;
            })}
          </select>
        </div>
        {this.state.redirect ? <Redirect to="/" /> : null}
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="name of dog"
            value={this.state.name}
          />
          <br />
          <input
            name="description"
            type="textarea"
            placeholder="give a description"
            value={this.state.description}
          />
          <br />
          <select onChange={this.handleGender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {/* <input
            name="gender"
            type="text"
            placeholder="give it a gender"
            value={this.state.gender}
          /> */}
          <br />
          <input
            name="breed"
            type="text"
            placeholder="give it a breed"
            value={this.state.breed}
          />
          <br />
          <input
            name="zipcode"
            type="string"
            placeholder="give it a zipcode"
            value={this.state.zipcode}
          />
          <br />
          <input
            name="age"
            type="number"
            placeholder="give it a age"
            value={this.state.age}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
        </div>
      </div>
    );
  }
}

export default CreateDogProfile;
