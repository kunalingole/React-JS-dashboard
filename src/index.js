import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';

import { Provider} from 'react-redux';
import { createStore,applyMiddleware,compose} from 'redux';

import reduxThunk from  'redux-thunk';
import  rootReducer from './reducers';
import history from './history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(reduxThunk)));
    


ReactDOM.render(<Router history={history} ><Provider store={store}><App /></Provider></Router> , document.getElementById('root'));

serviceWorker.unregister();
