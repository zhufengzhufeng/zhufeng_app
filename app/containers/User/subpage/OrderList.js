import React,{Component} from 'react';
import {getOrderList} from '../../../fetch/orderList'
import OrderListComponent from "../../../components/OrderListComponent/index";
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
                {this.state.data.length?<OrderListComponent data={this.state.data}/>:<div>正在加载</div>}
            </div>
        )
    }
    componentDidMount(){
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{
            this.setState({
                data
            });
        })
    }
}