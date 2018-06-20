import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

//This Example shows how you can use urls to send parameters
function ParamsExample(){
  return(
    <Router>
      <div>
        {/*----- This section has links -----*/}
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>
        {/*------ This section has routes-----*/}
        <Route exact path="/:id" component={Child}/>
        <Route path="/order/:direction(asc|desc)" component={ComponentWithRegex}/>
        <Route path="/:id/*" component={ComponentMSD}/>
      </div>
    </Router>
  );
}

function Child({match}){
  return(
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}

function ComponentWithRegex({match}){
  return(
    <div>
      <h3>Only asc/desc are allowed : {match.params.direction}</h3>
    </div>
  );
}
/*
  This component shows how to match arbitrary number of subdirectories
  This is not in the original website with the examples but is a
  small extension.
  React Router uses https://www.npmjs.com/package/path-to-regexp
  for matching strings to paths
  MSD stands for multiple subdirectories
*/
function ComponentMSD({match}){
  let params = match.url.split('/');
  params=params.filter(x => x.length >0);
  return(
    <p>{params.toString()}</p>
  );
}

export default ParamsExample;
