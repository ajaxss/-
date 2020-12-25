
import React from "react";
import timeCss from "./Timetable.module.css";

class Timetable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={timeCss.content}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <div className={timeCss.out}>
                                    <b>M</b>
                                    <em>T</em>
                                </div>
                            </th>
                            <th>周二</th>
                            <th>周六</th>
                            <th>周日</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>早上</td>
                            <td>舞蹈</td>
                            <td>体育</td>
                            <td>剪纸</td>
                        </tr><tr>
                            <td>中午</td>
                            <td>午休</td>
                            <td>午休</td>
                            <td>午休</td>
                        </tr><tr>
                            <td>晚上</td>
                            <td>数学</td>
                            <td>钢琴</td>
                            <td>绘画</td>
                        </tr>
                    </tbody>
                </table>
                <div className={timeCss.w1}>我的学习勋章</div>
                <div className={timeCss.w11}>
                    <div className={timeCss.back1}><span>舞蹈勋章</span></div>
                    <div className={timeCss.back2}><span>数学勋章</span></div>
                    <div className={timeCss.back3}><span>画画勋章</span></div>
                    <div className={timeCss.back4}><span>钢琴勋章</span></div>
                    <div className={timeCss.back5}><span>音乐勋章</span></div>
                    <div className={timeCss.back6}><span>查看更多</span></div>
                </div>
                <div className={timeCss.w2}>猜你喜欢</div>
                <div className={timeCss.w21}>
                    <div className={timeCss.cour1}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={timeCss.cour2}></div>
                </div>
            </div>
        )
    }
}
export default Timetable;