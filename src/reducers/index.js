import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import streamReducer from './streamReducer';
import { login } from './login.reducer';
import { registration } from './registration.reducer';
import reportReducer from './reports.reducer';

export default combineReducers({
    form:formReducer,
    streams:streamReducer,
    user:login,
    registration:registration,
    reports:reportReducer

})