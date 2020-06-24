import React, { Component } from "react";
import SingleItem from '../components/SingleItem';
import { AppContext } from '../AppProvider';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state={
            productDetails:[],
            item:[]
        }
    }

    componentDidMount(){
        let data=this.context.getData()
        let id=this.props.match.params.id
        let newProduct=data.find(ele=>ele.id==id)
        console.log(newProduct)
        this.setState({
            productDetails:data,
            item:[...this.state.item, newProduct]
        })
    }


    render() {
        const {item}=this.state;
        const {addToCart}= this.context;

        return (
            <div>
                {
                    item && item.map((data,index)=>{
                    return(<div key={index} style={{ "border": "1px solid black", "display": "flex", "flexDirection": "column" }}>
                        <img  width="100" height="100" src={data.img} alt={data.name} />
                        <label>{data.name}</label>
                        <label>{data.size}</label>
                        <label>{data.category}</label>
                        <label>{data.price}</label>
                        <button onClick={() => addToCart(data.id)} >Add to Cart</button>
                    </div>)
                    })
                }
            </div>
        )
    }
}

Product.contextType = AppContext;
export default Product;