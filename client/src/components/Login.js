import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            pwd: ''
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
            </div>
        );
    }
}

Login.propTypes = {
    onLoginClick: React.PropTypes.func.isRequired
}

export default Login;
