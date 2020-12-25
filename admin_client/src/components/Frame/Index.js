import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Dropdown,Avatar, message } from 'antd';
import "antd/dist/antd.css";
import Frame from "./logo1.png"
import { withRouter } from "react-router-dom"
import { adminRoutes } from "../../routes"
import './Fram.css'
import {clearnToken} from '../../Utils/auth'
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';


const routs = adminRoutes.filter(route => route.isShow)

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Index(props) {
    const popMenu = (<Menu onClick={p=>{
        if (p.key == 'tuichu' ) {
            props.history.push('/login');
        }else{
            message.info(p.key);
        }
    }}>
        <Menu.Item key='notice'>通知中心</Menu.Item>
        <Menu.Item key='shez'>设置</Menu.Item>
        <Menu.Item key='tuichu'>退出</Menu.Item>
    </Menu>)
    return (
        <Layout>
            <Header className="header" style={{ backgroundColor: "#073358" }}>
                <div className="logo" >
                    <img src={Frame} alt="logo" style={{ height: 60 }} />
                </div>
                <Dropdown overlay={popMenu}>
                    <div>
                        <Avatar>U</Avatar>
                        <span>超级管理员</span>
                        <Icon type='down'></Icon>
                    </div>
                </Dropdown>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {routs.map(route => {
                            return (<Menu.Item key={route.path} onClick={p => props.history.push(p.key)}>{route.title}</Menu.Item>)
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '16px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            background: "#fff",
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default withRouter(Index)
