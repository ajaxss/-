import React, { PureComponent } from "react";
import { Button } from "antd";
import axios from "axios";
const { Fragment } = React;
global.constants = {
  website: 'http://localhost:8000',
  name: '我的书籍',
};
let config = {
  method: 'post',
  headers: { 'Content-Type': 'multipart/form-data' }
}
const saveStoreZeroCharge =
  global.constants.website + "/uploadimg";
class Operation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      showImg: 'none',
      token: 'jianshu',
      name: 'CoderZb',
      storeId: '91',
      subsidyAmount: '82',
      imagePreviewUrl: '',
      s_title: '',//商品标题
      s_z: '',
      s_content: '',//商品内容
      s_cover: '',//商品封面
      s_price: '',//商品价格
      s_num: '',//商品数量
    }
  }
  render() {
    var { imagePreviewUrl, showImg } = this.state;
    var imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<label for="avatarFor">< img style={{ width: '80px', height: '80px' }} src={imagePreviewUrl} /></label>);
      showImg = 'none';
    } else {
      showImg = 'block';
    }

    return (
      <div style={{ width: '5rem', height: '12.34rem', overflow: "scroll", margin: '0px auto' }}>
        <Fragment>
          <br></br>
          <p style={{ margin: "0" }}>上传书籍图片:</p>
          <br></br>
          <input id="avatarFor" style={{ display: 'none' }} type="file" onChange={(e) => this.handleImageChange(e)} />
          {imagePreview}
          <label style={{ width: 216, height: 300, lineHeight: '300px', color: "#1890FF", border: "1px dashed #1890FF", padding: '3px 10px ', display: showImg }} for="avatarFor">+点击上传图片</label>
          <br></br>

        书名:<input style={{ width: '200px' }} type="text" onChange={(e) => this.bookname('1', e)} placeholder="必填" />
          <br></br>
          <br></br>

        作者:<input style={{ width: '200px' }} type="text" onChange={(e) => this.bookname('2', e)} placeholder="选填" />
          <br></br>
          <br></br>

        价格:<input style={{ width: '200px' }} type="text" onChange={(e) => this.bookname('3', e)} placeholder="必填" />
          <br></br>
          <br></br>

        数量:<input style={{ width: '200px' }} type="text" onChange={(e) => this.bookname('4', e)} placeholder="必填" />
          <br></br>
          <br></br>

          <i style={{ position: 'relative', top: '-90px' }}>简介:</i>
          <textarea style={{ width: 200, height: 100 }} onChange={(e) => this.bookname('5', e)} placeholder="必填"></textarea>
          <br></br>
          <br></br>

          <Button
            style={{ width: '100px', height: 30 }}
            key="submit"
            type="primary"
            onClick={this.book}
          >
            确定{" "}
          </Button>
        </Fragment>
      </div>

    );
  }
  bookname(str, e) {
    switch (str) {
      case '1':
        this.setState({
          s_title: e.target.value
        })
        break;
      case '2':
        this.setState({
          s_z: e.target.value
        })
        break;
      case '3':
        this.setState({
          s_price: e.target.value
        })
        break;
      case '4':
        this.setState({
          s_num: e.target.value
        })
        break;
      case '5':
        this.setState({
          s_content: e.target.value
        })
        break;
      default:
        break;
    }
  }

  handleImageChange(e) {
    e.preventDefault();
    var reader = new FileReader();
    var file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
    setTimeout(() => {
      this.chargeFunc()
    }, 100);
  }
  chargeFunc = (e) => {
    const formData = new FormData();
    // formData.append('file',value);
    formData.append('filename', this.state.file)
    formData.append('token', this.state.token);
    formData.append('userName', this.state.name);
    formData.append('storeId', this.state.storeId);
    formData.append('chargeMoney', this.state.subsidyAmount);

    axios.post(saveStoreZeroCharge, formData, config).then((res) => {
      console.log(res)
        this.setState({
                s_cover: res.data.src
              });
      if (res.data.msg == '用户登陆已过期') {
        alert("请重新登录");
        return false;
      }
      if (res.data.status === 200) {

        // this.getStoreInfo();
      }
      if (res.data.status != 200) {

        return false;
      }
      
    }).catch((error) => {
      console.log(error);
    })
  }
  book = (e) => {
    let data = {
      s_title: this.state.s_title,
      s_content: this.state.s_content,
      s_cover: this.state.s_cover,
      s_price: this.state.s_price,
      s_num: this.state.s_num,
    }
    console.log(data)

    setTimeout(() => {
      if (this.state.s_title &&
        this.state.s_content &&
        this.state.s_cover &&
        this.state.s_price &&
        this.state.s_num) {
        
  
        axios.post(global.constants.website + '/addshop', { data }).then((res) => {
          alert(res.data.msg)
          if (res.data.msg == "提交成功") {
            this.props.history.replace("/add")
          }
        }).catch((error) => {
          console.log(error);
        })
      } else {
        alert('请输入必填项')
        return
      }
  
    }, 100);
    
  }
}
export default Operation;