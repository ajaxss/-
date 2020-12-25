import {get,post,put,del} from '../Utils/request';

//获取
export function listApi(page=1) {
    return get("/api/v1/admin/products",{page})
}
//创建
export function createApi(data) {
    return post("/api/v1/admin/products",data)
}
//修改
export function modifyOne(id,data) {
    return put(`/api/v1/admin/products/${id}`,data)
}
//删除
export function delOne(id) {
    return del(`/api/v1/admin/products/${id}`)
}