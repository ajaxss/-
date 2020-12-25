import React from 'react';
import {HashRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Likei from './likei'
import Likey from './likey'
import axios from 'axios'
import './review.css'

const likearr = [
  {
    url:"/massage/like",
    title:"我赞了谁"
  },
  {
    url:"/massage/like1",
    title:"谁赞了我"
  },
]

class Likeyy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rearr: []
    }
  }

  componentDidMount(){
    console.log("123");
    let id = localStorage.getItem('u_id')
    axios.get('http://localhost:8000/getlikeme',{
      params:{
        id
      }
    }).then(res=>{
      console.log(res);
      res.data.forEach(element => {
        element.addtimes = new Date(element.addtimes).toLocaleString().split(' ')[0]
      });
      this.setState({
        rearr:res.data
      })
    })
  }

  render() {
    return (
      <div style={{margin:"0 auto"}}>
      <div className="like-hed">
      <Router>
      {
        likearr.map((item,index)=>{
          if(this.props.history.location.pathname == item.url){
            return <div key={index} style={{width:"100px",height:"100%",borderBottom:"2px solid orange",textAlign:"center"}}>
              <Link to={item.url} style={{color:"orange"}}>{item.title}</Link>
            </div>
          }else{
            return <div key={index} style={{width:"100px",height:"100%",textAlign:"center"}}>
              <Link to={item.url} style={{color:"grey"}}>{item.title}</Link>
            </div>
          }
        })
      }
      </Router>
      </div>
      <div className="like-rev">
          {this.state.rearr.map((item, index) => {
            return <div key={index} className="like-revf" style={{ width: "100%", height: "100%" }}>
              <div className="like-reimg">
                <img src={item.u_header}></img>
              </div>
              <div className="like-rename">
                <div className="like-rehealike">
                  <div style={{width:"100%",display:"flex"}}>
                    <div className="like-rehead">
                      <span style={{fontSize:"10px"}}>{item.u_name}</span>
                      <span className="like-remyf" style={{fontSize:"10px",color:"grey"}}>好友</span>
                    </div>
                    <span style={{fontSize:"8px",color:"grey",marginLeft:"8px"}}>Ta赞了我的</span>
                  </div>
                  <span style={{ width: "100%",height:"55px",
                  overflow: "hidden", fontSize: "12px", color: "grey" }}>
                    {item.addtimes}</span>

                </div>
              </div>
              <div style={{width:"100px",height:"80px"}}>
                <img src={item.c_cover} style={{width:"100px",height:"80px"}}></img>
              </div>
            </div>
          })}
          </div>
      </div>);
  }
}

export default Likeyy;