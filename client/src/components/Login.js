import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                <input type='text' placeholder='Username' />
                <input type='text' placeholder='Password' />
                <button>Login</button>
            </div>
        );
    }
}

export default Login;
