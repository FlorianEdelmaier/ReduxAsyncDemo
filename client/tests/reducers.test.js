import expect from 'expect';
import auth from './../src/reducers';
import { loginRequest, loginSuccess, loginFailure } from './../src/actions';

describe('REDUCERS:', () => {
    describe('Login Request', () => {
        it('should reset values and set isFetching bit', () => {
            let result = auth(undefined, loginRequest());
            let expected = {
                isFetching: true,
                isAuthenticated: false,
                user: undefined,
                errorMessage: ''
            };
            expect(result).toEqual(expected);
        });
    });
    describe('Login Success', () => {
        it('should set authentication props', () => {
            let result = auth(undefined, loginSuccess({ firstName: 'x', lastName: 'y' }));
            let expected = {
                isFetching: false,
                isAuthenticated: true,
                user: { firstName: 'x', lastName: 'y' },
                errorMessage: ''
            };
            expect(result).toEqual(expected);
        });
    });
    describe('Login Failure', () => {
        it('should clear all values and set error message', () => {
            let result = auth(undefined, loginFailure('exception'));
            let expected = {
                isFetching: false,
                isAuthenticated: false,
                user: undefined,
                errorMessage: 'exception'
            };
            expect(result).toEqual(expected);
        });
    });
});
