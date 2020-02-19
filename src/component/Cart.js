import React, { Component } from 'react';
import uuid from 'uuid';
import Itenary from './Itenary';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }

    }
    componentDidMount() {
        let cartData = JSON.parse(localStorage.getItem("cart"));
        this.setState({ "cart": cartData });
    }

    // delete = (eachCart_id) => {
    //     let x = this.state.cart.filter(eachCart => {
    //         if (eachCart.id === eachCart_id) {
    //             return false;
    //         }
    //         return true;
    //     })
    //     localStorage.setItem("cart", JSON.stringify(x))
    //     this.setState({ "cart": x })
    // }

    delete = (eachCart_id) => {
        console.log("helloo")
        let x = this.state.cart.filter(eachCart => {
            if (eachCart.id === eachCart_id) {
                return false;
            }
            return true;
        })
        localStorage.setItem("cart", JSON.stringify(x))
        this.setState({ "cart": x })
    }
    render() {
        return (
            <div>
                <div>
                    <Link to={'./Itenary'}>go to product</Link>
                    {this.state.cart.map(eachCart => {
                        return (<div>
                            <span>{eachCart.name}</span>
                            {eachCart.Price}
                            {/* <button onClick={this.remove(eachCart.id)}>Delete</button> */}

                            {/* <button onClick={this.delete(eachCart.id)}>Del</button> */}
                            <button className="btn btn-primary" onClick={()=>this.delete(eachCart.id)}>Remove</button>

                        </div>)

                    }
                    )}

                </div>
            </div>
        )
    }
}




