import React,{Component} from 'react';
//路由的两种类型 HashRouter BrowserRouter
import {
    HashRouter as Router, //提供一个路由容器
    Route,//单条路由
    Switch //只匹配一次
} from 'react-router-dom';
import Home from '../containers/Home';
import Detail from "../containers/Detail";
import Login from "../containers/Login";
import User from "../containers/User";
import City from "../containers/City";
import Search from "../containers/Search";
export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        {/*只有当路径为/的时候才匹配路由*/}
                        <Route exact path='/' component={Home}/>
                        <Route path='/detail/:id' component={Detail}/>
                        {/*点击先跳转到登录页，登录后 再回到登录之前的页面，在login路径后可能需要保存上次点击login的路径,如果登录过在登录跳转到用户页面*/}
                        <Route path="/login/:route?" component={Login}/>
                        <Route path="/user" component={User}/>
                        <Route path="/city" component={City}/>
                        <Route path="/search/:kind/:keyword?" component={Search}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}