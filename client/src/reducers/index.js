import { combineReducers } from 'redux';
//Rename reducer as reduxForm
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducers';

import surveysReducer from './surveysReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer

})