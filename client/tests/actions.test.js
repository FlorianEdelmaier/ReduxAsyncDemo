import expect from 'expect';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './../src/constants';
import { requestLogin, receiveLogin, errorLogin } from './../src/actions';

describe('ACTIONS:', () => {
    describe('Request Login', () => {
        it('should return action object', () => {
            let output = requestLogin();
            let expected = { type: LOGIN_REQUEST, isFetching: true, isAuthenticated: false };
            expect(output).toEqual(expected);
        });
    });
    describe('Receive Login', () => {
        it('should return action object', () => {
            let output = receiveLogin({firstName: 'x', lastName: 'y'});
            let expected = { type: LOGIN_SUCCESS, isFetching: false, isAuthenticated: true, user: { firstName: 'x', lastName: 'y'}};
            expect(output).toEqual(expected);
        });
    });
    describe('Error Login', () => {
        it('should return action object', () => {
            let output = errorLogin("wrong user");
            let expected = { type: LOGIN_FAILURE, isFetching: false, isAuthenticated: false, message: "wrong user"};
            expect(output).toEqual(expected);
        });
    });
    describe('Login User', () => {
        it('should follow login workflow', () => {
            expect(true).toEqual(true);
        });
    });
})
