// FormElememt
import React from "react";
import UserPagecss from "./UserPage.module.css";
import message from "../imgs/userinfo/self/message2x.png";
import set from "../imgs/userinfo/self/set2x.png";
import all from "../imgs/userinfo/self/all2x.png";
import obligation from "../imgs/userinfo/self/obligation2x.png";
import send_goods from "../imgs/userinfo/self/send_goods2x.png";
import evaluate from "../imgs/userinfo/self/evaluate2x.png";
import Refund from "../imgs/userinfo/self/Refund2x.png";
import Tan from "../components/user/Tan";


class UserPage extends React.Component {
    constructor(props) {
        super(props)
    }
    reg(e) {
        
        this.props.history.push("/login");

    }
    gorouter(e) {
        let str = e.target.innerHTML.substr(0, 4)
        console.log(str);
        switch (str) {
            case "我的金库":
                
                break;
            case "我的课程":
                this.props.history.push("/learn/timetable");break;
            case "我的积分":

                break;
            case "我的收藏":
                this.props.history.push("/shopping/like");break;
            default:
                break;
        }

    }

    render() {

        return (
            <div className={UserPagecss.user}>
                <div style={{ width: "100%", height: '1.5rem', margin: '0rem 0', fontSize: "0.08rem" }}>
                    <div style={{ float: "right", marginRight: "2em" }}>
                        <div style={{
                            width: '26px',
                            height: '16px',
                            background: `url('${set}') center center /  20px 17px no-repeat`
                        }}
                        />

                        <Tan history={this.props.history}></Tan>
                    </div>
                    <div style={{ float: "right", marginRight: "1em" }}>
                        <div style={{
                            width: '26px',
                            height: '16px',
                            background: `url('${message}') center center /  26px 16px no-repeat`
                        }}
                        />
                        消息
                        </div>
                </div>
                <div className={UserPagecss.head} style={{ backgroundImage: `url(${localStorage.getItem('u_header')})`}}></div>
                {localStorage.getItem("name") ? <div className={UserPagecss.reg}>{localStorage.getItem('name')}</div> : <div className={UserPagecss.reg} onClick={this.reg.bind(this)}>登录</div>}

                <div className={UserPagecss.button} onClick={()=>{this.props.history.push("/myorder");}}>我的订单  <span className={UserPagecss.buttonLeft}>{"查看全部订单>"}</span></div>
                <div className={UserPagecss.all}>
                    <div>
                        <div style={{
                            width: '44px',
                            height: '44px',
                            background: `url('${all}') center center /  42px 42px no-repeat`
                        }}
                        />
                        全部订单
                    </div>
                    <div>
                        <div style={{
                            width: '44px',
                            height: '44px',
                            background: `url('${obligation}') center center /  42px 42px no-repeat`
                        }}
                        />
                        &nbsp;待付款
                    </div>
                    <div>
                        <div style={{
                            width: '44px',
                            height: '44px',
                            background: `url('${send_goods}') center center /  42px 42px no-repeat`
                        }}
                        />
                        &nbsp;待发货
                    </div>
                    <div>
                        <div style={{
                            width: '44px',
                            height: '44px',
                            background: `url('${evaluate}') center center /  42px 42px no-repeat`
                        }}
                        />
                        &nbsp;&nbsp;&nbsp;评价
                    </div>
                    <div>
                        <div style={{
                            width: '44px',
                            height: '44px',
                            background: `url('${Refund}') center center /  42px 42px no-repeat`
                        }}
                        />
                        退款/售后
                    </div>

                </div>
                <br></br>
                <br></br>

                <div onClick={this.gorouter.bind(this)}>
                    <div className={UserPagecss.button}>我的金库   <span className={UserPagecss.buttonLeft}>{">"}</span></div>
                    <div className={UserPagecss.button}>我的课程表 <span className={UserPagecss.buttonLeft}>{">"}</span></div>
                    <div className={UserPagecss.button}>我的积分   <span className={UserPagecss.buttonLeft}>{">"}</span></div>
                    <div className={UserPagecss.button}>我的收藏   <span className={UserPagecss.buttonLeft}>{">"}</span></div>
                </div>
                

            </div>
        )
    }
}

export default UserPage;