//购物车页面
import React from "react";
import axios from "axios";
import style from "./Cart.module.css";
import global from "../../router/url";
import Goshopping from'./Goshopping1'


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: [],
            all: false,
            sumprice: 0,
            one: false,
            sumca_num: 0
        }
    }
    componentDidMount() {
        if (localStorage.getItem('u_id')) {
            axios.get(global.website + `/addcart?u_id=${1}`).then((res) => {
            console.log(res.data);
            res.data.map((e)=>{
                
               return e.checked=false;
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
                    <div className={style.cartListItem}>
                        <ul className={style.shopList} ref="myul">
                            {/* 对应的每个购物车条目 */}
                            {
                                this.state.datalist.map((item, index) =>

                                    <li key={index}>
                                        <input type="checkbox" className={style.checkbtn + ' ' + style.UnChecked} ref="mytext"
                                            onChange={() => { this.handleChange(index) }} checked={item.checked}
                                        />
                                        <div className={style.shopImg}>
                                            {/* 点击图片跳转到页面详情 */}
                                            <div className={style.shopImgShow} onClick={()=>{ this.props.history.push(`/Shop_desc/${item.s_id}`)}}>
                                                <img src={item.s_cover} alt="" />
                                            </div>
                                        </div>
                                        {/* 商品详情 */}
                                        <div className={style.shopInfo}>
                                            <div className={style.shopTitle}>{item.s_title}</div>
                                            <div className={style.shopCoupen}></div>
                                            <div className={style.shopPrice}>
                                                <div className={style.price}>
                                                    <span>￥{item.s_price}</span>
                                                    <i>￥{item.s_price * 1.2}</i>
                                                </div>
                                                <div className={style.shopSelect}>
                                                    <button className={style.minus} onClick={() => { this.handleMinus(index) }}>-</button>
                                                    <input type="text" value={item.ca_num} onChange={(e) => { this.handleChangenum(index,e) }} onBlur={()=>{if (item.ca_num<1) {
                                                        alert('请输入正确数量')
                                                    } }}    onFocus={ ()=>{} }/>
                                                    <button className={style.add} onClick={() => { this.handleAdd(index) }}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }

                        </ul>
                    </div>

                    <div className={style.sum}>
                        <input className={style.input} type="checkbox" onChange={() => { this.handleAll() }} checked={this.state.all} />
                        <div className={style.checkPrice}>
                            {/* 合算 */}
                            <div className={style.totalPrice}>
                                <span className={style.allsum}>合计</span>
                                <span>￥{this.state.sumprice}</span>
                                <br></br>
                                <span  className={style.allsum}>数量</span>
                                <span>({this.state.sumca_num})</span>
                            </div>
                            {/* 不含运费 */}
                            <div className={style.fee}>(不含运费)</div>
                        </div>

                        {/* 结算按钮 */}
                        
                        <div className={this.state.one ? style.btnCheck : style.btnNoCheck}>结算</div>
                       <Goshopping {...this.state} newdata={new Date().getFullYear().toString()+`年`+new Date().getMonth().toString()+`月`+ new Date().getHours().toString()+`:`+new Date().getMinutes().toString()} > </Goshopping>
                        
                    </div>

       

    
    


                    
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
    handleChangenum(index,e){
        console.log(e)
        var list = [...this.state.datalist];
        list[index].ca_num=e.target.value
        
        
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
                sum +=Number(list[i].s_price)  * Number(list[i].ca_num)
                ca_num +=Number(list[i].ca_num)
            }
        }

        this.setState({
            sumprice: sum,
            sumca_num: ca_num //结算个数
        })
    }

}
export default Cart;