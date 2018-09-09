import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import "../node_modules/highlight.js/styles/atom-one-dark.css";

import './index.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
