import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const routes =[
  {
    path: '/sandwiches',
    component:Sandwiches
  },
  {
    path: '/tacos',
    component:Tacos,
    routes:[
      {
        path: '/tacos/bus',
        component:Bus
      },
      {
        path: '/tacos/cart',
        component:Cart
      }
    ]
  }
];

//
// function Main(){
//   return <h2>Main</h2>;
// }

function Sandwiches(){
  return <h2>Sandwiches</h2>;
}

function Bus(){
  return <h3>Bus</h3>;
}

function Cart(){
  return <h3>Cart</h3>;
}


function Tacos({routes}){
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>

      {/*----- Routes map -----*/}
      {routes.map((route, index)=><RouteWithSubRoutes key={index} {...route}/>)}
    </div>
  );
}
/*
  This wraps an object consisting of
  {
    component:  someComponent,
    path:       somePath,
    routes:     someRoutes
  }
   with a Route
*/
function RouteWithSubRoutes(route){
  return(
    <Route
      path={route.path}
      render={(props)=>(
        <route.component {...props} routes={route.routes}/>
      )}
    />
  );
}


function RouteConfigExample(){
  return (
    <Router>
      <div>
        <h2>Routes</h2>
        <ul>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
        </ul>

        {/*----- Routes map -----*/}
        {routes.map((route, index)=> <RouteWithSubRoutes key={index} {...route}/>)}
      </div>
    </Router>

  );
}


export default RouteConfigExample;
