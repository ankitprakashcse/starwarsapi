import {searchConstants} from './type';
import Bucket from './../utilityfiles/bucket';
import {now} from "moment";

let bucket = new Bucket(15, 60000, 15, 15, now());
const URL = 'https://swapi.co/api/';

export function searchPlanets(searchtext){
    return function(dispatch){
        if (localStorage.getItem('username') !== "Luke Skywalker"){
            bucket.refill();
            if (bucket.value === 0){
                alert("API rate-limit exceeed.!")
                return dispatch(failure("No limit.."));
            }else {
                bucket.value = bucket.value - 1;
            }
        }
       dispatch(request(searchtext));
       return fetch(`${URL}planets/?search=${searchtext}`)
        .then(res => {
                    if (res.status >= 400) {
                        dispatch(failure(res.statusText))
                        alert(res.statusText)
                        throw new Error("Bad response from server");
                    }
                    return res.json();
                })
            .then(planets => {
                dispatch(success(planets.results))
            })
            .catch(err => {
                dispatch(failure(err))
                console.error(err);
            });
    }
    function request() {
        return {type: searchConstants.SEARCH_REQUEST}
    }

    function success(planets) {
        return {type: searchConstants.SEARCH_SUCCESS, planets}
    }

    function failure(error) {
         return {type: searchConstants.SEARCH_FAILURE, error}
    }
}

export function selectPlanet(item) {
    return function (dispatch) {
        dispatch(select(item))
    }
    function select(selectedplanet) { return { type: searchConstants.PLANET_SELECT, selectPlanet: item } }
}