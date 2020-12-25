// FormElememt
import React from "react";
import { withRouter } from 'react-router-dom'
import { List,Toast, TextareaItem, WhiteSpace, Button,ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import { createForm } from 'rc-form';
import './publish.css'
import axios from "axios";

const data = [];
class Publish extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: data,
            multiple: false,
            content: '',
            cover: '',
        }
    }
      onChange = (files, type, index) => {
        this.setState({
            files,
        });
        axios.post('http://localhost:8000/uplodcover',files)
        .then(res=>{
                this.state.cover = res.data.imgurl
             
        })
      }

    publish() {
        let form = {
            content:this.state.content,
            cover:this.state.cover,
            u_id:localStorage.getItem('u_id')
        }
        console.log(form);
        axios.post('http://localhost:8000/pubcondition',form)
        .then(res=>{
            if(res.data.code==1){
                Toast.info(res.data.msg, 1);
                this.props.history.push('/shell')
            }else{
                Toast.info(res.data.msg,1)
            }
            
        })
    }
    cancel = (key, val) => {
        this.setState({
            [key]: ""
        })
    }
    change(value){
        if(value.length>0){
            this.state.content = value;
        }else{
            Toast.info("没有内容",1)
        }
        
    }
    componentDidMount() {
    }
    mass() {
        this.props.history.push('/shell')
    }
    cancel=()=>{
        this.props.history.push('/shell')
    }
    render() {
        const { files } = this.state;
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <div className="pub-head"><img src="http://localhost:8000/public/bottom/left.png"
                    style={{ width: "12px", height: "14px", marginRight: "140px" }} onClick={this.mass.bind(this)}>
                </img>
                    <span>发布作品</span>
                </div>
                <div style={{ width: "100%", height: "620px", backgroundColor: "#fff",lineHeight:'2'}}>
                    <WingBlank>
                        动态封面
                        <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 2}
                            multiple={false}
                        />
                    </WingBlank>
                    <List renderHeader={() => '动态内容'}>
                        <TextareaItem style={{ color: "grey", fontSize: "12px" }}
                            {...getFieldProps('count')}
                            onChange={this.change.bind(this)}
                            rows={5}
                            count={1000}
                        />

                    </List>
                    <WhiteSpace />
                    <Button onClick={this.publish.bind(this)} type="primary">发布</Button>
                    <WhiteSpace />
                    <Button onClick={this.cancel} type="primary">取消</Button>
                </div>
                <Button></Button>
            </div>
        )
    }
}

const TextareaItemExampleWrapper = createForm()(Publish);

export default withRouter(TextareaItemExampleWrapper)