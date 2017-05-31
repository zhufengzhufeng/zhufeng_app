import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';//拿到所有actionCreator的对象
import {bindActionCreators} from 'redux';
import LoginComponent from "../../components/LoginComponent/index";
class Login extends Component{
    constructor(){
        super();
        this.state = {
            login:false//默认没登录过，写一个方法校验是否登录,默认不显示登录组件
        }
    }
    render(){
        return (
            <div>
                <HeaderComponent title="登录" history={this.props.history}/>
                {/*如果登录过 显示登录组件，否则不显示直接跳转用户页面*/}
                {this.state.login?<LoginComponent/>:<div></div>}
            </div>
        )
    }
    componentDidMount(){
        this.checkLogin();
    }
    checkLogin(){ //检查是否登录，在redux中 state.userInfo 是否有username，如果有则登录过
        if(this.props.userInfo.username){
            return this.props.history.push('/user');
        }
        this.setState({
            login:true, //显示登录组件
        });
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(Login)