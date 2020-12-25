import React from "react";
import Caidan from '../../imgs/home/caidan.png';
import search from '../../imgs/home/search.png';
import "../../router2/Router.css"




class Topbar extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            initData: '',
            show: false,
        };
    }
    topclick(e){
        switch (e.target.innerHTML) {
            case "推荐":
                this.props.history.push("/recommend");
                break;
            case "线上课":
                this.props.history.push("/online");
                break;
            case "线下课":
                this.props.history.push("/offline");
                break;
            default:
                break;
        }
    }

    render() {

        return (
            <div>
                <div className="Router1">
                    <div className="Router1-left" onClick={this.topclick.bind(this)}>
                        <img src={Caidan}></img>
                        <div to="/recommend" style={{ color: "black", textDecoration: "none" }}>推荐</div>
                        <div to="/online" style={{ color: "black", textDecoration: "none" }}>线上课</div>
                        <div to="/offline" style={{ color: "black", textDecoration: "none" }}>线下课</div>

                    </div>
                    <div className="Router1-right">
                        <img src={search}></img>
                        <span style={{ color: "red" }}>筛选</span>
                    </div>

                </div>
                {/* <Navtop></Navtop> */}
            </div>
        )
    }
}

export default Topbar;