import index from "../pages/admin/dashboard";
import Edit from "../pages/admin/products/Edit";
import List from "../pages/admin/products/List";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";

export const mainRoutes = [{
    path:"/login",
    component:Login
},
{
    path:"/404",
    component:PageNotFound
}
]
export const adminRoutes = [{
    path:"/admin/dashboard",
    component:index,
    isShow:true,
    title:"看板",
    icon:"area-chart"
},
{
    path:"/admin/products",
    component:List,
    exact:true,
    isShow:true,
    title:"商品管理",
    icon:"shop"
},
{
    path:"/admin/products/edit:id?",
    component:Edit,
    isShow:false,
},
]