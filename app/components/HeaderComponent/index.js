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
        if(this.props.back){ //手动跳转到 想要返回的路径
            this.props.history.push(this.props.back);
        }else{
            this.props.history.go(-1);
        }

    }
}