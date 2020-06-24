import React, { Component } from "react";
import { AppContext } from '../AppProvider';

class Order extends Component {
    render() {
        const {getOrderArr } = this.context
        let data = getOrderArr()
        console.log(data)
        return (
            <div>
                {
                    data && data.map((item,index)=>{
                        return (
                        <div key={index}>
                            <div>
                                <label>Name : {item.name}</label>
                                <label>Phone : {item.phone}</label>
                            </div>
                            {item.data && item.data.map((data, index) => {
                                return (
                                    <div style={{ "border": "1px solid black", "display": "flex", "flexDirection": "column" }} key={index}>
                                        <img width="100" height="100" src={data.img} alt={data.name} />
                                        <label>{data.name}</label>
                                        <label>{data.size}</label>
                                        <label>{data.category}</label>
                                        <label>{data.price}</label>
                                    </div>
                                )
                                })
                            }
                        </div>    
                    )
                })
            }
            </div>
        )
    }
}

Order.contextType = AppContext;
export default Order;