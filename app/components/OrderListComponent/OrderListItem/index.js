import React,{Component} from 'react';
export default class OrderListItem extends Component{
    render(){
        let {id,commentState,img,title,count,price} = this.props.data;
        return (
            <div>
                <img src={img} alt=""/>
                <div>
                    <h3>商户:{title}</h3>
                    <span>数量:{count}</span>
                    <span>价格:{price}</span>
                </div>
                <div>
                    <button>评价</button>
                </div>
            </div>
        )
    }
}