import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import BasicExample from './examples/BasicExample.js';
//import ParamsExample from './examples/ParamsExample.js';
//import AuthExample from './examples/AuthExample.js';
// import CustomLinkExample from'./examples/CustomLinkExample.js';
//import PreventingTransitionsExample from './examples/PreventingTransitionsExample.js';
//import NoMatchExample from './examples/NoMatchExample.js';
//import RecursiveExample from './examples/RecursiveExample.js';
//import SidebarExample from './examples/SidebarExample.js';
//import AnimationExample from './examples/AnimationExample.js';
// import AmbiguousExample from './examples/AmbiguousExample.js';
//import RouteConfigExample from './examples/RouteConfigExample.js';
//import ModalGalleryExample from './examples/ModalGalleryExample.js';
import StaticRouterExample from './examples/StaticRouterExample.js';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<BasicExample />, document.getElementById('BasicExample'));
//ReactDOM.render(<ParamsExample />, document.getElementById('ParamsExample'));
//ReactDOM.render(<CustomLinkExample />, document.getElementById('CustomLinkExample'));

// ReactDOM.render(
//   <PreventingTransitionsExample />,
//   document.getElementById('PreventingTransitionsExample')
// );

//ReactDOM.render(<NoMatchExample />, document.getElementById('NoMatchExample'));
// ReactDOM.render(
//   <RecursiveExample />,
//   document.getElementById('RecursiveExample')
// );

//ReactDOM.render(<SidebarExample />, document.getElementById('SidebarExample'));

// ReactDOM.render(
//   <AnimationExample />,
//   document.getElementById('AnimationExample')
// );

// ReactDOM.render(
//   <RouteConfigExample/>,
//   document.getElementById('RouteConfigExample')
// );

// ReactDOM.render(
//   <AmbiguousExample/>,
//   document.getElementById('AmbiguousExample')
// );

// ReactDOM.render(
//   <ModalGalleryExample/>,
//   document.getElementById('ModalGalleryExample')
// );

ReactDOM.render(
  <StaticRouterExample/>,
  document.getElementById('StaticRouterExample')
);


registerServiceWorker();
