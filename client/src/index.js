import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';



/*
    We are to provide one reducer that is now 
    going to be inside our redux store

    we are going to have 2 reducers 
    authReducer surveysReducer
    reducers,
*/
const store= createStore(reducers, {}, applyMiddleware(reduxThunk));

//index.js is something that it is enforced automatically by creat-react-app
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);
