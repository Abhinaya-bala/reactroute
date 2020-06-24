import React, { Component } from "react";
import { AppContext } from "../AppProvider";
import { Link, Redirect } from "react-router-dom";

class SingleItem extends Component {
    constructor(props) {
        super(props)
    }
    handleAddToCart = () => {
        const { data } = this.props
        const item = this.context
        const { addToCart, isAuth, login } = item
        console.log(isAuth)
        addToCart(data.id)

    }
    render() {
        const { data } = this.props
        const item = this.context
        const { addToCart, isAuth, login } = item
        console.log(addToCart)
        return (


            <div style={{ "border": "1px solid black", "display": "flex", "flexDirection": "column" }}>
                <Link to={`/product/${data.id}`}><img width="100" height="100" src={data.img} alt={data.name} /></Link>
                <label>{data.name}</label>
                <label>{data.size}</label>
                <label>{data.category}</label>
                <label>{data.price}</label>
                <button onClick={() => this.handleAddToCart()} >Add to Cart</button>
            </div>
        )
    }

    // if(!isAuth) {
    //     return <Redirect to="/login" />
    // }








}
SingleItem.contextType = AppContext;
export default SingleItem;