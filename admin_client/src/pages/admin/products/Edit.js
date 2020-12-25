import React from 'react'
import { Form,Card,Button,Input, message } from 'antd'

function Edit(props) {
    const {getFieldDecorator} = props.form
    const handleSubmit = e =>{
        console.log(e);
        e.preventDefault();
        //验证ll
        props.form.validateFieldsAndScroll((err,values)=>{
            if (!err) {
                console.log(values);
                console.log('提交');
            }else{
                message.error("请输入正确内容")
            }
        })
    }
    return (
       <Card title='商品编辑' extra={
           <Button type='primary' onClick={()=>props.history.push('/admin/products')}>返回</Button>
       }>
           <Form onSubmit={e=>handleSubmit(e)}>
               <Form.Item label='商品名称'>
                   {
                       getFieldDecorator('name',{
                           rules:[{
                               required:true,
                               message:"请输入商品名称"
                           }]
                       })(<Input placeholder='请输入商品名称'></Input>)
                   }</Form.Item>
                   <Form.Item label='商品价格'>
                   {
                       getFieldDecorator('price',{
                           rules:[{
                               required:true,
                               message:"请输入商品价格"
                           }]
                       })(<Input placeholder='请输入商品价格'></Input>)
                   }</Form.Item>
               <Form.Item><Button htmlType='submit' type='primary'>保存</Button></Form.Item>
           </Form>

       </Card>
    )
}
 
export default Form.create({name:'productEdit'})(Edit)
