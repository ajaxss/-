import React from 'react';
import { SearchBar, WhiteSpace } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './rcontent.css'

class Myshell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      rearr: [],
    }
  }


  getcond() {
    let id = localStorage.getItem('u_id')
    console.log(id);
    axios.get('http://localhost:8000/getconditionf', {
      params: { id }
    })
      .then(res => {
        console.log(res);
        res.data.forEach(element => {
          element.addtimes = new Date(element.addtimes).toLocaleString().split(' ')[0];
        });
        this.setState({
          rearr: res.data
        })
      })
  }

  componentDidMount() {
    this.getcond();
  }


  changelike(id) {
    let form = {
      u_id: localStorage.getItem('u_id'),
      c_id: id
    }
    axios.post('http://localhost:8000/like', form)
      .then(res => {
        let arr = this.state.rearr;
        if (res.data.code == 1) {
          arr.forEach(element => {
            if (element.c_id == id) {
              element.status = 1
            }
          })
        } else {
          arr.forEach(element => {
            if (element.c_id == id) {
              element.status = 0
            }
          })
        }
        this.setState({
          rearr: arr
        })
      })
  }

  onChange = (value) => {
    this.setState({ value });
    if (value.length < 1) {
      this.getcond();
    }
  };
  clear = () => {
    this.getcond();
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }

  onblur() {
    console.log(this.props.history.location.pathname);
    axios.get('http://localhost:8000/getmohu', {
      params: {
        c_content: this.state.value,
        rou: this.props.history.location.pathname
      }
    }).then(res => {
      console.log(res);
      res.data.forEach(element => {
        element.addtimes = new Date(element.addtimes).toLocaleString().split(' ')[0]
      })
      this.setState({
        rearr: res.data
      })
    })
  }

  render() {
    return (
      <div className="content">
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

        <div className="rcontent-rev">

          {this.state.rearr.map((item, index) => {
            return <div key={index} className="rcontent-revf" style={{ width: "100%", height: "100%" }}>
              <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="rcontent-reimg">
                  <img src={item.u_header}
                    style={{
                      width: "40px", height: "42px", zIndex: '1'
                    }}></img>
                </div>
                <div style={{ width: "96%", display: "flex", justifyContent: "space-between" }}>
                  <div className="rcontent-rehead">
                    <span style={{ fontSize: "10px" }}>{item.u_name}</span>
                  </div>
                  <span>{item.addtimes}</span>
                </div>
              </div>
              <div className="rcontent-rename">
                <div className="rcontent-reheacon">

                  <span style={{
                    width: "100%", height: "55px",
                    display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: "4",
                    overflow: "hidden", fontSize: "12px", color: "grey"
                  }}>
                    {item.c_content}</span>

                </div>
              </div>
              <div style={{ width: "80%", height: "140px", marginLeft: "40px", marginBottom: '10px' }}>
                <img src={item.c_cover} style={{ width: "100%", height: "100%" }}></img>
              </div>
              <div style={{ width: "100%", textAlign: "right" }}>
                {item.status == 0 ? <img src="http://localhost:8000/public/like1.png"
                  style={{ width: "20px", height: "16px" }} onClick={this.changelike.bind(this, item.c_id)}></img> :
                  <img src="http://localhost:8000/public/like.png"
                    style={{ width: "20px", height: "16px" }} onClick={this.changelike.bind(this, item.c_id)}></img>
                }
                <img src="http://localhost:8000/public/bottom/review.png"
                  style={{ marginLeft: "15px" }}></img>
              </div>
            </div>
          })}
        </div>
      </div>);
  }
}

export default withRouter(Myshell);