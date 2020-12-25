// FormElememt
import React from "react";
import shop from "./ShoppingPage.module.css";
import Topbar from "../components/Shopping/Shoptopbar";


class ShoppingPage extends React.Component {

    constructor(props) {
        super(props);
    }

    gorouter(e) {
        switch (e.target.innerHTML) {
            case "商城":
                this.props.history.push("/shopping/shop");
                break;
            case "收藏夹":
                this.props.history.push("/shopping/like");
                break;
            case "购物车":
                this.props.history.push("/shopping/cart");
                break;
            default:
                break;
        }
    }

    render() {
        return (<div>
            <Topbar mypros={this.props.history}></Topbar>
            <div className={shop.top} onClick={this.gorouter.bind(this)}>
                <div className={shop.topnav}>商城</div>
                <div className={shop.topnav}>收藏夹</div>
                <div className={shop.topnav}>购物车</div>
            </div>

        </div>

        )
    }
}

export default ShoppingPage;