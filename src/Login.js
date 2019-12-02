import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
              email   : '',
              password: '',
        };
    }


    send(event){
        event.preventDefault();
        if(this.state.email === ''){
                alert('Email is required');
        }else if(this.state.password === ''){
                alert('Password is required');
        }else {
            if(this.state.email === 'ahmed@gmail.com' && this.state.password === '123'){
                this.props.history.push('/Home')
            }else{
                alert('Password or email is invalid');
            }
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.send.bind(this)}>
                     <input type="text" name="email" value={this.state.email} onChange={e => {this.setState({email : e.target.value})}} />
                     <input type="password" name="password"  value={this.state.password} onChange={e => {this.setState({password : e.target.value})}} />
                     <button type="submit"  >Login</button>
                </form>
            </div>
        );
    }
}
export default withRouter(Login);