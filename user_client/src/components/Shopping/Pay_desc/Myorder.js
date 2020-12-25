import React from "react";
import { NavBar, Icon } from 'antd-mobile';
import axios from "axios";
import global from "../../../router/url";
import './Pay.css'

import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';


function successToast() {
    Toast.success('已确定收货   !!!', 2);
}
class Pay_desc extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            datalist: [],
        }
    }
    componentDidMount() {
        axios.post(global.website + `/orders`, { data: { u_id: localStorage.getItem('uid') || 1 } }).then((res) => {
            console.log(res)
            this.setState({
                datalist: res.data
            })


        }).catch(
            (error) => {
                console.log(error);
            }
        )
    }


    render() {

        return (
            <div style={{ backgroundColor: 'rgb(200, 185, 200)' }}>
                <div style={{ width: '100%', position: 'fixed', zIndex: 99, top: 0 }}>
                    <NavBar mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}
                        rightContent={[
                            // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
                    >我的订单</NavBar>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>


                <div style={{ margin: '0.32rem 0', display: 'flex', justifyContent: 'space-evenly' }}>
                    <div>
                        全部
                    </div>
                    <div>
                        代付款
                    </div>
                    <div>
                        待发货
                    </div>
                    <div>
                        待收货
                    </div>
                    <div>
                        待评价
                    </div>
                    <div>
                        退款/售后
                    </div>
                </div>

                {
                    this.state.datalist.map((item, index) =>

                        <div key={index} style={{ width: '6.8rem', backgroundColor: '#fff', margin: '0.2rem auto', borderRadius: '0.2rem', overflow: "hidden", padding: '10px' }}>
                            <div onClick={() => { this.props.history.push(`/order/${item.pay_id}`) }}>
                                <div style={{ width: '100%', margin: '0.2rem auto' }}>  麦课官方旗舰店 {'>'}   <span style={{ float: 'right', color: '#ee6020' }}>商家已发货</span> </div>
                                <div style={{ display: "flex" }}>
                                    {/* 点击图片跳转到页面详情 */}
                                    <div>
                                        <img src={item.s_cover} alt="" style={{ width: '2.6rem', height: '2.6rem', border: '1px solid red' }} />
                                    </div>
                                    <div style={{ width: '2.48rem' }} className='pay_ftis' >
                                        <p className='pay_title'>{item.s_title}</p>
                                        <p className='pay_stiss'>七天无理由退换</p>
                                    </div>
                                    <div className="pay_ftis" style={{ width: '82px' }}>
                                        <p style={{ width: '100%', textAlign: 'right' }}>￥{item.s_price}.00</p>
                                        <p style={{ textAlign: 'right' }}>x{item.pay_num}</p>
                                        <p className='pay_stiss' style={{ right: 0, textAlign: 'right' }}>全程保价</p>
                                    </div>
                                </div>
                                {/* 商品详情 */}
                                <br></br>
                                <div >
                                    <div className="pay_fontf">
                                        <span>全程保价</span>
                                        <span className="pay_font"> 11.11-11.26为价保服务期</span>
                                        <span style={{ float: 'right', color: "#fc792b" }}>服务中</span>
                                    </div>
                                    <br></br>
                                    <div className="pay_fontf">
                                        <span>运费险&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        <span className="pay_font"> 退换货可自动理赔</span>
                                        <span style={{ float: 'right' }}>0.00x1</span>
                                    </div>
                                    <br></br>
                                    <div style={{ float: 'right' }}>
                                        <span style={{ margin: '0 6px' }}>总价￥{item.s_price * item.pay_num}.00</span>
                                        <span style={{ margin: '0 6px' }}>优惠￥0.00</span>
                                        <span>实付款￥{item.s_price * item.pay_num}.00</span>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                            </div>
                            <div className="pay_more">
                                <div className="pay_more_son1">
                                    更多
                                </div>
                                <div className="pay_more_son">
                                    挑选服务
                                </div>
                                <div className="pay_more_son">
                                    查看物流
                                </div>
                                <div className="pay_more_son pay_more_son_color" onClick={() => {
                                    axios.post(global.website + `/orders`, { data: { pay_id: item.pay_id, order_status: 5 } }).then((res) => {
                                        console.log(res)
                                        successToast()
                                    }).catch(
                                        (error) => {
                                            console.log(error);
                                        }
                                    )
                                }}>
                                    确定收货
                                </div>

                            </div>
                        </div>
                    )
                }
                {/* 提示 */}
                <WingBlank>
                </WingBlank>

            </div>
        )
    }
}

export default Pay_desc;


