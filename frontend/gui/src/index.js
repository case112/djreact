import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';



ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

import reducer from './store/reducers/auth';

const store = createStore(reducer);