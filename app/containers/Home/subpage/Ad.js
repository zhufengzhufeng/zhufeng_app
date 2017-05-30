import React,{Component} from 'react';
import {getAd} from '../../../fetch/home';
import './index.less'
export default class Ad extends Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    render(){
        return (
            <div className="ad">
                <h3>超值特惠</h3>
                {this.state.data.length?
                    this.state.data.map((item,index)=>(
                        <a href={item.link} key={index}>
                            <img src={item.img} title={item.title}/>
                        </a>
                    )):
                    <div>正在加载</div>
                }
            </div>
        )
    }
    componentDidMount(){
        getAd().then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        });
    }
}