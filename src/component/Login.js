import React, { Component } from 'react'
// import { BrowserRouter,browserHistory as Router } from 'react-router-dom';
// import { Router} from 'react-router';
// import { Router, browserHistory } from 'react-router';
// import routes from './routes';
import Register from './Register';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
// import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
export default class Login extends Component {
   
    constructor(props) {
        super(props);
        this.state={
            email:"",
            password:"",
            toItenary:false
        }
    }

 
    loginInputChange=(e,str)=>{
        this.setState({[str]:e});

    }

    buttonClick1 = (e) => {
        let y = JSON.parse(localStorage.getItem("form_filled"));
        // console.log(y)
        let email = this.state.email;
        let password = this.state.password;
        let loginUser = {}
        y.forEach(eachUser => {
            if (email === eachUser.email && password === eachUser.password) {
                loginUser = eachUser;
                localStorage.setItem("loginUser", JSON.stringify(loginUser));
                this.setState({toItenary:true})
            } 

        });
            
       
    // e.preventDefault();
        
    }
   
    render() {

        if(this.state.toItenary===true)
        {
            return <Redirect to ="/itenary" />
        }
        return (
            <div hidden={this.props.isLogin}>
                <label>Email</label>
                <input type="email" placeholder="entered registered email" value={this.state.email} onChange={(e) => this.loginInputChange(e.target.value, 'email')} />
                <br /> <br />
                <label>Password</label>
                <input type="password" placeholder="enter registered password" value={this.state.password} onChange={(e) => this.loginInputChange(e.target.value, 'password')} />
                <br /> <br />
                <button type="submit" onClick={this.buttonClick1}>Login </button>
                {/* <Link to={'/itenary'}>Login</Link> */}
            </div>
        )
    }
}
