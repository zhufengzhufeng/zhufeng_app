import React,{Component} from 'react';
import OrderListItem from "./OrderListItem/index";
export default class OrderListComponent extends Component{
    render(){
        return (
            <div>
                <h3>订单列表</h3>
                {this.props.data.map((item,index)=>(
                    <OrderListItem key={index} data={item} commitComment={this.props.commitComment}/>
                ))}
            </div>
        )
    }
}