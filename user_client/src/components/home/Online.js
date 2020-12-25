import React from 'react';
import './Online.css';
// import axios from "axios";
import { Button } from 'antd-mobile';


class Online extends React.Component {
  constructor() {
    super()
    
  }

  // componentDidMount(){
  //   axios.get("")
  //   .then(res=>{
  //     console.log(res)
  //   })
  //   .catch()
  // }
  // Addvideo(){

  // }

  render() {
    return (
      <div className="online1">
        <div className="video">
          <video src={require('../../video/1.mp4').default} controls></video>
          <video src={require('../../video/1.mp4').default} controls></video>
          <video src={require('../../video/1.mp4').default} controls></video>
          <video src={require('../../video/1.mp4').default} controls></video>
          
        </div>
        {/* <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>添加</Button> */}
      </div>
    )
  }
}

export default Online;