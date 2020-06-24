import React, { useContext, Component } from "react";
import { AppContext } from "../AppProvider";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''

        }
        console.log(this.context)
    }

    handlChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleLogin = (e) => {
        const { login } = this.context
        login({ name: this.state.name, password: this.state.password })
        this.props.history.push('/')
    }

    render() {
        const { login } = this.context
        return (
            <div style={{ "border": "1px solid black", "display": "flex", "flexDirection": "column" }}>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.handlChange} name="name" />
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={this.handlChange} name="password" />
                <button onClick={() => this.handleLogin()} >Login</button>
            </div >
        )
    }
}

Login.contextType = AppContext;
export default Login;