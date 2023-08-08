import { createStore, applyMiddleware, compose } from 'redux';
//import { composeWithDevTools } from 'redux-dev-tools'
import rootReducer from './reducer'
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);


/*
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
*/

export default store;