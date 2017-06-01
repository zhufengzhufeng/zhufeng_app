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
                {this.state.data.length?<OrderListComponent data={this.state.data} commitComment={this.commitComment.bind(this)}/>:<div>正在加载</div>}
            </div>
        )
    }
    //提交评价内容到后台
    commitComment(id,comment,callback){ //内容 商户id  callback更改评价状态
        console.log(id,comment);
        //callback()
    }
    componentDidMount(){
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{
            this.setState({
                data
            });
        })
    }
}