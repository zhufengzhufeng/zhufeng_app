import React,{Component} from 'react';
import './index.less'
export default class ChooseCity extends Component{
    render(){
        return (
            <div className="city">
                <h3>选择城市</h3>
                <ul>
                    <li onClick={this.props.changeCity.bind(this,'北京')}>北京</li>
                    <li onClick={this.props.changeCity.bind(this,'上海')}>上海</li>
                    <li onClick={this.props.changeCity.bind(this,'杭州')}>杭州</li>
                    <li onClick={this.props.changeCity.bind(this,'天津')}>天津</li>
                    <li onClick={this.props.changeCity.bind(this,'黑龙江')}>黑龙江</li>
                    <li onClick={this.props.changeCity.bind(this,'河北')}>河北</li>
                </ul>
            </div>
        )
    }
}
