import React, { Component } from "react";
import { AppContext } from '../AppProvider';
import { Redirect } from "react-router-dom";

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state={
            name:'',
            phone:''
        }
    }

    handlChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    render() {
        const { getCart, placeOder, getFlag } = this.context
        let data = getCart()
        let flag=getFlag()
        console.log(data)

        if(flag){
            return <Redirect to="/order" />
        }
        return (
            <div>

                <div>
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={this.handlChange} name="name" />
                    <label>Phone</label>
                    <input type="text" value={this.state.phone} onChange={this.handlChange} name="phone" />
                    <button onClick={()=>placeOder({name:this.state.name,phone:this.state.phone,data:data})} >submit</button>
                </div>
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