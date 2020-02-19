import React, { Component } from 'react';
import Register from './component/Register';
import Login from './component/Login';
import uuid from 'uuid';
import { BrowserRouter as Router } from 'react-router-dom';


export default class Auth extends Component {

  //   state = {
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   message: "",
  //   id:uuid(),
  //   isLogin:false,
  //   // isUserActive: false
  // }

  constructor(props) {
    super(props);
  }
    click = () => {
    // let name = this.state.name;
    // let email = this.state.email;
    // let password = this.state.email;
    // let id = this.state.id;
    // let x = JSON.parse(localStorage.getItem("form_filled"));

    // let obj = { "id": id, "name": name, "email": email, "password": password };

    // x.push(obj);
    // localStorage.setItem("form_filled", JSON.stringify(x));
    // this.setState({ isLogin: true })
    // e.preventDefault();

   
  }

  // loginInputChange = (e, str) => {
  //   this.setState({ [str]: e });
  // }
  
  click1 = (e, str,) => {
    // let y = JSON.parse(localStorage.getItem("form_filled"));
    // // console.log(y)
    // let email = this.state.email;
    // let password = this.state.password;
    // let loginUser = {}
    // y.forEach(eachUser => {
    //   if (email === eachUser.email && password === eachUser.password) {
    //     loginUser = eachUser;
    //     localStorage.setItem("loginUser", JSON.stringify(loginUser));
    //   }


    // });
   
   
    // e.preventDefault();
    // history.push('/itenary');
  }


  render() {
    return (
      <div>
      </div>


    )
  }
}




// [{"id":1, "name":"Raj", "email":"rajat@gmail.com", "password":"123456789"},{"id":2, "name":"Yash", "email":"yash@gmail.com", "password":"987654321"},{"id":3, "name":"Rahul", "email":"rahul@gmail.com", "password":"784122555"}]