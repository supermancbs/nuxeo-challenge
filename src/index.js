
import App from './App';

// Import CSS
import './index.css';

// Import Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Import Middleware
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';


// Import Reducers
import reducer from './reducers/reducers';


const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore)
const store = createStoreWithMiddleware(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
