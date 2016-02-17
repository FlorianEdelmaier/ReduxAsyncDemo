import * as consts from './constants';

const defaultAuthState = {
    isFetching: false,
    isAuthenticated: false
}

function auth(state = defaultAuthState, action) {
    switch (action.type) {
        case consts.LOGIN_REQUEST:
            console.log("RED: LOGIN REQ");
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            });
        case consts.LOGIN_SUCCESS:
            console.log("RED: LOGIN SUC");
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            });
        case consts.LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            });
        default:
            return state;
    }
}

export default auth;
