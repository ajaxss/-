import React from 'react';
import './Recommend.css';



class Recommend extends React.Component {
    constructor() {
        super()
        this.state = {
            course: [{
                img: "https://edu-image.nosdn.127.net/485C64A7504CECA2F8FF346AC6DE1D71.jpg?imageView&quality=100&thumbnail=230y130&type=webp",
                title: "Python数据分析与展示", school: "北京理工大学", author: "嵩天", num: "1312人参加"
            }, {
                img: "https://edu-image.nosdn.127.net/862110D6D28B5D8BE8D43F1CBAE5D04B.jpg?imageView&quality=100&thumbnail=230y130&type=webp",
                title: "高等数学（二）", school: "国防科技大学", author: "朱建民", num: "1632人参加"
            }, {
                img: "https://edu-image.nosdn.127.net/1877D4EA45C3ADB12EFB74D24566B9B7.jpg?imageView&quality=100&thumbnail=230y130&type=webp",
                title: "中国衣裳——传统服装文化", school: "西南交通大学", author: "李任飞", num: "1045人参加"
            }]
        }
    }

    render() {
        return (
            <div className="recommend">
                <h3>猜你喜欢</h3>
                <hr></hr>
                {/* <div className="course"> */}
                {this.state.course.map((item, index) => {
                    return (
                        <div className="course" key={index}>
                            <img src={item.img}></img>
                            <div>
                                <p className="recommend-title">{item.title}</p>
                                <p className="school">{item.school}</p>
                                <p className="author">{item.author}</p>
                                <p className="num">{item.num}</p>
                            </div>
                        </div>
                    )
                })}
                {/* </div> */}
            </div>
        )
    }
}

export default Recommend;