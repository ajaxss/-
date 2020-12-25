import React from 'react'
import { Card, Table, Button,Popconfirm } from "antd"

const dataSource = [{
    id:1,
    name:"香皂",
    price:15
},
{
    id:2,
    name:"电脑",
    price:15000
},
{
    id:3,
    name:"手机",
    price:3500
},
]

function List(props) {
    const columns = [{
        title:"序号",
        key:'id',
        width:80,
        align:"center",
        render:(txt,record,index)=>index+1
    },
    {
        title:"名称",
        dataIndex:'name'
    },
    {
        title:"价格",
        dataIndex:'price'
    },
    {
        title:"操作",
        render:(txt,record,index)=>{
            return (
                <div>
                    <Button size="small" type="primary">修改</Button>
                    <Popconfirm title="确定删除此项?"
                    onCancel={()=>console.log("用户取消删除")}
                    onConfirmon={()=>console.log("用户确认删除")}
                    //API接口
                    >
                    <Button size="small" type="danger" style={{margin:"0 1rem"}}>删除</Button>
                    </Popconfirm>
                </div>
            )
        }
    },
]
    return (
        <Card title="商品列表" extra={
        <Button type="primary" size="small" onClick={()=>{props.history.push("/admin/products/edit")}}>新增</Button>
        }>
            <Table columns={columns} bordered dataSource={dataSource}></Table>
        </Card>
    )
}

export default List
