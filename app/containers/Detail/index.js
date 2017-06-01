import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import Info from "./subpage/Info";
import Comment from "./subpage/Conment";
import Buy from "../../components/Buy/index";
import {connect} from 'react-redux';
//通过路由渲染的组件都会在this.props上增加很多属性，例如history,match....
class Detail extends Component{
    render(){
        return (
            <div>
                {/*头部*/}
                <HeaderComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>

                {/*购买和收藏*/}
                <Buy buy={this.buy.bind(this)} store={this.store.bind(this)}/>

                {/*评论*/}
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
    componentDidMount(){
        //先从redux中获取所有的收藏列表 [] ,如果有显示已收藏，没有就是未收藏
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

    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    }
)(Detail)