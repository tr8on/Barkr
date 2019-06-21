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
import DogIcon from "./Images/Animals-Dog-Bone-icon.png"
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <header>
          <ul>
            <img className="dog-icon" src={DogIcon} alt=""/>
            <li><a className="active"><Link  to="/About">About</Link></a></li>
            <li><a className="active"><Link  to="">Home</Link></a></li>
          </ul>
        </header>
          <div id="main">
            <article>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Dog/" component={ShowDogList} />
          <Route exact path="/Dog/create" component={CreateDogProfile} />
          <Route exact path="/Dogs/MaleList" component={MaleList} />
          <Route exact path="/Dogs/FemaleList" component={FemaleList} />
          <Route exact path="/Dog/:id" component={ShowDogProfile} />
          <Route exact path="/Dog/:id/edit" component={UpdateDogProfile} />
          <Route exact path="/About" component={AboutPage} />
        </Switch>
            </article>
            <aside2></aside2>
            <aside></aside>
          </div>
          <footer>
            <p className="small-paragraph">Finding Love For Our Little Friends.</p>
            <p className="small-paragraph">BarkR Inc. © 2019</p>
            <br/>
            <a href="https://www.facebook.com/" target="_blank" className="footer-link">Facebook</a>
            <a href="https://www.instagram.com/" target="_blank" className="footer-link">Instagram</a>
            <a href="https://www.pinterest.com/" target="_blank" className="footer-link">Pinterest</a>
            <a href="https://twitter.com/" target="_blank" className="footer-link">Twitter</a>
            <div  className="label cc-footer-section-headline w-inline-block">Contact Us</div>
            <div className="footer-grid-column"><p className="small-paragraph">We’re Always Happy to
              Help</p><a href="barkr:us@coffeestyle.io" className="footer-email-link">BarkR@Doge.io</a></div>
            </footer>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

