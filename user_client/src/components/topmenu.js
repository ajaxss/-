// FormElememt
import React from "react";
import { withRouter } from 'react-router-dom'
import './topmenu.css'



class TabExample extends React.Component {
    changer(el){
        var goto = '/circle'
        switch(el.target.innerHTML){
            case "动态":goto = '/condition';break;
            case "消息":goto = '/massage';break;
            case "我的人脉":goto = '/relation';break;
            case "我的分享":goto = '/shell';break;
            default : break;
        }
        if(goto != this.props.history.location.pathname){
            this.props.history.push(goto)
        }else{
            window.location.reload()
        }
    }
    render() {
        return (
            <div className="circle" onClick={this.changer.bind(this)}>
                <span className="span1">动态</span>
                <span>消息</span>
                <span>我的人脉</span>
                <span>我的分享</span>
            </div>
        )
    }

}

export default withRouter(TabExample);