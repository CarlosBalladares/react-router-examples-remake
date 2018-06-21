import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

function NoMatchExample(){
  return (
    <Router>
      <div>
        {/*----- Links Seciton -----*/}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/old-match">Old match, to be redirected</Link>
          </li>
          <li>
            <Link to="/will-match">Will match</Link>
          </li>
          <li>
            <Link to="/will-not-match">Will not match</Link>
          </li>
          <li>
            <Link to="/also-will-not-match">Also will not match</Link>
          </li>
        </ul>

        <hr />

        {/*----- Routes Seciton -----*/}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Redirect from="old-match" to="will-match"/>
          <Route path="/will-match" component={WillMatch}/>
          <Route component={NoMatch}/>
        </Switch>

      </div>
    </Router>

  );
}

function Home(){
    return(
      <div>
        <p>
          A <code>&lt;Switch></code> rendes the first child
           {" "}<code>&lt;Route></code>{" "} that matches.
           A {" "}<code>&lt;Route></code>{" "} with no path
           always matches.
        </p>
      </div>
    );
}

function WillMatch(){
  return(
    <div>
      <h3>Matched!</h3>
    </div>
  );
}

function NoMatch({location}){
    return(
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
}

export default NoMatchExample;
