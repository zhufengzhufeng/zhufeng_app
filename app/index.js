import React from 'react';
import {render} from 'react-dom';

//App负责选择哪一个页面
import './assets/index.less';
import App from "./containers/index";
import {Provider} from 'react-redux';
//导入store
import {configureStore} from './store';
//可以在configureStore传入初始状态
let store = configureStore();//生成store
render(
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'));