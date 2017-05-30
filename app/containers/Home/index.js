import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
export default class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName="北京"/>
            </div>
        )
    }
}