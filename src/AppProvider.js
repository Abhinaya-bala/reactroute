import React, { createContext, Component } from "react";
import data from "./data.json";
export const AppContext = createContext();

class AppProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            cart: [],
            orderArr: [],
            flag: false,
            user: {
                userName: "admin",
                password: "admin"
            },
            isAuth: false
        }
    }

    getData = () => {
        return this.state.data
    }

    login = (payload) => {
        console.log(payload)
        var name = payload.name
        var password = payload.password
        if (this.state.userName == name && this.state.password == password) {
            this.setState({
                isAuth: true
            })
        }
    }
    getAuth = () => {
        return this.state.isAuth
    }

    getCart = () => {
        return this.state.cart
    }

    getOrderArr = () => {
        return this.state.orderArr
    }

    getFlag = () => {
        return this.state.flag
    }

    addToCart = (payload) => {
        var item = this.state.data.find(ele => ele.id == payload)
        this.setState({
            cart: [...this.state.cart, item]
        })
    }

    placeOder = (payload) => {
        this.setState({
            orderArr: [...this.state.orderArr, payload],
            flag: true
        })
    }

    render() {
        const methods = {
            getData: this.getData,
            addToCart: this.addToCart,
            getCart: this.getCart,
            getOrderArr: this.getOrderArr,
            placeOder: this.placeOder,
            getFlag: this.getFlag,
            login: this.login,
            isAuth: this.isAuth
        }
        return (
            <AppContext.Provider value={methods}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;