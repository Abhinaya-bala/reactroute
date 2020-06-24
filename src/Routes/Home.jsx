import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import SingleItem from '../components/SingleItem';
import { AppContext } from '../AppProvider';

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { getData, addtoCart, isAuth } = this.context
        let data = getData()
        console.log(data)
        if (!isAuth()) {
            return <Redirect to="/login" />
        }
        return (
            <div>
                {
                    data && data.map((ele, index) => {
                        return (<SingleItem key={index} data={ele} />)
                    })
                }
            </div>
        )
    }
}

Home.contextType = AppContext;
export default Home;