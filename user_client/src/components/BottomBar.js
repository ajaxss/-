
import React from "react";
import { TabBar } from 'antd-mobile';
import './Bott.css'


class BottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'indexTab',
      hidden: false,
      fullScreen: true,
    };
  }
  //负责根据路由地址，修改初始化标蓝的Tab栏
  componentDidMount() {
    console.log(this.props)
    let selectedTab;
    switch (this.props.location.pathname) {
      case "/": selectedTab = "indexTab";  break;
      case "/index": selectedTab = "indexTab"; break;
      case "/shopping/shop":
      case '/shopping/like':
      case "/shopping/cart":
        selectedTab = "shoppingTab"; break;
      case "/learn/timetable": selectedTab = "learnTab"; break;
      case "/circle": selectedTab = "circleTab"; break;
      case "/userinfo": selectedTab = "userTab"; break;
    }
    this.setState({
      selectedTab: selectedTab
    })
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0, zIndex: -1 } : { height: 400, zIndex: -1 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="orange"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="麦课"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url('http://localhost:8000/public/bottom/class.png') center center /  21px 21px no-repeat`
            }}
            />
            }
            selectedIcon={<div style={{
              width: '24px',
              height: '22px',
              background: `url('http://localhost:8000/public/bottom/class1.png') center center /  24px 21px no-repeat`
            }}
            />
            }
            selected={this.state.selectedTab === 'indexTab'}
            // 根据点击切换路由
            onPress={() => {
              this.setState({
                selectedTab: 'indexTab',
              });
              this.props.history.push("/index");
            }}
            data-seed="logId"
          >
            {/* {this.renderContent('首页')} */}
            {/* <div>首页界面</div> */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url('http://localhost:8000/public/bottom/shop.png') center center /  21px 21px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '26px',
                height: '22px',
                background: `url('http://localhost:8000/public/bottom/shop1.png') center center /  26px 21px no-repeat`
              }}
              />
            }
            title="商品"
            key="Koubei"
            // badge={'new'}
            selected={this.state.selectedTab === 'shoppingTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'shoppingTab',
              });
              this.props.history.push("/shopping/shop");
            }}
            data-seed="logId1"
          >
            {/* {this.renderContent('商品')} */}
            {/* <div>商品界面</div> */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url('http://localhost:8000/public/bottom/study.png') center center /  21px 21px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '24px',
                height: '22px',
                background: `url('http://localhost:8000/public/bottom/study1.png') center center /  24px 21px no-repeat`
              }}
              />
            }
            title="学习中心"
            key="Friend"

            selected={this.state.selectedTab === 'learnTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'learnTab',
              });
              this.props.history.push("/learn");
            }}
          >
            {/* {this.renderContent('购物车')} */}
            {/* <div>购物车页面</div> */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url('http://localhost:8000/public/bottom/circle.png') center center /  21px 21px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '24px',
                height: '22px',
                background: `url('http://localhost:8000/public/bottom/circle1.png') center center /  24px 21px no-repeat`
              }}
              />
            }
            title="圈子"
            key="Friend"

            selected={this.state.selectedTab === 'circleTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'circleTab',
              });
              this.props.history.push("/circle");
            }}
          >
            {/* {this.renderContent('圈子')} */}
            {/* <div>圈子页面</div> */}
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url('http://localhost:8000/public/bottom/my.png') center center /  21px 21px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '24px',
                height: '22px',
                background: `url('http://localhost:8000/public/bottom/my1.png') center center /  24px 21px no-repeat`
              }}
              />
            }
            title="个人中心"
            key="my"
            selected={this.state.selectedTab === 'userTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'userTab',
              });
              this.props.history.push("/userinfo");
            }}
          >
            {/* {this.renderContent('个人中心')} */}
            {/* <div>个人中心页面</div> */}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default BottomBar;