//单一商品购买详情 组件

import React from "react";
import { Modal, List, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import './Goshopping.css'
import axios from "axios";
import global from "../../router/url";
import Tis from "../tis/This.js";
const prompt = Modal.prompt;

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function successToast(str) {
    if (str) {
        Toast.success('收藏成功 !!!', 1);
    } else {
        Toast.success('取消收藏成功 !!!', 1);

    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,//弹窗关闭
            modal2: false,//弹窗关闭
            close: false,//购买状态判断
            close1: true,//加入购物车判断
            u_id: 1,//用户id
            money: 0,//余额
            tis: '',//提示
            password: '',
            thisk: 0,//提示状态
            num: 0,//计数
            style: 'like',//收藏的styleid
            cut: 0,//计数
            newdata: '',//购买时间

        };
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
            close1: true
        });
    }
    onClose = key => () => {

        this.setState({
            [key]: false,
        });

    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    showToast() {

    }

    componentDidMount() {
        this.getlike('get')//获取收藏信息

    }
    getlike(str) {

        axios.get(global.website + `/collect?status=${str}&u_id=${localStorage.getItem('uid') || 1}&s_id=${this.props.s_id}`).then((res) => {
            console.log(res.data[0].co_status)
            this.setState({
                style: res.data[0].co_status ? `like1` : `like`
            }, () => {
                if (this.state.cut) {
                    if (this.state.style == 'like') {
                        successToast()
                    } else {
                        successToast('1')
                    }
                }
            })

        }).catch((error) => {
            console.log(error);
        })
    }
    showPrompt() {
        prompt(
            'Password',
            '请输入密码',

            [
                {
                    text: '取消', onPress: () => {
                        this.setState({
                            tis: '取消付款,已生成 待付款订单',
                            thisk: 5,
                            num: this.state.num + 1
                        });
                    }
                },
                {
                    text: '提交', onPress: (password) => {
                        if (password.length === 6) {
                            this.setState({
                                password,
                                tis: '',
                                thisk: 0
                            });
                            axios.post(global.website + `/user`, { data: { u_id: localStorage.getItem('u_id') || 1 } }).then((res) => {
                                let money = res.data[0].money
                                let pword = res.data[0].pay_passwd
                                if (pword == this.state.password) {
                                    if (money > this.props.s_price * this.props.mynum) {
                                        axios.post(global.website + `/user`, { data: { u_id: localStorage.getItem('uid') || 1, money: money - this.props.s_price * this.props.mynum } }).then((res) => {
                                            this.onClose('modal1')();
                                            console.log(money)
                                            this.setState({
                                                close: true,
                                                tis: '购买成功,可以在订单里查看',
                                                money: money - this.props.s_price * this.props.mynum,
                                                thisk: 4
                                            }, () => {
                                                axios.post(global.website + `/orders`, { data: { u_id: localStorage.getItem('uid') || 1, people_id: localStorage.getItem('uid') || 1, pay_num: this.props.mynum, s_id: this.props.s_id } }).then((res) => {
                                                }).catch(
                                                    (error) => {
                                                        console.log(error);
                                                    }
                                                )
                                            });
                                        }).catch((error) => {
                                            console.log(error);
                                        });
                                    } else {
                                        this.setState({
                                            close: false,
                                            tis: '余额不足',
                                            thisk: 5
                                        });
                                    }
                                } else {
                                    this.setState({
                                        close: false,
                                        tis: '密码错误',
                                        thisk: 5

                                    });
                                }
                            }).catch((error) => {
                                console.log(error);
                            });
                        } else {
                            this.showPrompt();
                            this.setState({
                                thisk: 5,
                                tis: '请输入6位数字',
                            });
                        }
                    }
                },
            ],
            'secure-text',
        )
    }
    render() {
        return (
            <WingBlank style={{width:'7.5rem',height:"1.4rem",position:"fixed",bottom:0,backgroundColor:"#fff"}}>
                <Tis code={this.state.thisk} tis={this.state.tis} money={this.state.money} num={this.state.num}></Tis>
                <Button onClick={() => {
                    this.setState({
                        cut: this.state.cut + 1
                    })
                    this.getlike('set')//修改收藏信息
                }} id={this.state.style}></Button>
                <Button onClick={(e) => {
                    this.showModal('modal1')(e);
                    let data = new Date();
                    let newdata = data.getFullYear().toString() + `年` + data.getMonth().toString() + `月` + data.getHours().toString() + `:` + data.getMinutes().toString();
                    this.setState({
                        newdata
                    })
                }} id="goshopping">立即购买</Button>
                <WhiteSpace />
                <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={false}
                    onClose={this.onClose('modal1')}
                    title="订单详情"
                    footer={[{
                        text: [' 取消购买'], onPress: () => {
                            this.onClose('modal1')(); this.setState({
                                close1: false,
                                tis: '取消购买',
                                thisk: 5,
                                num: this.state.num + 1
                            });

                        }
                    },
                    {
                        text: [' 确定购买'], onPress: () => {
                            this.onClose('modal1')();
                            // this.pwrod()();
                            this.showPrompt();

                        }
                    }]}

                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    afterClose={() => { }}
                >
                    <div style={{ height: 200, overflow: 'scroll', textAlign: "left" }}>
                        商品名称:{this.props.s_title}<br />
                        单价:{this.props.s_price}<br />
                        数量:{this.props.mynum}<br />
                        总价:{this.props.s_price * this.props.mynum}<br />
                        收货人:{localStorage.getItem('name') || '张锟'}<br />
                        收货地址:{localStorage.getItem('home') || '成都'}<br />
                        购买时间:{this.state.newdata}
                    </div>
                </Modal>

                <Button onClick={this.showModal('modal2')} id="nos">加入购物车</Button>
                <WhiteSpace />
                <Modal
                    popup
                    visible={this.state.modal2}
                    onClose={this.onClose('modal2')}
                    animationType="slide-up"
                    afterClose={() => {
                        if (this.state.close1) {
                            Toast.info('加入成功', 1);
                            axios.get(global.website + `/addcart?u_id=${localStorage.getItem('uid') || 1}&s_id=${this.props.s_id}&co_num=${this.props.mynum}`).then((res) => {
                            }).catch((error) => {
                                console.log(error);
                            })
                        } else { Toast.info('已取消', 1) }
                    }}
                >
                    <List renderHeader={() => <div>加入购物车</div>} className="popup-list">
                        {[`商品名称:${this.props.s_title}`, `数量:${this.props.mynum}`].map((i, index) => (
                            <List.Item key={index}>{i}</List.Item>
                        ))}
                        <List.Item>
                            <WhiteSpace />
                            <Button type="primary" onClick={() => {
                                this.onClose('modal2')(); this.setState({
                                    close1: false,
                                });
                            }} id="no">取消</Button>
                            <Button type="primary" onClick={() => {
                                this.onClose('modal2')(); this.setState({
                                    close1: true,
                                });
                            }} id="go">加入购物车</Button>
                            <WhiteSpace />
                        </List.Item>
                    </List>
                </Modal>

            </WingBlank>
        );
    }
}


export default App;