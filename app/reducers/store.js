import * as Types from '../action-types/store';
let initState = [];
export function store(state=initState,action){
    switch (action.type){
        case Types.ADD_STORE:
            //如果是添加则会传递新的id,放到数组中即可
            return [...state,action.data];
        case Types.REMOVE_STORE:
            //通过传递的id将数组中的某一项移除掉
            return state.filter(item=>action.data!==item);
        default:
            return state;
    }
}