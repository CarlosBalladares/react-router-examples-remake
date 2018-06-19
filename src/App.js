import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App1(){
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route  strict path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

function Home(){
  return <div>Home</div>;
}

function About(){
  return <div>About</div>;
}

function Topics ( props ){
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${props.match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${props.match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={props.match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic(props){
  return (
    <div>
      <h3>
        {props.match.params.topicId}
      </h3>
    </div>
  );
}

export default App1;
