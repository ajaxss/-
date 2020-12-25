//购物中心的头部导航
import React from "react";
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import pic from "../../../imgs/shop/caidan.png";

const data = [
    {
        value: '1',
        label: '商城',
    }, {
        value: '2',
        label: '收藏夹',
    },
    {
        value: '3',
        label: '购物车',
        isLeaf: true,
    },
];
class learnPage extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            initData: '',
            show: false,
            num:0
        };
        this.num=null;
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
        console.log(label,this);
        switch (label) {
            case "商城":
                this.props.mypros.push("/shopping/shop");
                break;
            case "收藏夹":
                this.props.mypros.push("/shopping/like");
                break;
            case "购物车":
                this.props.mypros.push("/shopping/cart");
                break;
            default:
                break;
        }
        console.log(this.props.mypros)
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
   componentDidMount(){
    this.num=()=>{ switch (this.props.mypros.location.pathname) {
        case "/shopping/shop":
            return [1]
        case "/shopping/like":
            return [2]
        case "/shopping/cart":
            return [3]
        default:
            break;
    }}
   }

    render() {
        const { initData, show } = this.state;
        const menuEl = (
            <Menu
                className="single-foo-menu"
                data={initData}
                value={this.num||[1]}
                level={1}
                onChange={this.onChange}
                height={document.documentElement.clientHeight * 0.21}
            />
        );
        const loadingEl = (
            <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </div>
        );
        return (
            <div >
                <div  style={{position:"fixed",top:"0",float:"inherit",width:"100%",zIndex:999}}>
                    <div className={show ? 'single-menu-active' : ''}>
                        <div >
                            <NavBar
                                leftContent=""
                                mode="light"
                                icon={<img src={pic} className="am-icon am-icon-md" alt="" />}
                                onLeftClick={this.handleClick}
                                className="single-top-nav-bar"
                            >
                                购物中心
                        </NavBar>
                        </div>
                        {show ? initData ? menuEl : loadingEl : null}
                        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}

                    </div>
                    </div>
            </div>
        );
    }
}

export default learnPage;