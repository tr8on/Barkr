import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ShowDogList from "./Components/ShowDogList";
import Homepage from "./Components/Homepage";
import ShowDogProfile from "./Components/ShowDogProfile";
import CreateDogProfile from "./Components/CreateDogProfile";
import UpdateDogProfile from "./Components/UpdateDogProfile";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Dogs/" component={ShowDogList} />
          <Route exact path="/Dogs/create" component={CreateDogProfile} />
          <Route exact path="/Dogs/:id" component={ShowDogProfile} />
          <Route exact path="/Dogs/:id/edit" component={UpdateDogProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;
