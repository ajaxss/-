// FormElememt
import React from "react";
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import learnCss from "./LearnPage.module.css";
import pic from "../imgs/learn/caidan.png";


const data = [
    {
        value: '1',
        label: '我的课程表',
    }, {
        value: '2',
        label: '已购课程',
    },
    {
        value: '3',
        label: '收藏的课',
        isLeaf: true,
    },
];
class learnPage extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            initData: '',
            show: false,
        };
    }
    onChange = (value) => {
        let label = '';
        data.forEach((dataItem) => {
            if (dataItem.value === value[0]) {
                label = dataItem.label;
                if (dataItem.children && value[1]) {
                    dataItem.children.forEach((cItem) => {
                        if (cItem.value === value[1]) {
                            label += ` ${cItem.label}`;
                        }
                    });
                }
            }
        });
        console.log(label);
    }
    handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
            show: !this.state.show,
        });
        // mock for async data loading
        if (!this.state.initData) {
            setTimeout(() => {
                this.setState({
                    initData: data,
                });
            }, 500);
        }
    }
    onMaskClick = () => {
        this.setState({
            show: false,
        });
    }
    gorouter(e) {
        switch (e.target.innerHTML) {
            case "我的课程表":
                this.props.history.push("/learn/timetable");
                break;
            case "已购课程":
                this.props.history.push("/purCour/online");
                break;
            case "收藏的课":
                this.props.history.push("/colCour/online");
                break;
            default:
                break;
        }
    }

    render() {
        const { initData, show } = this.state;
        const menuEl = (
            <Menu
                className="single-foo-menu"
                data={initData}
                value={['1']}
                level={1}
                onChange={this.onChange}
                height={document.documentElement.clientHeight * 0.3}
            />
        );
        const loadingEl = (
            <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </div>
        );
        return (
            <div>
                <div className={learnCss.navigator} style={{position:"fixed",top:"0",float:"inherit",width:"100%"}}>
                    <div className={show ? 'single-menu-active' : ''}>
                        <div className={learnCss.stubar}>
                            <NavBar
                                leftContent=""
                                mode="light"
                                icon={<img src={pic} className="am-icon am-icon-md" alt="" />}
                                onLeftClick={this.handleClick}
                                className="single-top-nav-bar"
                            >
                                学习中心
                        </NavBar>
                        </div>
                        {show ? initData ? menuEl : loadingEl : null}
                        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}

                    </div>
                </div>
                <div className={learnCss.top} onClick={this.gorouter.bind(this)}>
                    <div className={learnCss.topnav1}>我的课程表</div>
                    <div className={learnCss.topnav}>已购课程</div>
                    <div className={learnCss.topnav}>收藏的课</div>
                </div>
            </div>
        );
    }
}

export default learnPage;