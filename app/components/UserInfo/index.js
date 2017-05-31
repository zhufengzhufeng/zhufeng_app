import React,{Component} from 'react';
import './index.less'
export default class UserInfo extends Component{
    render(){
        return (
            <div className="user-info">
                <span>
                    用户名:{this.props.userInfo.username}</span>
                <span>
                    城市:{this.props.userInfo.cityName}</span>
            </div>
        )
    }
    //检查是否登录如果没登录过 跳转到登录页
}