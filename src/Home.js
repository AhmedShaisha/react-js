import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Home extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                Welcome to home
                <label>Logout</label>
                <button onClick={() =>{ this.props.history.push('/Login')}}>Logout</button>
            </div>
        );
    }
}
export default withRouter(Home);