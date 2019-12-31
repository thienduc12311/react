import React, { Component } from 'react';
import { userInfo } from 'os';
import MemeGenerator from '../MemeGenerator';

class LoginForm extends Component {
    state = {
        account: { username:'',password:'' }
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log("Submitted");
    }
    handleChange = ({ currentTarget: input}) =>{
        const account = { ...this.state.account};
        account[input.name]=input.value;
        this.setState({ account});
    };
    render(){
        const { account } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <lable htmlFor="">Username</lable>
                        <input 
                            value={account.username}
                            onChange={this.handleChange}
                            id="username" 
                            name="username"
                            type="text" 
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <lable htmlFor="">Password </lable>
                        <input 
                            value={account.password}
                            onChange={this.handleChange}
                            name="password"
                            id="password" 
                            type="password" 
                            className="form-control" />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form> 
            </div>);
            ;
        }
}
export default LoginForm;