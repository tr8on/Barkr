import React, { Component } from "react";
import "./App.css";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import ShowDogList from "./Components/ShowDogList/index";
import Homepage from "./Components/HomePage/index";
import ShowDogProfile from "./Components/showDogProfile/index";
import CreateDogProfile from "./Components/CreateDogProfile/index";
import UpdateDogProfile from "./Components/UpdateDogProfile/index";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Dogs/" component={ShowDogList} />
          <Route exact path="/Dog/create" component={CreateDogProfile} />
          <Route exact path="/Dog/:id" component={ShowDogProfile} />
          <Route exact path="/Dog/:id/edit" component={UpdateDogProfile} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
