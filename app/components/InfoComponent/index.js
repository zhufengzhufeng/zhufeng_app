import React,{Component} from 'react';
import Star from "../Star/index";
export default class InfoComponent extends Component{
    render(){
        let {img,star,desc,title,subTitle,price} = this.props.data;
        return (
            <div>
                <div>
                    <img src={img} alt=""/>
                    <div>
                        <h3>{title}</h3>
                        <div>
                            {/*star组件要接收一个点亮的星星数量*/}
                            <Star count={star}/> <span>￥{price}</span>
                        </div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                {/*将内容转换成html插入到页面中*/}
                <div dangerouslySetInnerHTML={{__html:desc}}></div>
            </div>
        )
    }
}