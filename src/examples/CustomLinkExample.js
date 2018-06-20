import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function CustomLinkExample(){
  return(
    <Router>
      <div>
        {/*----- Links Section -----*/}
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
        <OldSchoolMenuLink to="/about" label="About" />

        <hr />

        {/*----- Router Section -----*/}
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>

      </div>
    </Router>
  );
}

function OldSchoolMenuLink({label, to, activeOnlyWhenExact}){
  return (
    <Route
      path={to}
      exact = {activeOnlyWhenExact}
      children = {({match})=>(
        <div className="">
          {match? "> ": ""}
          <Link to={to}>{label}</Link>
        </div>
      )}
    />
  );
}

function Home(){
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About(){
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default CustomLinkExample;
