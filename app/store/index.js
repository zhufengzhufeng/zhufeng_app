import {createStore} from 'redux';
import reducers from '../reducers';

export function configureStore(initState) {
    return createStore(reducers,initState,
        window.devToolsExtension?window.devToolsExtension():undefined
    )
}
//redux-tools