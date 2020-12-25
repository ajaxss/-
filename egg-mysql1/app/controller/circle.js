'use strict';

const Controller = require('egg').Controller;
var path=require("path");
var fs=require("fs");

class circle extends Controller{
    //图片上传ok
    async index(){
        const { ctx } = this;
	        let frontPic  = ctx.request.body;
			const dataBuffer = Buffer.from(frontPic, 'base64')
			let filename = (new Date()).getTime() + Math.random().toString(36).substr(2) + '.png';
			let dest = path.dirname(__dirname) + '/public/img/' + filename
			console.log(dest)
	        await fs.writeFile(dest, dataBuffer, function(err) {
	                if(err){
	                  ctx.body = err
	                }
	            });
	        let cc = this.app.config.cluster.listen;
	        let imgurl = `http://${cc.hostname}:${cc.port}/public/img/${filename}`;
	        ctx.body = {imgurl};
    }

    //发布动态ok
    async pubcondition(){
        const {ctx} = this;
        let data = ctx.request.body
        ctx.body = await ctx.service.circle.pubcondition(data);
    }

    //获取自己的动态ok
    async getusercond(){
        const {ctx} = this;
        ctx.body = await ctx.service.circle.getusercond(ctx.query.id);
    }


    //获取好友ok
    async getfriends(){
        const {ctx} = this;
        ctx.body = await ctx.service.circle.getfriends(ctx.query.id)
    }

    //获取聊天ok
    async getchat(){
        const {ctx} = this;
        ctx.body = await ctx.service.circle.getchat(ctx.query.id)
    }

    //点赞ok
    async like(){
        const {ctx} = this;
        let data = ctx.request.body
        ctx.body = await ctx.service.circle.like(data)
    }

    //获取别人对我的评论
    async getreview(){
        const {ctx} = this;
        ctx.body = await ctx.service.circle.getreview()
    }


    //评论动态
    async reviewcon(){
        const {ctx} = this;
        ctx.body = await ctx.service.circle.reviewcon()
    }

    //获取谁赞了我
    async getlikeme(){
        const {ctx} = this;
        ctx.body = await ctx.service.circle.getlikeme(ctx.query.id)
    }

    //获取我赞了谁
    async getlikewho(){
        const {ctx} = this;
        ctx.body = await ctx.service.circle.getlikewho(ctx.query.id)
    }

    //获取指定问号传值的动态ok
    async getconditionid(){
        const {ctx} = this;
        ctx.body = await ctx.service.circle.getconditionid(ctx.query.c_id)
    }


    //获取好友动态ok
    async getconditionf(){
        const {ctx} = this;
        ctx.body = await ctx.service.circle.getconditionf(ctx.query.id)
    }

    //获取用户信息ok
    async getuser(){
        const {ctx} = this;
        ctx.body = await ctx.service.circle.getuser(ctx.query.id)
    }

    //模糊查询，不同的路由查询的不同ok
    async getmohu(){
        const {ctx} = this;
        let form = ctx.query
        console.log(form);
        ctx.body = await ctx.service.circle.getmohu(form)
    }




}

module.exports = circle;