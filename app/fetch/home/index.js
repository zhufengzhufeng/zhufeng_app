// /api/ad

import {get} from '../index'
export function getAd() {
    return get('/api/ad');
}

// 获取列表数据
export function getList(city,page) {
    return get('/api/list/'+city+'/'+page);
}