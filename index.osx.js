/**
 * Sample React Native Desktop App
 * https://github.com/ptmt/react-native-desktop
 */


'use strict';



import React, {AppRegistry, StyleSheet, Text, View, Dimensions, TouchableHighlight}  from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import storage from 'redux-storage';
import createEngine from './rndesktopStorage';
import { promiseMiddleware } from './middlewares/middleware'

import reducer from './reducers';
import { SIGNIN_REQUEST, SIGNIN_FAILURE } from './actions';

import App from './components/App';

const engine = createEngine('inspector');
const wrappedReducer = storage.reducer(reducer);
const storageMiddleware = storage.createMiddleware(engine, [ SIGNIN_REQUEST, SIGNIN_FAILURE ]);

const middleware = process.env.NODE_ENV === 'production' ?
[ thunk, storageMiddleware, promiseMiddleware ] :
[ thunk, logger(), storageMiddleware, promiseMiddleware ];
 
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(wrappedReducer);



export default class inspector extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    const load = storage.createLoader(engine);
    load(store);
    
  }

  render() {

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}



AppRegistry.registerComponent('inspector', () => inspector);


