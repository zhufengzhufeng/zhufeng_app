import React,{Component} from 'react';
import RouterMap from "../routes/index";
import {connect} from 'react-redux';
//绑定actionCreator组成的对象
import {bindActionCreators} from 'redux';
//获取所有actionCreator组成的对象
import * as Actions from '../actions/userInfo'
class App extends Component{
    constructor(){
        super();
        this.state = {
            done:false
        }
    }
    render(){
        return (
            <div>
                {/*如果当路径为/ RouterMap 就会变为Home组件*/}
                {this.state.done?<RouterMap/>:<div>正在加载</div>}
            </div>
        )
    }
    componentDidMount(){
        //先去本地查找 是否存储过localstorage名字叫cityName的
        //1.没有cityName ，赋予一个默认值 杭州
        //2.将当前的城市存放到redux


        this.setState({
            done:true
        });
        console.log(this.props.userActions);
    }
}
export default connect(
    state=>{ // mapStateToProps
        return {}
    },
    dispatch=>{ //mapDispatchToProps
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App)