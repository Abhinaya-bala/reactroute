import React, { useContext } from "react";
import { AppContext } from "../AppProvider"

function SingleItem(props) {
    const { data } = props
    const item = useContext(AppContext)
    const { addToCart } = item
    //  console.log(item)
    return (
        <div style={{ "border": "1px solid black", "display": "flex", "flexDirection": "column" }}>
            <img width="100" height="100" src={data.img} alt={data.name} />
            <label>{data.name}</label>
            <label>{data.size}</label>
            <label>{data.category}</label>
            <label>{data.price}</label>
            <button onClick={() => addToCart(data.id)} >Add to Cart</button>
        </div>
    )
}

export default SingleItem;