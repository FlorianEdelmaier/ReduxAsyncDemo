import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from './../actions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            pwd: '',
            user: {
              firstName: '',
              lastName: ''
            }
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
                <br />
                <span>{this.state.user.firstName + " " + this.state.user.lastName}</span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("CONTAINER:");
    console.log(state);
    return {
      isAuthenticated: state.isAuthenticated,
      user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (cred) => {
      dispatch(loginUser(cred));
    }
  }
}

// Login.propTypes = {
//     isAuthenticated: React.PropTypes.bool.isRequired,
//     onLoginClick: React.PropTypes.func.isRequired
// }

export default connect(mapStateToProps, mapDispatchToProps)(Login);
