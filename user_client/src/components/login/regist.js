// FormElememt
import React from "react";
import { Picker, Toast, NavBar, Icon, List, WingBlank, WhiteSpace, Button, InputItem } from 'antd-mobile';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import './regist.css'

const delay = (function () {
    let timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback.ms);
    };
})();

const colors = [
    {
        label:
            (<div>
                <span
                />
                <span>保密</span>
            </div>),
        value: '0',
    },
    {
        label:
            (<div>
                <span
                />
                <span>女</span>
            </div>),
        value: '1',
    },
    {
        label:
            (<div>
                <span
                />
                <span>男</span>
            </div>),
        value: '2',
    },
];
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.state = {
            user: "",
            passwd: "",
            tel: '',
            gender: '',
        }
    }

    handleChange(key, val) {
            this.setState({
                [key]: val
            })
        
    }

    register() {
        let form = this.state
        axios.post('http://localhost:8000/regist', form)
            .then(res => {
                if(res.data.code==1){
                    Toast.info(res.data.msg, 1);
                    this.props.history.push('/login')
                }else{
                    Toast.info(res.data.msg, 1);
                }
            })
    }

    login() {
        this.props.history.push('/login')
    }


    useri() {
        this.props.history.push('/userinfo')
    }

    onChangeColor = (color) => {
        this.setState({
            gender: color,
        });

    };
    telChange = (key, value) => {

        const reg = /^1([0-9]*)?$/;
        if (value) {
            //react使用正则表达式变量的test方法进行校验，直接使用value.match(regex)显示match未定义
            if (reg.test(value) && value.length == 11) {
                this.setState({
                    [key]: value
                })
            }
        }
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.useri.bind(this)}
                    style={{ borderBottom: "1px solid lightgrey" }}
                >注册</NavBar>

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
                        width: "300px"
                    }}>
                        <WingBlank>
                            <List>
                                <InputItem onChange={v => this.handleChange('user', v)}>用户名：</InputItem>
                                <InputItem
                                    onChange={v => this.handleChange('passwd', v)}
                                    type="password">密码:</InputItem>
                                <InputItem
                                    onChange={a => this.telChange('tel', a)}
                                    type="number">电话：</InputItem>
                                <Picker
                                    data={colors}
                                    value={this.state.gender}
                                    cols={1}
                                    onChange={this.onChangeColor}
                                >
                                    <List.Item arrow="horizontal">性别:</List.Item>
                                </Picker>
                            </List>
                            <WhiteSpace />
                            <Button onClick={this.register.bind(this)} type="primary">确认注册</Button>                            
                            <WhiteSpace />
                            <Button onClick={this.login.bind(this)} type="primary">已有账号，立马登录</Button>
                        </WingBlank>
                    </div>
                </div>
                <Button></Button>
            </div>
        )
    }
}

export default withRouter(Login);