import React,{Component} from 'react';
import {getInfo} from '../../../fetch/detail'
export default class Info extends Component{
    render(){
        return (
            <div>
                Info
            </div>
        )
    }
    componentDidMount(){
        getInfo(this.props.id).then(res=>res.json()).then(data=>{
            console.log(data);
        })
    }
}