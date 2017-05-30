import React,{Component} from 'react';
import {getAd} from '../../../fetch/home'
export default class Ad extends Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    render(){
        return (
            <div>
            </div>
        )
    }
    componentDidMount(){
        getAd().then(res=>res.json()).then(data=>{
            console.log(data);
            this.setState({
                data
            })
        });
    }
}