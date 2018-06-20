import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './BasicExample.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BasicExample />, div);
  ReactDOM.unmountComponentAtNode(div);
});
