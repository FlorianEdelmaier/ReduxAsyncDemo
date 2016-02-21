import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

const defaultAuthState = {
    isFetching: false,
    isAuthenticated: false,
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
        default:
            return state;
    }
}

export default auth;
