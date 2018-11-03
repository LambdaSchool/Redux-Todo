import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers.js'; 

let store = createStore(reducers); 

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,document.getElementById('root'));


serviceWorker.unregister();
