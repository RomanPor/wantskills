import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/app/app';
import {DataServiceProvider} from './components/data-service-context/data-service-context';
import DataService from './services/data-service'
import store from './store';

import './scss/uikit.scss';
import './scss/main.scss';

const dataService = new DataService();

ReactDOM.render(
    <Provider store={store}>
        <DataServiceProvider value={dataService}>
            <Router>
                <App />
            </Router>
        </DataServiceProvider>
    </Provider>,
  document.getElementById('root')
);
