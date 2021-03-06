import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

function AmbiguousExample(){
  return (
    <Router>
      <div>
        {/*----- Link Section -----*/}
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/kim">Kim</Link>
          </li>
          <li>
            <Link to="/chris">Chris</Link>
          </li>
        </ul>

        {/*----- Routes Section -----*/}
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/company" component={Company}/>
          <Route path="/:user" component={User}/>
        </Switch>
      </div>
    </Router>
  );
}

function About(){
  return<h2>About</h2>;
}

function Company(){
  return<h2>Company</h2>;
}

function User({match}){
  return(
    <div>
      <h2>User: {match.params.user}</h2>
    </div>
  );
}

export default AmbiguousExample;
