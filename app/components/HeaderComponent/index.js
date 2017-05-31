import React,{Component} from 'react';
import './index.less'
export default class HeaderComponent extends Component{
    render(){

        return (
            <div className="back header-component">
                <i className="iconfont icon-fanhui" onClick={this.back.bind(this)}></i>
                <span>
                    {this.props.title}
                </span>
            </div>
        )
    }
    back(){
        this.props.history.go(-1);
    }
}