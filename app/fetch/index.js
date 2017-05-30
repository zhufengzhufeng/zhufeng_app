import 'whatwg-fetch';
import 'es6-promise';

export function get(url) {
    return fetch(url,{
        Accept:'application/json'
    });
}
