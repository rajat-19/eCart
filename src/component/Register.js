import React, { Component } from 'react';
import uuid from 'uuid';
import { BrowserRouter as Router } from 'react-router-dom';
export default class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: "",
        id:uuid(),
        isLogin:false,
        // isUserActive: false
      }
    constructor(props) {
        super(props);
    }

    inputChange=(e,str)=> {
        this.setState({[str]:e});
      }

    registerButton=(e,str)=>
    {
            let name = this.state.name;
            let email = this.state.email;
            let password = this.state.email;
            let id = this.state.id;
            let x = JSON.parse(localStorage.getItem("form_filled"));
            let obj = { "id": id, "name": name, "email": email, "password": password };
            x.push(obj);
            localStorage.setItem("form_filled", JSON.stringify(x));
            this.setState({ isLogin: true })
            e.preventDefault();
    }  
    
    render() {
        return (
            <div>
                <form hidden={!this.state.isLogin}>
                    <label>Name</label>
                    <input type="text" placeholder="enter name" value={this.state.name} onChange={(e) => this.inputChange(e.target.value, 'name')} />
                    <br /> <br />

                    <label>Email</label>
                    <input type="text" placeholder="enter email" value={this.state.email} onChange={(e) => this.inputChange(e.target.value, 'email')} />
                    <br /> <br />

                    <label>Password</label>
                    <input type="password" placeholder="enter password" value={this.state.password} onChange={(e) => this.inputChange(e.target.value, 'password')} />
                    <br /> <br />
                    <label>Confirm Password</label>
                    <input type="password" placeholder="confirm password" value={this.state.confirmPassword} onChange={(e) => this.inputChange(e.target.value, 'confirmPassword')} />
                    <br /> <br />
                    <label>Messgae</label>
                    <textarea placeholder="enter message" value={this.state.message} onChange={(e) => this.inputChange(e.target.value, 'message')} />
                    <br /> <br />

                    <button type="submit" onClick={this.registerButton} className="btn btn-primary">Register</button>
                </form>
            </div>
        )
    }
}
