import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/App';

import { Provider } from 'react-redux';
import store from 'services/redux/store';

import "assets/styles/index.scss";

ReactDOM.render( 
    <Provider store={store}>
      <React.StrictMode>
          <App />
      </React.StrictMode>

    </Provider>,
  document.getElementById('root')
);


