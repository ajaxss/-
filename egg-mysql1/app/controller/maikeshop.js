

'use strict';

const Controller = require('egg').Controller;

class MaikeshopController extends Controller {
  // async getproduct() {
  //   const { ctx } = this;
  //   ctx.body=await this.ctx.service.maikeshop.getproduct(ctx.request.query.types,ctx.request.query.total,ctx.request.query.keyword)
  // }
  //获取商品
  async getproduct() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.maikeshop.getproduct(ctx.request.query)
  }

  //添加商品
  async addproduct() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.maikeshop.addproduct(ctx.request.body.data)
  }

  async delproduct() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.maikeshop.delproduct(ctx.request.body.id)
  }

  //商品加购
  async addcart() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.maikeshop.addcart(ctx.request.query)
  }
  //商品收藏
  async collect() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.maikeshop.collect(ctx.request.query)
  }

  //订单
  async orders() {
    const { ctx } = this;
    console.log(2, ctx.request.body.data)
    ctx.body = await this.ctx.service.maikeshop.orders(ctx.request.body.data)
  }

}

module.exports = MaikeshopController;
