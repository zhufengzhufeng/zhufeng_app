import React,{Component} from 'react';
import {getOrderList} from '../../../fetch/orderList'
export default class OrderList extends Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    render(){
        return (
            <div>
                OrderList
            </div>
        )
    }
    componentDidMount(){
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{
            console.log(data);
            this.setState({
                data
            })
        })
    }
}