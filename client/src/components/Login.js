import React from 'react';
import { connect } from 'react-redux';
import { login } from './../actions';
import UserName from './UserName';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            pwd: '',
        };
    }
    onUserNameChange(ev) {
        this.setState({userName: ev.target.value});
    }
    onPwdChange(ev) {
        this.setState({pwd: ev.target.value});
    }
    handleButtonClick() {
        const credential = {username: this.state.userName, password: this.state.pwd};
        this.props.onLoginClick(credential);
    }
    render() {
        return (
            <div>
                <input type='text' placeholder='Username' onChange={(e) => this.onUserNameChange(e)} />
                <input type='text' placeholder='Password' onChange={(e) => this.onPwdChange(e)} />
                <button onClick={() => this.handleButtonClick()}>Login</button>
                <UserName user={this.props.user} />
            </div>
        );
    }
}

Login.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    onLoginClick: React.PropTypes.func.isRequired
}

export default Login;
