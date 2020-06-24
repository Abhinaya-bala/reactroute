import React from "react";

function SingleItem(props){
    const { data }=this.props
    return(
        <div style={{"border":"1px solid black"}}>
            <img width="100" height="100" src={data.img} alt={data.name} />
            <label>{data.name}</label>
            <label>{data.size}</label>
            <label>{data.category}</label>
            <label>{data.price}</label>
        </div>
    )
}

export default SingleItem;