import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Root from './Root';
import ErrorBoundary from './Utils/ErrorBoundary';
import './sass/main.scss';

ReactDOM.render(
  
  <ErrorBoundary>
    <Root>
      <Router>
        <App />
      </Router>
    </Root>
  </ErrorBoundary>

  , document.getElementById('root'));
registerServiceWorker();
