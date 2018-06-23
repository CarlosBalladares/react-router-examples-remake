import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
/*
  In this eample we route different components to the same router
  using ths pattern shown below.
*/

const routes=[
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: '/bubblegum',
    exact: false,
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: '/shoelaces',
    exact: false,
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>,
  },
]

function SidebarExample(){
  return(
    <Router>
      <div style={{ display: "flex" }}>
        {/*----- Sidebar -----*/}
        <div style={{
            padding:'10px',
            width:'40%',
            background:'#f0f0f0'
          }}
        >
          {/*----- Links Section -----*/}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bubblegum">Bubblegum</Link>
            </li>
            <li>
              <Link to="/shoelaces">Shoelaces</Link>
            </li>
          </ul>

          {/*----- Routes Section -----*/}
          {routes.map((route, index)=>(
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}

        </div>

        {/*----- Main Text -----*/}
        <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index)=>(
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
        </div>
      </div>
    </Router>
  );
}

export default SidebarExample;
