import React from "react";
import IntCss from "./Int-Act.module.css";
import {Link} from "react-router-dom";
import pic from "../../../imgs/learn/touxiang.png";
import pic1 from "../../../imgs/learn/7.jpg";
import pic2 from "../../../imgs/learn/8.jpg";
import pic3 from "../../../imgs/learn/9.jpg";

class activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actArr: [
                {
                    admin: "壮壮妈",
                    title: "亲子一日游",
                    curTime: "2020-11-18",
                    organ: "翻斗花园"
                },
                {
                    admin: "壮壮妈",
                    title: "亲子一日游",
                    curTime: "2020-11-18",
                    organ: "翻斗花园"
                },
            ]
        }
    }
    render() {
        return (
            <div className={IntCss.gundong}>
                {this.state.actArr.map((item, index) => {
                    return (
                        <div className={IntCss.kuang} key={index}>
                            <div className={IntCss.int}>
                                <div className={IntCss.int1}>
                                    <img src={pic} style={{ margin: "0 auto", width: "1rem", height: '1rem' }}></img>
                                </div>
                                <div className={IntCss.int2} >
                                    <p>{item.admin}</p>
                                    <span>我发起的团课：<div style={{color:'red',fontSize:'0.24rem',display:'inline-block'}}>{item.title}</div></span><br />
                                    <span>活动时间：{item.curTime}</span>
                                    <p>活动地点：{item.organ}</p>
                                </div>
                                <div className={IntCss.box}><Link to="/details"><div>详情</div></Link></div>
                                <div className={IntCss.int3}>
                                    <div><img src={pic1} style={{width:'2.1rem',height:'1.8rem'}}></img></div>
                                    <div><img src={pic2} style={{width:'2.1rem',height:'1.8rem'}}></img></div>
                                    <div><img src={pic3} style={{width:'2.1rem',height:'1.8rem'}}></img></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default activity;