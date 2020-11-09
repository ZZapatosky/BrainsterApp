import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import About from './components/About';
import CardPost from './components/CardPost';
import Contact from './components/Contact';
import Reg from './components/Reg';





function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Route exact path="/" component={LandingPage} />
     <Route exact path="/landingPage" component={LandingPage} />
     <Route className="About" exact path="/about" component={About} />
     <Route className="img-card bg-dark" exact path="/SinglePage/:post_id" component={CardPost} />
     <Route className="Contact" exact path="/contact" component={Contact} />
     <Route exact path="/reg" component={Reg} />
     
    </BrowserRouter>
     </div>
  );
}

export default App;
