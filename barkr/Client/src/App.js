import React, { Component } from "react";
import "./App.css";
import { BrowserRouter,Switch, Route, Link } from "react-router-dom";
import ShowDogList from "./Components/ShowDogList/index";
import Homepage from "./Components/HomePage/index";
import AboutPage from "./Components/AboutPage/index";
import ShowDogProfile from "./Components/showDogProfile/index";
import CreateDogProfile from "./Components/CreateDogProfile/index";
import UpdateDogProfile from "./Components/UpdateDogProfile/index";
import MaleList from "./Components/MaleList/index";
import FemaleList from "./Components/FemaleList/index";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <header>
          <ul id="headerButtons">
            <div className="navBar">
              <Link className ="homeButton" activeStyle={{color: "red"}} to="">Home</Link>
              <Link className ="aboutButton" to="/About">About</Link>
            </div>
          </ul>
      </header>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Dogs/" component={ShowDogList} />
          <Route exact path="/Dog/create" component={CreateDogProfile} />
          <Route exact path="/Dogs/MaleList" component={MaleList} />
          <Route exact path="/Dogs/FemaleList" component={FemaleList} />
          <Route exact path="/Dog/:id" component={ShowDogProfile} />
          <Route exact path="/Dog/:id/edit" component={UpdateDogProfile} />
          <Route exact path="/About" component={AboutPage} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

