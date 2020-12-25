import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import React from "react";



function successToast() {
  Toast.success('Load success !!!', 1);
}



class ToastExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modal1: false,
        modal2: false,
        close: false,
        close1: true,
        u_id: 1,
        money: 0,
        tis: '',
        password: ''

    };
}

  render() {
    return (
      <WingBlank>  
        <WhiteSpace />
        <Button onClick={successToast}>success</Button>
        <WhiteSpace />
      </WingBlank>
    );
  }
}



export default ToastExample