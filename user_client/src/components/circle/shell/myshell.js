import React from 'react';
import axios from 'axios'

class Myshell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rearr: [],
      user:{}
    }
  }

  componentDidMount(){
    let id = localStorage.getItem('u_id')
    axios.get('http://localhost:8000/getusercond',{
      params:{
        id
      }
    })
    .then(res=>{
      console.log(res);
      res.data.forEach(element => {
      element.addtimes=new Date(element.addtimes).toLocaleString().split(' ')[0]; 
      });
      this.setState({
        rearr:res.data
      })
    })

    axios.get('http://localhost:8000/getuser',{
      params:{
        id
      }
    }).then(res=>{
      console.log(res);
      this.setState({
        user:res.data
      })
    })
  }

  changelike(id){
    let form = {
      u_id:localStorage.getItem('u_id'),
      c_id:id
    }
    axios.post('http://localhost:8000/like',form)
    .then(res=>{
      let arr = this.state.rearr;
      if(res.data.code==1){        
        arr.forEach(element=>{
          if(element.c_id==id){
            element.status = 1
          }
        })
      }else{
        arr.forEach(element=>{
          if(element.c_id==id){
            element.status = 0
          }
        })
      }
      this.setState({
        rearr:arr
      })
    })
  }

  render() {
    return (
      <div className="myshell-rev">
          {this.state.rearr.map((item,index) => {
            return <div key={index} className="myshell-revf" style={{ width: "100%", height: "100%" }}>
              <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <div className="myshell-reimg">
                <img src={this.state.user.u_header}></img>
              </div>
              <div style={{width:"96%",display:"flex",justifyContent:"space-between"}}>
                    <div className="myshell-rehead">
                      <span style={{fontSize:"10px"}}>{this.state.user.u_name}</span>
                    </div>
                    <span>{item.addtimes}</span>
                  </div>
                  </div>
              <div className="myshell-rename">
                <div className="myshell-reheacon">
                  
                  <span style={{ width: "100%",height:"55px",
                  display: "-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp: "4",
                  overflow: "hidden", fontSize: "12px", color: "grey" }}>
                    {item.c_content}</span>

                </div>
              </div>
              <div style={{width:"80%",height:"140px",marginLeft:"40px",marginBottom:'10px'}}>
                <img src={item.c_cover} style={{width:"100%",height:"100%"}}></img>
              </div>
              <div style={{width:"100%",textAlign:"right"}}>
                {item.status==0?<img src="http://localhost:8000/public/like1.png"
                style={{width:"20px",height:"16px"}} onClick={this.changelike.bind(this,item.c_id)}></img>:
                <img src="http://localhost:8000/public/like.png"
                style={{width:"20px",height:"16px"}} onClick={this.changelike.bind(this,item.c_id)}></img>
                }
                <img src="http://localhost:8000/public/bottom/review.png"
                style={{marginLeft:"15px"}}></img>
              </div>
            </div>
          })}
        

      </div>);
  }
}

export default Myshell;