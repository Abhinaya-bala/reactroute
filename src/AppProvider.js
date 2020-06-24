import React, {createContext, Component} from "react";
import data from "./data.json";
export const AppContext=createContext();

class AppProvider extends Component{
    constructor(props){
        super(props)
        this.state={
            data:data
        }
    }

    getData=()=>{
        return this.state.data
    }

    render(){
        const methods={
            getData:this.getData 
        }
        return(
            <AppContext.Provider value={methods}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;