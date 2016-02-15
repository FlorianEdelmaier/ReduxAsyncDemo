import * as consts from './constants';

function requestLogin(creds) {
  return {
    type: consts.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    credentials: creds
  };
}
