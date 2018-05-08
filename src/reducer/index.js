import { combineReducers } from 'redux';
import {userConstants, searchConstants} from '../action/type';

let user =localStorage.getItem('username');
const initialState = user ? { loggedIn: true, user } : {};
/* authenticate manages states related to login and logout */
export function authentication(state=initialState,action){
    switch(action.type){
        case userConstants.LOGIN_REQUEST:
            return { loggingIn: true, loggedIn: false }
        case userConstants.LOGIN_SUCCESS:
            return { loggingIn: false, loggedIn: true, username: action.username }
        case userConstants.LOGIN_FAILURE:
            return { loggingIn: false }
        default:
            return state;

    }
}

/* manage state realted to planet search */

function planetsReducer(state = {}, action) {

    switch (action.type) {

        case searchConstants.SEARCH_REQUEST:
            return { ...state, isFetching: true }

        case searchConstants.SEARCH_SUCCESS:
            return { ...state, planets: action.planets, isFetching: false }

        case searchConstants.SEARCH_FAILURE:
            return { ...state, planets: [], isFetching: false }

        case searchConstants.PLANET_SELECT:
           // console.log(action.selectPlanet)
            return { ...state, selectPlanet: action.selectPlanet }

        default:
            return state
    }
}


const mainReducer = combineReducers({
    authentication,
    planetsReducer

})

const rootReducer = (state, action) => {
    if (action.type === userConstants.LOGOUT) {
        state = undefined;
    }

    return mainReducer(state, action)
}

export default rootReducer;