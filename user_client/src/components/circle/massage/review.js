import React from 'react';
import './review.css'

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rearr: [
        {
          header: "http://localhost:8000/public/bottom/header.png",
          name: "海绵宝宝",
          content: "今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋",
          time: "11:00",
          cover: "http://localhost:8000/public/bottom/404.png"
        },
        {
          header: "http://localhost:8000/public/bottom/header.png",
          name: "海绵宝宝",
          content: "今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋今天下棋",
          time: "11:00",
          cover: "http://localhost:8000/public/bottom/404.png"
        },
      ]
    }
  }
  render() {
    return (
      <div className="con-rev">
          {this.state.rearr.map((item, index) => {
            return <div key={index} className="con-revf" style={{ width: "100%", height: "100%" }}>
              <div className="con-reimg">
                <img src={item.header}></img>
              </div>
              <div className="con-rename">
                <div className="con-reheacon">
                  <div style={{width:"96%",display:"flex",justifyContent:"space-between"}}>
                    <div className="con-rehead">
                      <span style={{fontSize:"10px"}}>{item.name}</span>
                      <span className="con-remyf" style={{fontSize:"10px",color:"grey"}}>好友</span>
                    </div>
                    <span>{item.time}</span>
                  </div>
                  <span style={{ width: "100%",height:"55px",
                  display: "-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp: "4",
                  overflow: "hidden", fontSize: "12px", color: "grey" }}>
                    {item.content}</span>

                </div>
              </div>
              <div style={{width:"100px",height:"80px"}}>
                <img src={item.cover} style={{width:"100px",height:"80px"}}></img>
              </div>
            </div>
          })}
        

      </div>);
  }
}

export default Review;