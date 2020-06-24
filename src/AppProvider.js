import React, { createContext, Component } from "react";
import data from "./data.json";
export const AppContext = createContext();

class AppProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            cart: [],
            orderArr:[],
            flag:false
        }
    }

    getData = () => {
        return this.state.data
    }

    getCart = () => {
        return this.state.cart
    }

    getOrderArr=()=>{
        return this.state.orderArr
    }

    getFlag=()=>{
        return this.state.flag
    }

    addToCart = (payload) => {
        var item = this.state.data.find(ele => ele.id == payload)
        this.setState({
            cart: [...this.state.cart, item]
        })
    }

    placeOder=(payload)=>{
        this.setState({
            orderArr: [...this.state.orderArr, payload],
            flag:true
        })
    }

    render() {
        const methods = {
            getData: this.getData,
            addToCart: this.addToCart,
            getCart: this.getCart,
            getOrderArr:this.getOrderArr,
            placeOder:this.placeOder,
            getFlag:this.getFlag
        }
        return (
            <AppContext.Provider value={methods}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;