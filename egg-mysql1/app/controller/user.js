'use strict';

const Controller = require('egg').Controller;
var path=require("path");
var fs=require("fs");

class User extends Controller{
    //登录
    async login(){
        const {ctx} = this;
        let data = ctx.request.body
        let result = await ctx.service.user.login(data)
        ctx.body = result
    }

    //注册
    async regist(){
        const {ctx} = this;
        let data = ctx.request.body
        ctx.body = await ctx.service.user.regist(data)
    }

      //获取用户信息
  async user() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.user.user(ctx.request.body.data)
  }
    
}

module.exports = User;