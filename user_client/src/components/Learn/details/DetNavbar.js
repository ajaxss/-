// FormElememt
import React from "react";
import DetCss from "./DetNavbar.module.css";
import creatHistory from "history/createHashHistory"
import tou from "../../../imgs/learn/touxiang.png";
import collect from "../../../imgs/learn/collect.png";
import forward from "../../../imgs/learn/forward.png";
import goback from "../../../imgs/learn/goback.png";

//使用history.goBack返回上一页
const history = creatHistory();
history.goBack();
class DetNavbar extends React.Component {

    render() {
        return (
            <div>
                <div className={DetCss.navbar}>
                    <div className={DetCss.touxiang}><img src={tou} style={{ width: '0.8rem', height: '0.8rem' }} /></div>
                    <div className={DetCss.name}><span>壮壮妈</span></div>
                    <div className={DetCss.collect}><img src={collect} style={{ width: '0.38rem', height: '0.38rem' }} /></div>
                    <div className={DetCss.forward}><img src={forward} style={{ width: '0.4rem', height: '0.4rem' }} /></div>
                    <div className={DetCss.goback}>
                        <img
                            src={goback} style={{ width: '0.32rem', height: '0.32rem' }}
                            onClick={() => history.goBack()}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default DetNavbar;