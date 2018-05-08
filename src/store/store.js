import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';
import rootReducer from '../reducer'

const initialState={}
const middleware=[thunk];

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer,initialState,compose(applyMiddleware(...middleware),reduxDevTool));

export default store;