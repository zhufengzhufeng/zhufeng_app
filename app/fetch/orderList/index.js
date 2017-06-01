import {get,post} from '../index';
//获取订单列表
export function getOrderList(username) {
    return get('/api/orderlist/'+username);
}
//修改评价  /api/comment   {id,comment}

export function postComment(obj) {
    return post('/api/comment',obj);
}