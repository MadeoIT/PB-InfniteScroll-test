import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Store';

//Middlewares
import { createLogger } from 'redux-logger';

export default (props) => {

  const logger = createLogger({
    colors: false
  });

  const store = createStore(
    reducers,
    applyMiddleware(
      logger
    )
  );

  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
};