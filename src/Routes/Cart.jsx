import React, { Component } from "react";
import { AppContext } from '../AppProvider';

class Cart extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { getCart } = this.context
        let data = getCart()
        console.log(data)
        return (
            <div>
                {data && data.map((data, index) => {
                    return (
                        <div style={{ "border": "1px solid black", "display": "flex", "flexDirection": "column" }} key={index}>
                            <img width="100" height="100" src={data.img} alt={data.name} />
                            <label>{data.name}</label>
                            <label>{data.size}</label>
                            <label>{data.category}</label>
                            <label>{data.price}</label>
                        </div>
                    )
                })}
            </div>
        )
    }
}

Cart.contextType = AppContext;
export default Cart;