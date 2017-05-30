import React,{Component} from 'react';
import RouterMap from "../routes/index";
import {connect} from 'react-redux';
//绑定actionCreator组成的对象
import {bindActionCreators} from 'redux';
//获取所有actionCreator组成的对象
import * as Actions from '../actions/userInfo';
import {getStorage} from '../local'
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
        let cityName = getStorage('cityName');
        if(cityName == null){
            cityName = '杭州'
        }
        //页面加载后，设置一个城市
        this.props.userActions.update({
            cityName
        });
        this.setState({
            done:true
        });

    }
}
export default connect(
    state=>{
        return {}
    },
    dispatch=>{ //mapDispatchToProps
        return {
            //dispatch(action,data);
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App)//将状态和动作以属性的形式传递给了App