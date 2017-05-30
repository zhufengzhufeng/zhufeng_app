import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import Slider from "../../components/Slider/index";
export default class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName="北京"/>
                <Slider/>
            </div>
        )
    }
}