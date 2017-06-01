//合并所有reducer 导出去，让store使用
import {combineReducers} from 'redux';
import {userInfo} from './userInfo';
import {store} from './store';
//合并reducer 会将 以前的state增加一个userInfo属性
export default combineReducers({
    userInfo,
    store
});