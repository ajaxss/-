// FormElememt
import React from "react";
import {Toast, NavBar, Icon, List, WingBlank, WhiteSpace, Button, InputItem } from 'antd-mobile';
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {

    constructor(props){
        super(props);
        this.register = this.register.bind(this);
        this.state={
                user:"",
                passwd:"",
                msg:''
        }
    }

    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }

    register(){
        this.props.history.push('/regist')
    }

    login(){
        axios.post('http://localhost:8000/login',this.state)
        .then((res)=>{
            console.log(res);
            if(res.data.code == 1){
                Toast.info(res.data.msg, 1);
                localStorage.setItem('u_id',res.data.u_id)
                this.props.history.push('/userinfo')
            }else{
                Toast.info(res.data.msg, 1);
            }
        })
    }


    useri() {
        this.props.history.push('/userinfo')
    }

    render() {

        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.useri.bind(this)}
                    style={{ borderBottom: "1px solid lightgrey" }}
                >登录</NavBar>

                <div style={{
                    width: "100%", height: "620px",
                    backgroundColor: "#fff", display: "flex", alignItems: "center",
                    flexWrap: "wrap", flexDirection: "column", paddingTop: "100px"
                }}>
                    <div>
                        <img src="http://localhost:8000/public/logo.png"
                            style={{ width: "100px", height: "60px" }}></img>
                    </div>
                    <div style={{
                        width: "300px", height: "200px",
                    }}>
                        <WingBlank>
                            <List>
                                <InputItem onChange={v=>this.handleChange('user',v)}>用户名：</InputItem>
                                <InputItem
                                onChange={v=>this.handleChange('passwd',v)}
                                 type="password">密码:</InputItem>
                            </List>
                            <WhiteSpace />
                            <Button onClick={this.login.bind(this)} type="primary">登录</Button>
                            <WhiteSpace />
                            <Button onClick={this.register} type="primary">注册</Button>
                        </WingBlank>
                    </div>
                </div>
                <Button></Button>
            </div>
        )
    }
}

export default withRouter(Login);