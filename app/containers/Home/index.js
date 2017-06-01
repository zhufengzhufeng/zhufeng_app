import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import Slider from "../../components/Slider/index";
import Ad from "./subpage/Ad";
import {connect} from 'react-redux';
import List from "./subpage/List";
class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName} history={this.props.history}/>
                <Slider/>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}
//取出redux中的城市传递给HomeHeader组件
export default connect(
    state=>{
        return {userInfo:state.userInfo} //取出redux state中userInfo的数据，赋予给变量userInfo
    }
)(Home);