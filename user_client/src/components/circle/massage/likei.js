import React from 'react';
import axios from 'axios'
import './review.css'

class Likei extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rearr: []
    }
  }

  componentDidMount(){
    console.log("5555")
    let id = localStorage.getItem('u_id')
    axios.get('http://localhost:8000/getlikewho',{
      params:{
        id
      }
    }).then(res=>{
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
      <div className="like-rev">
          {this.state.rearr.map((item, index) => {
            return <div key={index} className="like-revf" style={{ width: "100%", height: "100%" }}>
              <div className="like-reimg">
                <img src={item.u_header}
                style={{
                  width:'40px',height:'40px',zIndex:'1'
              }}></img>
              </div>
              <div className="like-rename">
                <div className="like-rehealike">
                  <div style={{width:"100%",display:"flex"}}>
                    <div className="like-rehead">
                      <span style={{fontSize:"10px"}}>{item.u_name}</span>
                      <span className="like-remyf" style={{fontSize:"10px",color:"grey"}}>好友</span>
                    </div>
                    <span style={{fontSize:"8px",color:"grey",marginLeft:"8px"}}>我赞了Ta的</span>
                  </div>
                  <span style={{ width: "100%",height:"55px",
                  overflow: "hidden", fontSize: "12px", color: "grey" }}>
                    {item.addtimes}</span>

                </div>
              </div>
              <div style={{width:"100px",height:"80px"}}>
                <img src={item.c_cover} style={{width:"100%",height:"100%"}}></img>
              </div>
            </div>
          })}
        

      </div>);
  }
}

export default Likei;