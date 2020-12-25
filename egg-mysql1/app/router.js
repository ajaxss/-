'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;




	// router.get("/getproduct", controller.tbshopgoods.getproduct);
	// router.post("/addpro", controller.tbshopgoods.addproduct)
	// router.post("/delpro", controller.tbshopgoods.delproduct)


	//图片上传
	router.post('/uploadimg', controller.fileUpload.uploadImg);

	//添加书籍商品
	router.post("/addshop", controller.maikeshop.addproduct)


	//获取书籍商品
	router.get("/getshop", controller.maikeshop.getproduct)

	//商品加入购物车
	router.get("/addcart", controller.maikeshop.addcart)

	//商品收藏
	router.get("/collect", controller.maikeshop.collect)

	//用户登录
	// router.post("/user", controller.user.user)

	//用户订单
	router.post("/orders", controller.maikeshop.orders)

	//登录接口完成
	router.post('/login', controller.user.login)

	//注册接口完成
	router.post('/regist', controller.user.regist)

	//单图片上传完成
	router.post('/uplodcover', controller.circle.index)

	//动态发布完成
	router.post('/pubcondition', controller.circle.pubcondition)

	//获取自己的动态完成
	router.get('/getusercond', controller.circle.getusercond)

	//获取好友完成
	router.get('/getfriends', controller.circle.getfriends)

	//点赞完成
	router.post('/like', controller.circle.like)

	//获取别人对我的评论
	router.get('/getreview', controller.circle.getreview)

	//评论动态
	router.post('/reviewcon', controller.circle.reviewcon)

	//获取谁赞了我ok
	router.get('/getlikeme',controller.circle.getlikeme)

	//获取我赞了谁ok
	router.get('/getlikewho',controller.circle.getlikewho)

	//获取指定id的动态完成ok
	router.get('/getconditionid',controller.circle.getconditionid)

	//获取好友动态ok
	router.get('/getconditionf',controller.circle.getconditionf)

	//获取聊天ok
	router.get('/getchat',controller.circle.getchat)

	//获取用户信息完成
	router.get('/getuser',controller.circle.getuser)

	//模糊查询ok
	router.get('/getmohu',controller.circle.getmohu)

	//用户信息
	router.post("/user", controller.user.user)


};
