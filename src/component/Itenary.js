import React, { Component } from 'react'
import Product from './Product';
import Cart from './Cart';
import {Link} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import uuid from 'uuid';
export default class Itenary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: [],
           
            toLogin:false
            }
    }

    componentDidMount() {
      
        let items = JSON.parse(localStorage.getItem("Items"));
        // items.id=uuid();
        // let obj={'': this.state.products, id: uuid()}
        // items.push(obj);
        // console.log(items)
        this.setState({ "products": items });
       
    }

    addCart=(cart_Item)=>
    {
        // console.log(cart_Item)
        let cartValue=JSON.parse(localStorage.getItem("cart"));
        if(cartValue===null)
        {
            cartValue=[];	
        }
        
        
        
        cartValue.push(cart_Item);
       
        localStorage.setItem("cart",JSON.stringify(cartValue));
        console.log(cartValue)
    }

    out=()=>
    {   
        let w= JSON.parse(localStorage.getItem("loginUser"));
        w=[];
        localStorage.setItem("loginUser",JSON.stringify(w));
        this.setState({toLogin:true});
    }

    

    render() {
        if(this.state.toLogin===true)
        {
            return <Redirect to ="/login" />
        }
        return (
            <div>
                <div>
                    <center><h2>Shopping List</h2>
                    <button onClick={this.out}>Logout</button>
                    </center>
                    
                   <Link to ={'/cart'}>Go to Cart</Link>
                </div>
                 <div>
                {
                        this.state.products.map(eachProduct=>{
                        return(<Product item={eachProduct} addCart={this.addCart}/>)
                    })
                }
                </div>
               
            </div>
        )
    }
}
