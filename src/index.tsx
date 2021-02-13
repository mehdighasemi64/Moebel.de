import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './reducers';
import BackGroundPage from './BackGroundPage';
import './fonts/Roboto-Bold.ttf'

const store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
      <BackGroundPage />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
