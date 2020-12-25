import React from 'react';
import { SearchBar,  WhiteSpace, } from 'antd-mobile';
import axios from 'axios';
import './relation.css';


class Relation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value:'',
      userarr: [
        {
          header: "http://localhost:8000/public/bottom/header.png",
          name: "海绵宝宝",
        },
        {
          header: "http://localhost:8000/public/bottom/header.png",
          name: "派大星",
        }
      ]
    }
  }

  componentDidMount() {

  }

  

  onChange= (value) => {
    this.setState({ value });
    if(value.length<1){
      this.getcond();
    }
  };
  clear = () => {
    this.getcond();
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }

  concl(){
    
  }

  changer(el) {
    var goto = '/circle'
    switch (el.target.innerHTML) {
      case "动态": goto = '/condition'; break;
      case "消息": goto = '/massage'; break;
      case "我的人脉": goto = '/relation'; break;
      case "我的圈子": goto = '/shell'; break;
      default: break;
    }
    if (goto != this.props.history.location.pathname) {
      this.props.history.push(goto)
    } else {
      window.location.reload()
    }
  }
  render() {
    return (
      <div>
        <div className="circle" onClick={this.changer.bind(this)}>
          <span>动态</span>
          <span>消息</span>
          <span className="span1">我的人脉</span>
          <span>我的分享</span>
        </div>
        <div className="rel-content">
          <div style={{ height: "10%" }}>
            <SearchBar
              value={this.state.value}
              placeholder="Search"
              onSubmit={value => console.log(value, 'onSubmit')}
              onClear={value => console.log(value, 'onClear')}
              onFocus={() => console.log('onFocus')}
              onBlur={() => console.log('onBlur')}
              showCancelButton={false}
              onChange={this.onChange}
            />
            <WhiteSpace />


          </div>
          <div className="rel-mail">
            {this.state.userarr.map((item, index) => {
              return <div key={index} className="rel-fri" style={{ width: "100%", height: "100%" }}>
                <div className="rel-img">
                  <img src={item.header}></img>
                </div>
                <div className="rel-name">
                  <div className="rel-heacon">
                    <div className="rel-head">
                      <span style={{ fontSize: "10px", width: "100px" }}>{item.name}</span>
                      <span style={{ width: "80%", overflow: "hidden", fontSize: "12px", color: "grey", textAlign: "right" }}
                      onClick={this.concl.bind(this)}>
                        发送私信</span>
                    </div>


                  </div>
                </div>
              </div>
            })}
          </div>
        </div>


      </div>);
  }
}

export default Relation;