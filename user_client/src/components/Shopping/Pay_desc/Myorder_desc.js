//订单详情页
import React from "react";
import { NavBar, Icon } from 'antd-mobile';
import axios from "axios";
import global from "../../../router/url";
import './Pay.css'

class Pay_desc extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            datalist: [],
        }
    }
    componentDidMount() {
        axios.post(global.website + `/orders`, { data: { u_id: localStorage.getItem('uid') || 1, pay_id: this.props.match.params.pay_id } }).then((res) => {
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
            <div style={{ backgroundColor: 'rgb(231, 227, 227)', height: "13.6875rem" }}>
                <NavBar mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.go(-1) }}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >订单详情</NavBar>



                {
                    this.state.datalist.map((item, index) =>


                        <div key={index} className="dingdan">  

                            <div style={{ width: '6.8rem', margin: '0.2rem auto', }}>
                                <p>{(item.order_status == 0 && '请付款') || (item.order_status == 1 && '等待卖家发货') || (item.order_status >= 2 && '卖家已发货')}</p>
                                {/* <p>{"还剩几天自动确定"}  </p> */}
                                <br></br>
                                <p>{
                                    new Date(item.pay_addtimes).toLocaleString()

                                }  </p>

                            </div>

                            <div style={{ width: '6.8rem', backgroundColor: '#fff', margin: '0.2rem auto', borderRadius: '0.2rem', overflow: "hidden", padding: '10px' }}>
                                <div style={{ width: '100%', margin: '0.2rem auto' }}>  麦课官方旗舰店 {'>'}   <span style={{ float: 'right', color: '#ee6020' }}>商家已发货</span> </div>
                                <div style={{ display: "flex" }}>
                                    {/* 点击图片跳转到页面详情 */}

                                    <div onClick={() => { this.props.history.push(`/Shop_desc/${item.s_id}`) }}>
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
                                <div>
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


                            </div>

                            <div style={{ width: '6.8rem', backgroundColor: '#fff', margin: '0.2rem auto', borderRadius: '0.2rem', overflow: "hidden", padding: '10px'}}>
                                <div style={{ width: '100%', margin: '0.2rem auto' }}>  订单详情   <span style={{ float: 'right', color: '#ee6020' }}>{'>'} </span> </div>
                                
                                <p>
                                    <span >收货人&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                   
                                    <span style={{ margin: '0 20px' }}>

                                     {item.people_name}
                                    </span>

                                </p>
                                <br></br>
                                <p>
                                    <span >电话&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                   
                                    <span style={{ margin: '0 20px' }}>

                                     {item.people_tel}
                                    </span>

                                </p>
                                <br></br>
                                
                                <p>
                                    <span >收货地址</span>
                                   
                                    <span style={{ margin: '0 20px' }}>

                                     {item.people_desc}
                                    </span>

                                </p>
                                <br></br>

                                <p>
                                    <span >订单编号</span>
                                    <span style={{ margin: '0 20px' }}>{
                                        new Date(item.pay_addtimes).toISOString().replace(':','').replace(':','').replace('T','').substr(0,16)

                                    }  
                                    </span>

                                </p>
                                <br></br>
                                <p>
                                    <span>创建时间</span>
                                    <span style={{ margin: '0 20px' }}>{
                                        new Date(item.pay_addtimes).toLocaleString()
                                    }  
                                    </span>
                                    

                                </p>
                                <br></br>

                                <p>
                                    <span >付款时间</span>
                                    <span style={{ margin: '0 20px' }}>{
                                        new Date(item.pay_addtimes).toLocaleString()
                                    }  
                                    </span>
                                    

                                </p>
                                <br></br>

                                <p>
                                    <span>成交时间</span>
                                    <span style={{ margin: '0 20px' }}>{
                                        new Date(item.pay_addtimes).toLocaleString()
                                    }  
                                    </span>
                                    

                                </p>

                            </div>


                        </div>

                    )
                }
                <div className="pay_more pay_more_desc">
                    <div className="pay_more_son1">
                        更多
                                </div>
                    <div className="pay_more_son">
                        挑选服务
                                </div>
                    <div className="pay_more_son">
                        查看物流
                                </div>
                    <div className="pay_more_son pay_more_son_color">
                        确定收货
                 </div>

                </div>
            </div>
        )
    }
}

export default Pay_desc;


