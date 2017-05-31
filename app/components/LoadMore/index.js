import React,{Component} from 'react';
import './index.less'
export default class LoadMore extends Component{
    render(){
        return (
            <div className="has-more">
                {this.props.hasMore?
                    <div onClick={this.loadMore.bind(this)}>加载更多</div>
                    :<div>我是有底线的</div>}
            </div>
        )
    }
    loadMore(){//调用父亲传递过来的加载更多函数
        if(this.props.isLoading){
            return;
        }
        this.props.loadMore();
    }
}