import {userConstants} from './type';
import { history } from './../utilityfiles/history';

const URL = 'https://swapi.co/api/';
/* async action creator*/ 
export function login(username,password){
    return dispatch => {
        dispatch(request({username}));
        callLoginAPI(username,password)
            .then(()=>{
                dispatch(success(username));
                history.push('/search');
            },error=>{
                dispatch(failure(error));
            })

    }

    function request(user){
        return {
            type:userConstants.LOGIN_REQUEST,
            user
        }
    }

    function success(user){
        return {
            type:userConstants.LOGIN_SUCCESS,
            username
        }
    }

    function failure(error){
        return{
            type:userConstants.LOGIN_FAILURE,
            error
        }
    }
}

function callLoginAPI(username,password){
    return fetch(`${URL}people/?search=${username}`)
        .then(res => {
            if(!res.ok){
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
            .then(data => {
              //  console.log("data ",data)
                let isLoggin=false;
                if(data && data.count > 0){
                    data.results.map(item => {
                        if(item.name && item.birth_year && item.name === username && item.birth_year === password){
                            isLoggin = true;
                            return true;
                        }
                    })
                }
                if(isLoggin){
                    localStorage.setItem('username',username);
                    return;
                }
                alert('Invalid credentails'); 
                return Promise.reject('Invalid Credentails')
            })
}


export function logout() {
    localStorage.removeItem('username');
    history.push('/');
    return {type: userConstants.LOGOUT};
}