import {get} from '../index';
//获取详情
export function getInfo(id) {
    return get('/api/detail/info/'+id);
}
//获取评价
export function getComment(id,page) {
    return get('/api/detail/comment/'+id+'/'+page);
}