import * as consts from './constants';

function requestLogin(creds) {
  return {
    type: consts.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    credentials: creds
  };
}

function receiveLogin(user) {
    return {
        type: consts.LOGIN_SUCCES,
        isFetching: false,
        isAuthenticated: true
    };
}

function errorLogin(message) {
    return {
        type: consts.LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message: message
    };
}

export function loginUser(creds) {
    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded'},
        body: `username=${cred.username}&password=${creds.password}`
    };
    return dispatch => {
        dispatch(requestLogin(creds));

        return fetch('http://localhost:2000/api/login', config)
            .then(response => response.json())
            .catch(err => console.log("ERROR: ", err));
    }
}
