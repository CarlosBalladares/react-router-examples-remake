import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicExample from './examples/BasicExample.js';
import ParamsExample from './examples/ParamsExample.js';
// import AuthExample
// import CustomLinkExample
// import PreventingTransitionsExample
// import NoMachExample
// import RecursiveExample
// import SidebarExample
// import AnimationExample
// import AmbiguousExample
// import RouteConfigExample
// import ModalGalleryExample
// import StaticRouterExample
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<BasicExample />, document.getElementById('BasicExample'));
ReactDOM.render(<ParamsExample />, document.getElementById('ParamsExample'));

registerServiceWorker();
