//商品页面
import React from "react";
import shop from "./Shop.module.css";
import axios from "axios";
import global from "../../router/url";
const { Fragment } = React;

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            kw: '',
            tis: ''

        }
    }
    axiosget() {
        axios.get(global.website + `/getshop?types=1`).then((res) => {
            console.log(res.data);
            this.setState({
                data: res.data,
                tis: ''

            })

        }).catch((error) => {
            console.log(error);
        })
    }
    
    soso() {
        axios.get(global.website + `/getshop?kw=${this.state.kw}`).then((res) => {
            console.log(res.data);
            if (!res.data.length) {
                this.setState({
                    tis: '没有搜到你想要的商品请换一个词搜索'
                })
            }
            this.setState({
                data: res.data,
            })

        }).catch((error) => {
            console.log(error);
        })
    }
    goshoppiing() {

    }
    componentDidMount() {

        this.axiosget()
    }
    componentWillUnmount(){
        this.setState = (state,callback)=>{
            return;
          };
      
    }
    render() {
        return (
            <div className={shop.cent}>
                <input className={shop.input} value={this.state.kw} onChange={(e) => { this.setState({ kw: e.target.value }); !this.state.kw || this.axiosget() }} placeholder="请输入你想要搜索的商品"></input>
                <button type="button" className={shop.button} onClick={this.soso.bind(this)}>搜索 </button>
                <br></br>
                {
                    this.state.data.map((i, n) => {

                        return (
                            <div key={n} className={shop.shop} onClick={() => {
                                this.props.history.push(`/Shop_desc/${i.s_id}`)
                            }}>
                                <img src={i.s_cover} className={shop.img}></img>
                                <p className={shop.p}>{i.s_title}</p>
                                <span  style={{ color: 'red', margin: '5px  0.4rem 0 0', fontSize: '0.4rem', marginRight: '0.9rem' }}>¥{i.s_price}</span >
                                <span> {i.s_num}人付款</span>
                            </div>
                        )
                    }) || <div></div>

                }
                {<div style={{ fontSize: '20px', textAlign: 'center', color: "red" }}>{this.state.tis}</div>}


            </div>
        )
    }
}
export default Shop;