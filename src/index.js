import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入ui框架
import 'antd-mobile/dist/antd-mobile.css'; 
// 引入公共样式
import './assets/styles/common.css'
// 引入拦截器
import './utils/axiosUtils'

ReactDOM.render(<App />, document.getElementById('root'));

