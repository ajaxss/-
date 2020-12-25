//商品详情页

import React from "react";
import Goshopping from "./Goshopping";
import bgc from "../../imgs/shop/1_.webp";
import day7 from "../../imgs/shop/7day.png";
import post from "../../imgs/shop/post.png";
import trueimg from "../../imgs/shop/true.png";
import price from "../../imgs/shop/price.png";
import axios from "axios";
import global from "../../router/url";
import { NavBar, Icon } from 'antd-mobile';
import { Link } from "react-router-dom";


const { Fragment } = React;



class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            data: [],
            num: 1
        }
    }
    componentDidMount() {
        axios.get(global.website + `/getshop?id=${this.props.match.params.id}`).then((res) => {
            console.log(res.data);
            this.setState({
                data: res.data
            })

        }).catch((error) => {
            console.log(error);
        })
    }
    soso() {

    }
    goshoppiing() {

    }
    num_c(e) {
        let a = e.target.value
        this.state.data.map((i, n) => {
            if (a > i.s_num) {
                alert('超过最大库存')
                a = i.s_num
            }
            this.setState({
                num: a
            })
        })

    }
    render() {
        return (
            <div style={{width:"100%",height:"100%",backgroundColor:'#fff',zIndex:999}}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-1)}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >商品详情</NavBar>
                <br></br>
                {
                    this.state.data.map((i, n) => {
                        return (
                            <div key={n} style={{ width: '6.8rem', height: '10.8rem',overflowY:'scroll', margin: '0 auto' }} onClick={(i) => { }}>
                                <div style={{ margin: '0 auto' }}>
                                    <img src={i.s_cover} style={{ width: '6.8rem', height: '6.8rem' }}></img>
                                    <p style={{ width: '100%', color: "#000", fontSize: '0.3rem' }}>{i.s_title}</p>
                                    <div style={{ backgroundImage: price }}>
                                        <img src={post} style={{ height: '0.48rem',marginRight:'0.2rem' }}></img>
                                        <img src={trueimg} style={{ height: '0.48rem',marginRight:'0.2rem' }}></img>
                                        <img src={day7} style={{ height: '0.48rem' }}></img>
                                    </div>
                                    <span style={{ color: 'red', marginRight: '0.4rem', fontSize: '0.4rem' ,marginRight:'0.9rem'}}>¥{i.s_price}</span>
                                    <span style={{ color: "rgb(104, 103, 104)", fontSize: '0.3rem' }}><del>¥{i.s_price * 1.2}</del></span>
                                </div>
                                <span style={{fontSize:'0.4rem',margin:'0.02rem 0.64rem 0  0'}}>数量:</span>
                                <button type="button" onClick={() => { this.setState({ num: this.state.num - 1 || 1 }) }} style={{width:'0.6rem',height:'0.6rem',boxSizing:"border-box"}}>-</button>
                                <input value={this.state.num} onChange={this.num_c.bind(this)} style={{width:'0.6rem',height:'0.6rem',boxSizing:"border-box"}}></input>
                                <button type="button" onClick={() => { this.setState({ num: this.state.num + 1 < i.s_num ? this.state.num + 1 : i.s_num }) }} style={{width:'0.6rem',height:'0.6rem',boxSizing:"border-box"}}>+</button>
                                <br></br>
                                <br></br>
                            <div>
                                <p style={{fontSize:'0.5rem'}}>描述:</p>
                                <br></br>
                                
                                <p>{i.s_content} </p>
                            </div>

                                    <Goshopping  {...i} mynum={this.state.num}></Goshopping>


                            </div>
                        )
                    })
                }


            </div>
        )
    }
}
export default Shop;