import React,{Component} from 'react';
import {getList} from '../../../fetch/home'
import ListComponent from "../../../components/ListComponent/index";
import LoadMore from "../../../components/LoadMore/index";
export default class List extends Component{
    constructor(){
        super();
        this.state = {
            hasMore:true, //是否有更多
            data:[],//所有数据
            page:0,//页码
            isLoading:true//是否正在加载
        }
    }
    render(){
        return (
            <div>
                {/*将数据传递给ListComponent组件 让其展示*/}
                {this.state.data.length?
                    <ListComponent data={this.state.data}/>
                    :<div>正在加载</div>}
                <LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} isLoading={this.state.isLoading}/>
            </div>
        )
    }
    componentDidMount(){
        this.processData(getList(this.props.cityName,0));
    }
    //需要在当前写一个加载更多的函数，传递给loadMore，当点击按钮，触发我们传递函数
    loadMore(){
        console.log('loading more.....');
        this.setState({
            page:this.state.page+1,
            isLoading:true//每次加载更多时，状态都应该为正在加载
        },()=>{ //这个函数可以获取到最新的页码的状态
            this.processData(getList(this.props.cityName,this.state.page));
        });
    }

    //处理成功后的逻辑
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            });
        })
    }
}