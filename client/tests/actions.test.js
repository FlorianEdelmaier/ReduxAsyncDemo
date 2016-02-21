import expect from 'expect';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './../src/constants';
import { loginRequest, loginSuccess, loginFailure, login } from './../src/actions';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ACTIONS:', () => {
    describe('Login requested', () => {
        it('should return action object', () => {
            let output = loginRequest();
            let expected = { type: LOGIN_REQUEST };
            expect(output).toEqual(expected);
        });
    });
    describe('Login success', () => {
        it('should return action object', () => {
            let output = loginSuccess({firstName: 'x', lastName: 'y'});
            let expected = { type: LOGIN_SUCCESS, user: { firstName: 'x', lastName: 'y'}};
            expect(output).toEqual(expected);
        });
    });
    describe('Login error', () => {
        it('should return action object', () => {
            let output = loginFailure("wrong user");
            let expected = { type: LOGIN_FAILURE, message: "wrong user"};
            expect(output).toEqual(expected);
        });
    });
    describe('Login', () => {
        afterEach(() => {
            nock.cleanAll();
        });
        describe('Login with valid credentials', () => {
            it('should return user instance', (done) => {
                let request = nock('http://localhost:2000')
                    .post('/api/login')
                    .reply(200, { user: {
                            firstName: "abc",
                            lastName: "def"
                        }
                    });
                const expectedActions = [
                    { type: LOGIN_REQUEST },
                    { type: LOGIN_SUCCESS, user: { firstName: "abc", lastName: "def" } }
                ];
                const store = mockStore({ }, expectedActions, done);
                store.dispatch(login({userName: 'x', password: 'y'}));
            });
        });
        describe('Login with invalid credentials', () => {
            it('should return error message', (done) => {
                nock('http://localhost:2000')
                    .post('/api/login')
                    .replyWithError("wrong user");
                const expectedActions = [
                    { type: LOGIN_REQUEST },
                    { type: LOGIN_FAILURE, message: "request to http://localhost:2000/api/login failed, reason: wrong user" }
                ];
                const store = mockStore({ }, expectedActions, done);
                store.dispatch(login({userName: 'a', password: 'z'}));
            });
        });
    });
})
