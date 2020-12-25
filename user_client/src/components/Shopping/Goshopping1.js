//购物车多个商品购买详情 组件
import React from "react";
import { Modal, List, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import './Goshopping.css';
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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
            close: false,
            close1: true,
            u_id: 1,
            money: 0,
            tis: '',
            password: '',
            thisk: 0,
            num: 0

        };
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
            close1: true,
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
    showPrompt() {
        prompt(
            'Password',
            '请输入密码',

            [
                { text: '取消', onPress: () => { 
                    this.setState({
                        tis: '取消付款,已生成 待付款订单',
                        thisk: 5,
                        num:this.state.num+1

                    });
                } },
                {
                    text: '提交', onPress: (password) => {
                        if (password.length === 6) {
                            this.setState({
                                password,
                                tis: ''
                            });
                            axios.post(global.website + `/user`, { data: { u_id: localStorage.getItem('u_id') || 1 } }).then((res) => {

                                let money = res.data[0].money
                                let pword = res.data[0].pay_passwd
                                console.log(pword)
                                console.log(this.state.password)

                                if (pword == this.state.password) {
                                    if (money > this.props.sumprice) {
                                        axios.post(global.website + `/user`, { data: { u_id: localStorage.getItem('uid') || 1, money: money - this.props.s_price * this.props.mynum } }).then((res) => {
                                            this.onClose('modal1')();
                                            console.log(money)
                                            this.setState({
                                                close: true,
                                                money: money - this.props.sumprice,
                                                tis: '购买成功,可以在订单里查看',
                                                thisk: 4

                                            }, () => {
                                                console.log(this.props.datalist);
                                                let data = this.props.datalist
                                                data.map((e) => {
                                                    return e.people_id = localStorage.getItem('uid') || 1;
                                                })
                                                axios.post(global.website + `/orders`, { data }).then((res) => {
                                                    console.log(res);

                                                })
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
                            //手动调用prompt
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

    componentDidMount() {
        // Toast.loading('Loading...', 30, () => {
        //     console.log('Load complete !!!');
        // });
        // setTimeout(() => {
        //     Toast.hide();
        // }, 3000);
    }

    render() {
        return (
            <WingBlank>
                <Tis code={this.state.thisk} tis={this.state.tis} money={this.state.money} num={this.state.num}></Tis>
                <div onClick={this.showModal('modal1')} id='goshopping1'>'</div>
                <WhiteSpace />
                <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={false}
                    onClose={this.onClose('modal1')}
                    title="订单详情"
                    footer={[{
                        text: [' 取消购买'], onPress: () => {
                            this.onClose('modal1')();
                            this.setState({
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
                            this.showPrompt()
                        }
                    }]}

                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    afterClose={() => { }}
                >
                    <div style={{ height: 300, overflow: 'scroll', textAlign: "left" }}>
                        {this.props.datalist.map((e, i) => {
                            if (e.checked) {
                                return <div key={i}>
                                    <div style={{ backgroundColor: 'rgb(245,242,249)' }}>
                                        商品名称:{e.s_title}<br />
                                单价:{e.s_price}<br />
                                数量:{e.ca_num}<br />
                                总价:{e.s_price * e.ca_num}<br />
                                        <hr></hr>
                                    </div>
                                </div>
                            }
                        })}

                        总数量:{this.props.sumca_num}<br />
                        合计:{this.props.sumprice}<br />
                        收货人:{localStorage.getItem('name') || '张锟'}<br />
                        收货地址:{localStorage.getItem('name') || '成都'}<br />
                        购买时间:{this.props.newdata || ''}
                    </div>
                </Modal>

            </WingBlank>
        );
    }
}




export default App;