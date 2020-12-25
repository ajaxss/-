import React from 'react';
import { SearchBar,  WhiteSpace, } from 'antd-mobile';
import axios from 'axios'
import './mail.css'


class Mail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            userarr: [],
            
        }
    }

    getfri(){
        let id = localStorage.getItem('u_id')
        axios.get('http://localhost:8000/getchat',{
            params:{id}
        }).then(res=>{
            console.log(res);
            res.data.forEach(element=>{
                element.lots = "未读"
                element.addtimes = new Date(element.addtimes).toLocaleString().split(' ')[0]
            })
            this.setState({
                userarr:res.data
            })
        })
    }

    componentDidMount(){
        this.getfri()
    }

    onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
      handleClick = () => {
        this.manualFocusInst.focus();
      }

      onblur() {
        console.log(this.state.value);
        axios.get('http://localhost:8000/getmohu', {
          params: {
            u_name: this.state.value,
            id:localStorage.getItem('u_id'),
            rou: this.props.history.location.pathname
          }
        }).then(res => {
          console.log(res);
          res.data.forEach(element => {
            element.addtimes = new Date(element.addtimes).toLocaleString().split(' ')[0]
          })
          this.setState({
            userarr: res.data
          })
        })
      }

    render() {
        return (
            <div>
                <div style={{ height: "10%" }}>
                    <SearchBar
                        value={this.state.value}
                        placeholder="Search"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        onClear={value => console.log(value, 'onClear')}
                        onFocus={() => console.log('onFocus')}
                        onBlur={this.onblur.bind(this)}
                        showCancelButton={false}
                        onChange={this.onChange}
                    />
                    <WhiteSpace />
                </div>
                <div className="con-mail">
                    {this.state.userarr.map((item, index) => {
                        return <div key={index} className="con-fri" style={{ width: "100%", height: "100%" }}>
                            <div className="con-img">
                                <img src={item.u_header} style={{
                                    width:'40px',height:'40px',zIndex:'1'
                                }}></img>
                            </div>
                            <div className="con-name">
                                <div className="con-heacon">
                                    <div className="con-head">
                                        <span style={{ fontSize: "10px" }}>{item.u_name}</span>
                                        <span className="con-myf" style={{ fontSize: "10px", color: "grey" }}>好友</span>
                                    </div>
                                    <span style={{ width: "100%", overflow: "hidden", fontSize: "12px", color: "grey" }}>
                                        {item.chat_content}</span>

                                </div>
                                <div className="con-tiem" style={{
                                    width: "38px",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    alignItems: "flex-end",
                                    color: "grey", fontSize: "14px"
                                }}>
                                    <span>{item.addtimes}</span>
                                    <div style={{ color: "grey", fontSize: "12px" }}
                                    >{item.lots}</div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

            </div>);
    }
}

export default Mail;