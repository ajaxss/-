// FormElememt
import React from "react";
import detCss from "./Details.module.css";
import DetNavbar from "./DetNavbar";
import pic1 from "../../../imgs/learn/7.jpg";
import pic2 from "../../../imgs/learn/8.jpg";
import pic3 from "../../../imgs/learn/9.jpg";

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailsArr: [{
                title: '亲子一日游',
                startTime: '2020-11-18',
                deadline: '2020-11-16',
                price: '580.00',
                address: '翻斗花园',
                other: '翻斗花园旅行社提供导游、中国人保保险',
                des: 'My name is Hututu,I especially love to eat,such as taking spicy hot pot milk tea,as well as dry pot shrimp teppanyaki,but my favrite,is to cook their ownmeals'
            }]
        }
    }

    render() {
        return (
            <div>
                <DetNavbar></DetNavbar>
                {this.state.detailsArr.map((item, index) => {
                    return (
                        <div className={detCss.cotentbox}>
                            <div className={detCss.cotent1}>
                                <h4>我发起的活动：
                                    <div style={{ color: 'red', fontSize: '0.34rem', display: 'inline-block' }}>
                                        {item.title}</div></h4>
                                <span>活动时间：{item.startTime}</span><br />
                                <span>截止报名：{item.deadline}</span><br />
                                <span>费用：{item.price}</span><br />
                                <span>活动地点：{item.address}</span><br />
                                <span>其他：{item.other}</span><br />
                                <span>开团理由：</span><br />
                                <span>{item.des}</span>
                            </div>
                            <div className={detCss.cotent2}>
                                <div style={{
                                    width: '7rem',
                                    height: '0.9rem',
                                    fontSize: '0.3rem',
                                    fontWeight: '600',
                                    lineHeight:'0.9rem',
                                    padding:'0 0.2rem 0'
                                }}>照片、视频：</div>
                                <div className={detCss.imgbox}>
                                    <img src={pic1} style={{ width: '2.1rem', height: '2.4rem' }}></img>
                                    <img src={pic2} style={{ width: '2.1rem', height: '2.4rem' }}></img>
                                    <img src={pic3} style={{ width: '2.1rem', height: '2.4rem' }}></img>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Details;