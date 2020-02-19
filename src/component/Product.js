import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props)
    {
        super(props);
        
    }
    render() {
        return (
            <div class="card m-2" style={{ "width": "18rem"}}>
                    <img src={this.props.item.url} class="card-img-top" alt="fsdfgs" />
                    <div class="card-body">
                        <h5 class="card-title">{this.props.item.name}</h5>
                        <button type="submit" className="btn btn-primary" onClick={()=>this.props.addCart(this.props.item)}>Rs. {this.props.item.Price}</button>
                    </div>
                </div>
        )
    }
}
