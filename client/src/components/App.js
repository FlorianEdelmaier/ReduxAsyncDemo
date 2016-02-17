import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { loginUser } from './../actions';

class App extends React.Component {
    render() {
        const { dispatch } = this.props;
        console.log(this.props);
        return (
            <div>
                <Login />
                <h1>Test</h1>
            </div>
        );
    }
}

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(Login);
