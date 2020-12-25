const Service = require('egg').Service;

class MaikeshopService extends Service {
	//   async getproduct(pagenum,total,keyword) {
	// 	var sql="select * from shops where status=0"
	// 	if(keyword){
	// 		sql+=` and kw like '%${keyword}%'`
	// 	}
	// 	sql+=` limit ${(pagenum-1)*total},${total}`
	// 	var goods=await this.app.mysql.query(sql);
	// 	return goods;
	//   }
	async getproduct(data) {
		console.log(data)
		var sql
		if (data.kw) {
			sql = `select * from shops where status=1 and s_title like '%${data.kw}%'`
			var goods = await this.app.mysql.query(sql);
			console.log(goods)
			return goods;
		}
		if (data.types) {
			var sql = `select * from shops where  status=1 and types=${data.types}`
			console.log(sql)
			var goods = await this.app.mysql.query(sql);
			console.log(goods)
			return goods;
		}
		if (data.id) {
			var sql = `select * from shops where  s_id=${data.id}`
			console.log(sql)
			var goods = await this.app.mysql.query(sql);
			console.log(goods)
			return goods;
		}
		// if(keyword){
		// 	sql+=` and kw like '%${keyword}%'`
		// }
		// sql+=` limit ${(pagenum-1)*total},${total}`

	}


	async addproduct(product) {
		console.log(1, product)
		var sql = `INSERT INTO shops(s_title,s_content,s_cover,s_price,s_num,types)VALUES('${product.s_title}','${product.s_content}','${product.s_cover}','${product.s_price}','${product.s_num}',1)`
		var result = await this.app.mysql.query(sql);
		if (result.affectedRows) {
			result = {
				code: 1,
				msg: "提交成功",
			}
		} else {
			result = {
				code: 0,
				msg: "提交失败"
			}
		}
		return result;
	}

	//未用
	async delproduct(id) {
		var sql = `update shops set status=1 where id=${id}`
		var result = await this.app.mysql.query(sql);
		if (result.affectedRows) {
			result = {
				code: 1,
				msg: "删除成功"
			}
		} else {
			result = {
				code: 0,
				msg: "删除失败"
			}
		}
		return result;
	}

	//商品加购
	async addcart(data) {
		if (data.u_id && data.s_id == undefined && data.co_num == undefined) {
			var sql1 = `SELECT  * FROM  cart AS c  JOIN  shops AS p ON c.s_id=p.s_id WHERE c.u_id=${data.u_id} and 'p.status'=0`
			var result1 = await this.app.mysql.query(sql1);
			return result1;
		}
		var sql1 = `select * from cart where u_id=${data.u_id} and s_id=${data.s_id}`
		var result1 = await this.app.mysql.query(sql1);
		if (result1[0]) {
			var sql = `update cart set ca_num=${Number(data.co_num) + (Number(result1[0].ca_num))} where ca_id=${result1[0].ca_id}`
			var result = await this.app.mysql.query(sql);
		} else {
			var sql = `INSERT INTO cart(u_id,s_id,ca_num)VALUES('${data.u_id}','${data.s_id}',${data.co_num})`
			var result = await this.app.mysql.query(sql);
		}
		return result;
	}

	//商品收藏
	async collect(data) {
		console.log(data)

		if (data.u_id && data.s_id && data.status == 'get') {
			var sql1 = `SELECT  * FROM  collect AS c  JOIN  shops AS p ON p.s_id=${data.s_id} WHERE c.u_id=${data.u_id} AND c.s_id=${data.s_id}`
			var result1 = await this.app.mysql.query(sql1);
			return result1
		}

		if (data.u_id && data.s_id && data.status == 'set') {
			var sql1 = `SELECT  * FROM  collect AS c  JOIN  shops AS p ON p.s_id=${data.s_id} WHERE c.u_id=${data.u_id} AND c.s_id=${data.s_id}`
			var result1 = await this.app.mysql.query(sql1);
			var sql
			if (result1[0]) {
				console.log(result1[0].co_status)
				sql = `update collect set co_status=${result1[0].co_status == '1' ? 0 : 1} where co_id=${result1[0].co_id}`
			} else {
				sql = `INSERT INTO collect (u_id,s_id,co_status)VALUES('${data.u_id}','${data.s_id}',1)`
			}
			await this.app.mysql.query(sql);
			return await this.app.mysql.query(sql1);
		}
		var sql1 = `SELECT  * FROM  collect AS c  JOIN  shops AS p ON p.s_id=c.s_id WHERE co_status=1`
		return await this.app.mysql.query(sql1);


	}
	//订单
	async orders(product) {
		console.log(1000, product)
		if (product.length > 1) {
			product.map((e) => {
				if (e.checked && e.u_id && e.s_id && e.ca_num && e.people_id) {
					var sql = `INSERT INTO pay_desc(u_id,s_id,pay_num,people_id)VALUES('${e.u_id}','${e.s_id}','${e.ca_num}','${e.people_id}')`
					this.app.mysql.query(sql);
				}
			});
			return result = {
				code: 1,
				msg: "订单生成",
			}
		}
		//48bd765a-4d6b-4374-952a-223c29db4cb5.jpg
		if (product.u_id&&product.s_id&&product.pay_num&&product.people_id) {
			
			// let data = new Date();
			// let newdata = data.getFullYear().toString() + `年` + data.getMonth().toString() + `月` + data.getHours().toString() + `:` + data.getMinutes().toString();
			// console.log(newdata)
			var sql = `INSERT INTO pay_desc(u_id,s_id,pay_num,people_id)VALUES('${product.u_id}','${product.s_id}','${product.pay_num}','${product.people_id}')`
			console.log(sql)
			var result = await this.app.mysql.query(sql);
			return result
		}
		if (product.u_id&&product.pay_id) {
			var sql1 = `SELECT  * FROM  pay_desc AS c  JOIN  shops AS p ON p.s_id=c.s_id  JOIN  people AS r ON c.people_id=r.people_id WHERE c.u_id=${product.u_id} and c.pay_id=${product.pay_id}`
			console.log(sql1)
			var result1 = await this.app.mysql.query(sql1);
			return result1
		}
		if (product.u_id) {
			var sql1 = `SELECT  * FROM  pay_desc AS c  JOIN  shops AS p ON p.s_id=c.s_id  JOIN  people AS r ON c.people_id=r.people_id WHERE c.u_id=${product.u_id}`
			console.log(sql1)
			var result1 = await this.app.mysql.query(sql1);
			return result1
		}

	}

}

module.exports = MaikeshopService;