import React from 'react';
import ReactDOM from 'react-dom';

import 'bootswatch/dist/darkly/bootstrap.min.css';

import { App } from './cheatsheet/app';
import './index.css';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update'); // tslint:disable-line:no-var-requires
  whyDidYouUpdate(React);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
