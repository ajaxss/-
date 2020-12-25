import IndexPage from "../views/IndexPage";
import ShoppingPage from "../views/ShoppingPage"
import Learn from "../views/LearnPage"
import Circle from "../views/CirclePage"
import Login from "../views/login"
import Regist from "../views/regist"
import UserPage from "../views/UserPage"
//底部栏
import BottomBar from "../components/BottomBar"
import Publish from "../views/publish"

//商城二级路由
import Shop from "../components/Shopping/Shop"
import Like from "../components/Shopping/Like"
import Cart from "../components/Shopping/Cart"

import Shop_desc from "../components/Shopping/Shop_desc"


// 添加书籍商品的路由
import AddShop from "../components/Add/AddShop"

//我的订单路由
import Pay_desc from "../components/Shopping/Pay_desc/Myorder"
//订单详情
import Myorder_desc from "../components/Shopping/Pay_desc/Myorder_desc"

//学习中心路由
import Timetable from "../components/Learn/Timetable";
import ColCour from "../components/Learn/ColCour";
import PurCour from "../components/Learn/PurCour";
//学习中心-已购课程
import Activity from "../components/Learn/pur/Activity";
import Intrant from "../components/Learn/pur/Intrant";
import Offline from "../components/Learn/pur/Offline";
import Online from "../components/Learn/pur/Online";
//学习中心-收藏的课
import Act from "../components/Learn/col/Activity";
import Int from "../components/Learn/col/Intrant";
import Off from "../components/Learn/col/Offline";
import Onl from "../components/Learn/col/Online";
//学习中心-详情
import Details from "../components/Learn/details/Details";



//首页二级路由
import Recommend from "../components/home/Recommend";
import Online1 from "../components/home/Online";
import Offline1 from "../components/home/Offline";



//圈子多级路由
import Massage from "../components/circle/massage/massage"
import Relation from "../components/circle/relation/relation";
import Shell from "../components/circle/shell/shell"
import Condition from "../components/circle/condition/condition"


let routes = [
    //实现BottomBar和页面同时显示，利用路由匹配多匹配的特性
    {
        path: "/",
        component: BottomBar
    },
    {
        path: "/add",
        component: AddShop
    },
    {
        path: "/index",
        component: IndexPage
    },
    {
        path: "/shopping",
        component: ShoppingPage
    },
    {
        path: "/learn",
        component: Learn
    },
    {
        path: "/circle",
        component: Circle
    },
    {
        path: "/userinfo",
        component: UserPage
    },
    //登录注册
    {
        path: "/login",
        component: Login
    },
    {
        path: "/regist",
        component: Regist
    },

    {//首页-推荐
        path: "/index/recommend",
        component: Recommend
    },
    {//首页-线上
        path: "/index/online",
        component: Online1
    },
    {//首页-线下
        path: "/index/xianxia",
        component: Offline1
    },
    //商城二级路由
    {//商城
        path: "/shopping/shop",
        component: Shop

    },
    {//收藏
        path: "/shopping/like",
        component: Like
    },
    {//购物车
        path: "/shopping/cart",
        component: Cart
    },
    {//商品详情
        path: "/Shop_desc/:id",
        component: Shop_desc
    },
    {//我的订单
        path: "/myorder",
        component: Pay_desc
    },
    {//订单详情
        path: "/order/:pay_id",
        component: Myorder_desc
    },
    {//学习中心-我的课程表
        path: "/learn/timetable",
        component: Timetable
    },
    {//学习中心-已购课程
        path: "/purCour",
        component: PurCour
    },
    {//学习中心-收藏的课
        path: "/colCour",
        component: ColCour
    },
    {//学习中心-已购课程-线上课
        path: "/purCour/online",
        component: Online
    },
    {//学习中心-已购课程-线下课
        path: "/purCour/offline",
        component: Offline
    },
    {//学习中心-已购课程-加入的团
        path: "/purCour/intrant",
        component: Intrant
    },
    {//学习中心-已购课程-活动
        path: "/purCour/activity",
        component: Activity
    },
    {//学习中心-收藏的-线上课
        path: "/colCour/online",
        component: Onl
    },
    {//学习中心-收藏的课-线下课
        path: "/colCour/offline",
        component: Off
    },
    {//学习中心-收藏的课-加入的团
        path: "/colCour/intrant",
        component: Int
    },
    {//学习中心-收藏的课-活动
        path: "/colCour/activity",
        component: Act
    },
    {//学习中心-详情
        path: "/details",
        component: Details
    },


    //圈子
    {
        path:"/Condition",
        component:Condition
    },
    {
        path:"/massage",
        component:Massage
    },
    {
        path:"/relation",
        component:Relation
    },
    {
        path:"/shell",
        component:Shell
    },
    {
        path:"/publish",
        component:Publish
    },

]
export default routes;