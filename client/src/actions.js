import * as consts from './constants';
import fetch from 'isomorphic-fetch';

export function loginRequest() {
  return {
    type: consts.LOGIN_REQUEST
  };
}

export function loginSuccess(user) {
    return {
        type: consts.LOGIN_SUCCESS,
        user: user
    };
}

export function loginFailure(message) {
    return {
        type: consts.LOGIN_FAILURE,
        message: message
    };
}

export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error;
    }
}

export function login(creds) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded'},
        body: `username=${creds.username}&password=${creds.password}`
    };
    return (dispatch) => {
        dispatch(loginRequest(creds));

        return fetch('http://localhost:2000/api/login', config)
            .then(checkHttpStatus)
            .then(response => response.json())
            .then(response => {
              dispatch(loginSuccess(response.user));
            })
            .catch(err => { dispatch(loginFailure(err.message)); });
    }
}


export function setCredUserName(uname) {
    
}
