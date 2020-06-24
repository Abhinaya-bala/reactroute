import React, { useContext, Component } from "react";
import { AppContext } from "../AppProvider";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }

    handlChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { login } = this.context
        return (
            <div style={{ "border": "1px solid black", "display": "flex", "flexDirection": "column" }}>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.handlChange} name="name" />
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={this.handlChange} name="password" />
                <button onClick={() => login({ name: this.state.name, phone: this.state.password })} >Login</button>
            </div >
        )
    }
}

Login.contextType = AppContext;
export default Login;