import React,{Component} from 'react';
import {getComment} from '../../../fetch/detail'
import CommentComponent from "../../../components/CommentComponent/index";
import LoadMore from "../../../components/LoadMore/index";
export default class Comment extends Component{
    constructor(){
        super();
        this.state = {
            page:0,
            data:[],
            hasMore:true,
            isLoading:true
        }
    }
    render(){
        return (
            <div>
                {/*评价列表*/}
                {this.state.data.length?
                    <CommentComponent data={this.state.data}/>:
                    <div>正在加载</div>
                }
                <LoadMore isLoading={this.state.isLoading} hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)}/>
            </div>
        )
    }
    //获取数据，默认加载第一页 下拉刷新获取更多
    componentWillMount(){
        this.processData(getComment(this.props.id,0));
    }
    loadMore(){ //用来加载更多的方法
        this.setState({
            isLoading:true,
            page:this.state.page+1
        },()=>{
            this.processData(getComment(this.props.id,this.state.page));
        })
    }
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            })
        });
    }
}