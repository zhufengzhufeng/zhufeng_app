import 'whatwg-fetch';
import 'es6-promise';

export function get(url) {
    return fetch(url,{
        Accept:'application/json'
    });
}
function toUrlencoded(obj) { //将对象转化成formData格式
    let arr = [];
    for(let key in obj){
        arr.push(`${key}=${obj[key]}`); // [id=1,comment=2]
    }
    return arr.join('&');
}
export function post(url,obj) { //{id:1,comment:2} =>id=1&comment=2
    return fetch(url,{
        method:'POST',
        // a=1&b=2&c=3 ,手动写请求头
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:toUrlencoded(obj)
    });
}
