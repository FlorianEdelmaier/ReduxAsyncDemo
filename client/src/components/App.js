import React from 'react';
import connect from 'react-redux';
import Login from './Login';
import { loginUser } from './../actions';

class App extends React.Component {
    render() {
        const { dispatch } = this.props;
        console.log(this.props);
        return (
            <div>
                <Login onLoginClick={cred => dispatch(loginUser(cred))} />
                <h1>Test</h1>
            </div>
        );
    }
}

function select(state) {
    return {
        isAuthenticated: false,
        user: {}
    };
}

export default connect(select)(App);
