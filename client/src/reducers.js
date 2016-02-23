import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, CRED_USERNAME_SET, CRED_PWD_SET } from './constants';

const defaultAuthState = {
    isFetching: false,
    isAuthenticated: false,
    cred: { userName: '', pwd: '' },
    user: { firstName: '', lastName: '' },
    errorMessage: ''
}

function auth(state = defaultAuthState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: undefined,
                errorMessage: ''
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                user: action.user,
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                user: undefined,
                errorMessage: action.message
            });
        case CRED_USERNAME_SET:
            return Object.assign({}, state, {
                cred: { userName: action.userName }
            });
        case CRED_PWD_SET:
            return Object.assign({}, state, {
                cred: { pwd: action.pwd }
            });
        default:
            return state;
    }
}

export default auth;
