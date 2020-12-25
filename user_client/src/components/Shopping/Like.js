//点赞页面
import React from "react";
import axios from "axios";
import style from "./Like.module.css";
import global from "../../router/url";
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';


function successToast(str) {
    if (str == 'unlike') {
        Toast.success('已取消收藏  !!!', 2);
        return
    }
    if (str == 'unselect') {
        Toast.success('请选择商品  !!!', 2);
        return
    }


    Toast.success('已成功加入购物车  !!!', 2);
}

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: [],
            all: false,
            sumprice: 0,
            one: false,
            sumca_num: 0,
            display: false,
            img: false
        }
    }
    componentDidMount() {
        if (localStorage.getItem('u_id')) {
            axios.get(global.website + `/collect`).then((res) => {
            console.log(res.data);
            res.data.map((e) => {

                return e.checked = false;
            })
            this.setState({
                datalist: res.data
            })

        }).catch((error) => {
            console.log(error);
        })
        }else{
            this.props.history.push("/login");

        }
        

    }
    render() {
        return (
            <div className="serq">
                <div className={style.cartList}>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <span >全部</span>
                        <span onClick={() => { this.setState({ img: !this.state.img }); }}>图片</span>
                        <span onClick={() => { this.setState({ display: !this.state.display }); }}>管理</span>
                    </div>
                    {this.state.img ?
                        this.state.datalist.map((item, index) =>
                            <div className={style.img_decs} key={index}>
                                {this.state.display &&
                                    <input type="checkbox" className={style.checkbtn + ' ' + style.UnChecked + ' ' + style.che} ref="mytext"
                                        onChange={() => { this.handleChange(index) }} checked={item.checked}
                                    />}
                                {/* 点击图片跳转到页面详情 */}
                                <img src={item.s_cover} className={style.imgs} alt="" onClick={() => { this.props.history.push(`/Shop_desc/${item.s_id}`) }} />

                            </div>) :

                        <div className={style.cartListItem}>
                            <ul className={style.shopList} ref="myul">
                                {/* 对应的每个购物车条目 */}
                                {
                                    this.state.datalist.map((item, index) =>

                                        <li key={index}>
                                            {this.state.display && (
                                                <input type="checkbox" className={style.checkbtn + ' ' + style.UnChecked} ref="mytext"
                                                    onChange={() => { this.handleChange(index) }} checked={item.checked}
                                                />)}
                                            <div className={style.shopImg}>
                                                {/* 点击图片跳转到页面详情 */}
                                                <div className={style.shopImgShow} onClick={() => { this.props.history.push(`/Shop_desc/${item.s_id}`) }}>
                                                    <img src={item.s_cover} alt="" />
                                                </div>
                                            </div>
                                            {/* 商品详情 */}
                                            <div className={style.shopInfo}>
                                                <div className={style.shopTitle}>{item.s_title}</div>
                                                <div className={style.shopPrice}>
                                                    <div className={style.price}>
                                                        <span>￥{item.s_price}</span>
                                                    </div>
                                                </div>
                                                <div className={style.shopTop}>推荐</div>
                                            </div>
                                        </li>

                                    )
                                }

                            </ul>
                        </div>
                    }
                    {this.state.display &&

                        <div className={style.sum} >
                            <br></br>
                            <input className={style.input} type="checkbox" onChange={() => { this.handleAll() }} checked={this.state.all} />

                            <div className={this.state.one ? style.btnCheck : style.btnNoCheck} onClick={() => {

                                this.state.datalist.map((e) => {
                                    if (e.checked) {
                                        axios.get(global.website + `/addcart?u_id=${localStorage.getItem('uid') || 1}&s_id=${e.s_id}&co_num=1`).then((res) => {
                                        }).catch((error) => {
                                            console.log(error);
                                        })
                                    }

                                })
                                successToast()

                            }}>加入购物车</div>
                            <div className={this.state.one ? style.btnCheck : style.btnNoCheck} onClick={() => {
                                let datalist = this.state.datalist
                                let num = []
                                if (datalist.length > 0) {

                                    datalist.map((e, i) => {
                                        if (e.checked) {
                                            axios.get(global.website + `/collect?status=set&u_id=${localStorage.getItem('uid') || 1}&s_id=${e.s_id}`).then((res) => {
                                                console.log(res)
                                            }).catch((error) => {
                                                console.log(error);
                                            })

                                            num.push(i)
                                        }
                                    })
                                    console.log(datalist)
                                    let cut = 0;//计数  用于datalist数组长度改变
                                    num.forEach((e) => {
                                        datalist.splice(e - cut, 1)
                                        cut++
                                    })


                                    this.setState({
                                        datalist
                                    }, () => {
                                        console.log(this.state.datalist)

                                        successToast('unlike')
                                    })
                                } else {
                                    successToast('unselect')

                                }


                            }}>清空</div>
                            <div className={this.state.one ? style.btnCheck : style.btnNoCheck} onClick={() => { }}>分享</div>
                            <WingBlank>


                            </WingBlank>
                        </div>}


                </div>
            </div>
        )
    }
    handleChange(index) {

        var list = [...this.state.datalist]
        list[index].checked = !list[index].checked


        var every = list.every((item, index) => {
            return item.checked == true;
        })

        // 单选框中如果有一个是 checked的是true就可以
        var some = list.some((item, index) => {
            return list[index].checked
        })


        this.setState({
            datalist: list,
            all: every,
            one: some  //设定结算框的样式是哪个，根据list[index].checked
        })

        this.SumPrice()
        console.log(this.state)

    }

    // 全选
    handleAll() {
        var list = [...this.state.datalist]
        var all = this.state.all
        all = !all
        for (var i = 0; i < list.length; i++) {
            list[i].checked = all
        }
        this.setState({
            all: all,
            one: all //全选的状态直接影响结算框的样式
        })
        this.SumPrice()
    }

    handleAdd(index) {
        // 设定的value= {this.state.datalist[index].ca_num}
        var list = [...this.state.datalist]
        console.log(list)
        list[index].ca_num++;

        this.setState({
            datalist: list,
        })
        this.SumPrice()

    }

    handleMinus(index) {
        // 设定的value= {this.state.datalist[index].ca_num}
        var list = [...this.state.datalist];
        list[index].ca_num--
        list[index].ca_num = list[index].ca_num < 1 ? 1 : list[index].ca_num;
        this.setState({
            datalist: list
        })
        this.SumPrice()
    }
    handleChangenum(index, e) {
        console.log(e)
        var list = [...this.state.datalist];
        list[index].ca_num = e.target.value

     
        this.setState({
            datalist: list
        })
        this.SumPrice()
    }

    SumPrice() {
        var sum = 0
        var ca_num = 0;
        var list = [...this.state.datalist]
        for (var i = 0; i < list.length; i++) {
            if (list[i].checked === true) {
                sum += Number(list[i].s_price) * Number(list[i].ca_num)
                ca_num += Number(list[i].ca_num)
            }
        }

        this.setState({
            sumprice: sum,
            sumca_num: ca_num //结算个数
        })
    }

}
export default Cart;