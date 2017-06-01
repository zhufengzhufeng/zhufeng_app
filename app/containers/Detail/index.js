import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import Info from "./subpage/Info";
import Comment from "./subpage/Conment";
import Buy from "../../components/Buy/index";
import {connect} from 'react-redux';
import * as Actions from '../../actions/store';
import {bindActionCreators} from 'redux';
//通过路由渲染的组件都会在this.props上增加很多属性，例如history,match....
class Detail extends Component{
    constructor(){
        super();
        this.state = {
            isStore:false
        }
    }
    render(){
        return (
            <div>
                {/*头部*/}
                <HeaderComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>

                {/*购买和收藏*/}
                <Buy buy={this.buy.bind(this)} store={this.store.bind(this)} isStore={this.state.isStore}/>

                {/*评论*/}
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
    componentDidMount(){
        //先从redux中获取所有的收藏列表 [] ,如果有显示已收藏，没有就是未收藏i
        //1.拿到当前商户的id
        let id = this.props.match.params.id;
        //2.去收藏的数组中查询
        //数组的some 如果数组中返回 则返回true 否则为false
        let flag = this.props.store.some(item=>item===id);
        if(flag){ //如果收藏过 改变状态为收藏
            this.setState({
                isStore:flag
            });
        }
    }
    checkLogin(){
        //检测是否登录，登录过返回true 未登录返回false
        if(this.props.userInfo.username){
            return true;
        }
        return false;
    }
    buy(){ //购买
        let flag = this.checkLogin();
        //如果登录成功点击购买
        if(flag){
            this.props.history.push('/user');
        }else{
            //如果登录成功后，还要跳回当前页面  // /login/detail/123132   /login/asdasd
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id));
        }
        //....调到用户页

    }
    store(){ //收藏
        //验证是否登录，如果没登录让他去登录，如果登录成功跳回详情页
        let flag = this.checkLogin();
        if(!flag){ //如果没登录 则跳转到登录页
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id));
        }
        let id = this.props.match.params.id;
        if(this.state.isStore){
            //在store中移除掉
            this.props.storeActions.remove(id);
        }else{
            //添加到store中
            this.props.storeActions.add(id);
        }
        this.setState({
            isStore:!this.state.isStore
        })
    }
}
export default connect(
    state=>{
        return {
            userInfo:state.userInfo,
            store:state.store//这里存放的是 收藏的数组
        }
    },
    dispatch=>{
        return {
            storeActions:bindActionCreators(Actions,dispatch)
        }
    }
)(Detail)