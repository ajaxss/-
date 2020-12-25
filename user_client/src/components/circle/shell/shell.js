import React from 'react';
import Myshell from './myshell'
import axios from 'axios'
import './shell.css'



class SearchBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount() {
    let id = localStorage.getItem('u_id')
    axios.get('http://localhost:8000/getuser',{
      params:{
        id
      }
    })
    .then(res=>{
      this.setState({
        user:res.data
      })
    })
  }

  mass() {
    this.props.history.push('/condition')
  }

  publish(){
    this.props.history.push('/publish')
  }
  render() {
    return (
      <div>
        <div className="shell-bac">
          <div className="shell-head"><img src="http://localhost:8000/public/bottom/left.png"
            style={{ width: "12px", height: "12px" }} onClick={this.mass.bind(this)}>
          </img>
            <span>我的分享</span>
            <img src="http://localhost:8000/public/bottom/pub.png"
              style={{ width: "20px", height: "20px", textAlign: "right" }}
            onClick={this.publish.bind(this)}
            ></img>
          </div>
          <div  style={{
              width:"80%",height:"180px",display:"flex",flexDirection:"column",alignItems:"center",
              justifyContent:"center",margin:"0 auto"
            }}>
            <div style={{
              width:"50px",height:"50px",borderRadius:"50%",backgroundColor:"#fff",display:"flex",
              alignItems:"center",justifyContent:"center"
            }}>
              <img src={this.state.user.u_header}></img>
            </div>
            <div>
              <span style={{fontSize:"14px"}}>{this.state.user.u_name}</span>
              <span style={{fontSize:"14px"}}>
                {((this.state.user.sex == 1)&&<span>女<img 
                src="http://localhost:8000/public/bottom/woman.png"
                style={{width:"18px",height:"16px"}}></img>
                </span>)||((this.state.user.sex == 2)&&<span>男<img 
                src="http://localhost:8000/public/bottom/man.png"
                style={{width:"18px",height:"16px"}}></img>
                </span> )||((this.state.user.sex == 2)&& <span></span>)
                }
              </span>
            </div >
              <div style={{ width: "100%",
                  display: "-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp: "1",
                  overflow: "hidden", fontSize: "12px",marginTop:"10px"}}>{this.state.user.sign}</div>
          </div>
        </div>
        <div className="shell-content">
                <Myshell></Myshell>
        </div>
      </div>);
  }
}

export default SearchBarExample;