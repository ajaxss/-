import React from "react";
import IntCss from "./Int-Act.module.css";
import {Link} from "react-router-dom";
import pic from "../../../imgs/learn/touxiang1.png";
import pic1 from "../../../imgs/learn/4.jpg";
import pic2 from "../../../imgs/learn/5.jpg";
import pic3 from "../../../imgs/learn/6.jpg";

class intrant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actArr: [
                {
                    admin: "胡图图的妈妈",
                    title: "艺考油画进阶班",
                    curTime: "2020-11-18",
                    time: "每周周日",
                    organ: "温州乐清之屋培训班"
                },
                {
                    admin: "胡图图的妈妈",
                    title: "艺考油画进阶班",
                    curTime: "2020-11-18",
                    time: "每周周日",
                    organ: "温州乐清之屋培训班"
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
                                    <img src={pic} style={{ margin: "0 auto", width: "1rem", height: '1rem' }} alt=""></img>
                                </div>
                                <div className={IntCss.int2} >
                                    <p>{item.admin}</p>
                                    <span>我发起的团课：<div style={{color:'red',fontSize:'0.24rem',display:'inline-block'}}>{item.title}</div></span><br />
                                    <span>开课时间：{item.curTime}&nbsp;&nbsp;</span>
                                    <span>上课时间：{item.time}</span>
                                    <p>上课机构：{item.organ}</p>
                                </div>
                                <div className={IntCss.box}><Link to="/details"><div>详情</div></Link></div>
                                <div className={IntCss.int3}>
                                    <div><img src={pic1} style={{width:'2.1rem',height:'1.8rem'}} alt=""></img></div>
                                    <div><img src={pic2} style={{width:'2.1rem',height:'1.8rem'}} alt=""></img></div>
                                    <div><img src={pic3} style={{width:'2.1rem',height:'1.8rem'}} alt=""></img></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default intrant;