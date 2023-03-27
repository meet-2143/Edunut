import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import Reducers from './reducers';
import {createStore ,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';
const store =createStore(Reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store={store}>
<React.StrictMode>
  <App/>
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);