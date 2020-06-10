import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import rootStore from "./redux/store/store";
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //dùng cho ajax redux
import logger from 'redux-logger';

const store = createStore(rootStore,applyMiddleware(thunk, logger));

let app = (
  <BrowserRouter>
      <Provider store={store}> 
      <App />
  </Provider>
  </BrowserRouter>
  
) 


ReactDOM.render( app , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
