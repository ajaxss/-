import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';//React 主组件
import reportWebVitals from './utils/reportWebVitals';

//将虚拟dom 节点创建为真实dom节点后渲染到界面上去
ReactDOM.render(
  // <React.StrictMode>{/* </React.StrictMode> */}
    <App />
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
