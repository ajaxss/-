import React from "react";
import { NavBar, Icon } from 'antd-mobile';
import { SearchBar, WingBlank } from 'antd-mobile';
// import creatHistory from "history/createHashHistory";
import "./PurCour.css";
import { Link } from "react-router-dom";
//使用history.goBack返回上一页
// const history = creatHistory();
// history.goBack();

class PurCour extends React.Component {
    constructor(props) {
        super(props);
    }
    gorouter(e) {
        switch (e.target.innerHTML) {
            case "线上课":
                this.props.history.push("/purCour/online");
                break;
            case "线下课":
                this.props.history.push("/purCour/offline");
                break;
            case "加入的团":
                this.props.history.push("/purCour/intrant");
                break;
            case "活动":
                this.props.history.push("/purCour/activity");
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    //用link标签返回指定页面
                    icon={<Link to="/learn/timetable"><Icon type="left" /></Link>}
                    // onLeftClick={() => console.log("")}
                    //使用history.goBack返回上一页
                    // onLeftClick={() => history.goBack()}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >已购课程</NavBar>
                <div className="top" onClick={this.gorouter.bind(this)}>
                    <div className="topnav">线上课</div>
                    <div className="topnav">线下课</div>
                    <div className="topnav">加入的团</div>
                    <div className="topnav">活动</div>
                </div>
                <div className="sousuo">
                    <WingBlank>
                        <SearchBar placeholder="搜索" ref={ref => this.autoFocusInst = ref} />
                    </WingBlank>
                </div>
            </div>
        )
    }
}
export default PurCour;