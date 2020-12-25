//设置页面
import { Modal, List, Button, WhiteSpace, WingBlank, Icon } from 'antd-mobile';
import React from "react";
function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,

    };
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
   

  }

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <WingBlank>
     
       

        <span onClick={this.showModal('modal2')} style={{fontSize: "0.08rem" }}>设置</span>
        <WhiteSpace />
        <Modal
          popup
          visible={this.state.modal2}
          onClose={this.onClose('modal2')}
          animationType="slide-up"
          
        >
          <List renderHeader={() => <div>设置</div>} className="popup-list">
          <List.Item>
              <Button type="primary" onClick={this.onClose('modal2')}>账号管理</Button>
            </List.Item>
            <List.Item>
              <Button type="primary" onClick={this.onClose('modal2')}>账号安全</Button>
            </List.Item>
            
            <List.Item>
              <Button type="primary" onClick={()=>{this.onClose('modal2')();localStorage.clear();
      this.props.history.replace('/userinfo')}} >退出登录</Button>
            </List.Item>
          </List>
        </Modal>
      </WingBlank>
    );
  }
}


export default App