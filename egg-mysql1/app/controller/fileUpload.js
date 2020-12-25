'use strict';

const Controller = require('egg').Controller;
var path=require("path");
var fs=require("fs");

class FileUploadController extends Controller {
	async uploadImg() {
		const {ctx} = this;
		//记得去public下创建好upload文件夹
		const dest = '/public/upload/';
		const file = ctx.request.files[0];
		console.log(ctx.request.files);
		
		//path.dirname  : /egg-mysql/app/controller-----/egg-mysql/app/
		let to = path.dirname(__dirname) + dest + path.basename(file.filepath);
		// 处理文件，放到指定的目录
		await fs.copyFileSync(file.filepath, to);
		// 存放好文件后，删除原文件数据
		fs.unlinkSync(file.filepath);
		let cluster = this.app.config.cluster.listen;
		// 返回图片路径
		ctx.body = {
			code: 0,
			msg: "",
			src:`http://localhost:${cluster.port}${dest}${path.basename(file.filepath)}`
		};
		
	}
}


module.exports = FileUploadController;
