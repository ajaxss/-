import React from "react";
import "./App.css";
// import { DatePicker,Button,Tooltip } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';

//全量引入：运行速度特别慢
// import 'antd/dist/antd.css';

//按需引入：记得修改package.json,config-overrides.js,webpack.config.js,index.html
// cnpm i antd-mobile --save-dev
// cnpm i react-app-rewired customize-cra babel-plugin-import --save-dev
import {Button,NavBar, Icon} from "antd-mobile"
import MyRouter from "../router/index";

//函数式组件
function App() {
  return (
    <div>
        <MyRouter></MyRouter>
     




        {/* //全量引入：运行速度特别慢 */}
        {/* <DatePicker></DatePicker>

        <Button type="primary">默认按钮</Button>

        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip> */}

        {/* <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>

        <Button type="primary">default</Button> */}

        
    </div>
  );
}

export default App;
