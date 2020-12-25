import React from "react";
import onlCss from "./Onl-Off.module.css";
import {Link} from "react-router-dom";
import pic from "../../../imgs/learn/14.jpg";

class offline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curArr: [
                {
                    title: "《小王子》——故事宣讲会",
                    price: "￥300",
                    buyTime: "2020-11-18",
                    dueTime: "2020-11-18",
                    des: "杭州市余杭区",
                    admin: "麦课3号",
                },
                {
                    title: "《蓝胡子》——故事宣讲会",
                    price: "￥300",
                    buyTime: "2020-11-18",
                    dueTime: "2020-11-18",
                    des: "昆明市晋宁区",
                    admin: "麦课4号",
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
                                        <img src={pic} style={{ width: "2.8rem", height: "2.8rem" }} alt=""></img>
                                    </div>
                                    <div className={onlCss.box2}>
                                        <h4>{item.title}</h4>
                                        <span>地点：{item.des}</span><br/>
                                        <span style={{color:"rgb(241, 187, 37)"}}>{item.price}</span><br />
                                        <span>开班时间：{item.buyTime}</span><br />
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
export default offline;