import {get} from '../index';

export function getOrderList(username) {
    return get('/api/orderlist/'+username);
}