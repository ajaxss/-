import pic from "../../../imgs/learn/2.jpg";
import React from "react";
import onlCss from "./Onl-Off.module.css";
import {Link} from "react-router-dom";

class online extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curArr: [
                {
                    title: "《小王子》—— 一部不仅是给孩子看的童话",
                    price: "￥200",
                    buyTime: "2020-11-18",
                    dueTime: "2020-11-18",
                    des: "法国作家安托万德圣埃克里苏佩里于1942年写成的著名儿童文学短篇小说",
                    admin: "麦课1号",
                },
                {
                    title: "《蓝胡子》—— 一部意义深远的成人童话",
                    price: "￥200",
                    buyTime: "2020-11-18",
                    dueTime: "2020-11-18",
                    des: "法国诗人夏尔佩罗创作的童话故事",
                    admin: "麦课2号",
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.curArr.map((item, index) => {
                        return (
                            <div className={onlCss.onl} key={index}>
                                <div className={onlCss.onl1}>
                                    <div className={onlCss.box1}>
                                        <img src={pic} style={{ width: "2.8rem", height: "2.8rem" }}></img>
                                    </div>
                                    <div className={onlCss.box2}>
                                        <h4>{item.title}</h4>
                                        <span>{item.des}</span>
                                        <span style={{color:"rgb(241, 187, 37)"}}>{item.price}</span><br />
                                        <span>购买时间：{item.buyTime}</span><br />
                                        <span>到期时间：<div className={onlCss.span2} style={{display:"inline-block"}}>{item.dueTime}</div></span>
                                    </div>
                                    <div className={onlCss.box3}>
                                        <h4>发布者：{item.admin}</h4>
                                    </div>
                                    <div className={onlCss.box4}>
                                        <Link to=""><div className={onlCss.details}>详&nbsp;&nbsp;&nbsp;情</div></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default online;