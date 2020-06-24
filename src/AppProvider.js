import React, { createContext, Component } from "react";
import data from "./data.json";
export const AppContext = createContext();

class AppProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            cart: []
        }
    }

    getData = () => {
        return this.state.data
    }

    getCart = () => {
        return this.state.cart
    }

    addToCart = (payload) => {
        console.log(payload)
        var item = this.state.data.find(ele => ele.id == payload)
        console.log(item)
        this.setState({
            cart: [...this.state.cart, item]
        })
    }

    render() {
        const methods = {
            getData: this.getData,
            addToCart: this.addToCart,
            getCart: this.getCart,
        }
        return (
            <AppContext.Provider value={methods}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;