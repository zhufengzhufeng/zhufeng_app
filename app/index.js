import React from 'react';
import {render} from 'react-dom';

//App负责选择哪一个页面
import './assets/index.less';
import App from "./containers/index";

render(<App/>,document.getElementById('root'));