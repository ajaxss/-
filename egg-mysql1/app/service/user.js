const Service = require('egg').Service;

class User extends Service {
    //登录
    async login(data) {
        const {ctx} = this
        const results = await this.app.mysql.select('user', { // 搜索 post 表
            where: { u_name: data.user, status: 1 }, // WHERE 条件
        });
        let result = {}
        if (results.length<1) {
            result= {
                code: 0,
                msg: '用户不存在'
            }
        } else {
            if (data.passwd == results[0].u_passwd) {
                const row = {
                    u_ip: ctx.request.ip,
                };

                const options = {
                    where: {
                        u_id: results[0].u_id
                    }
                };
                await this.app.mysql.update('user', row, options);
                result={
                    u_id: results[0].u_id,
                    code: 1,
                    msg: "恭喜您，登陆成功"
                }
            } else {
                result={
                    code: 0,
                    msg: "密码错误"
                }
            }
        }
        console.log(result);
        return result;
    }

    //注册
    async regist(data) {
        const {
            ctx
        } = this;
        let result = await this.app.mysql.select('user',{
            where:{u_name:data.user}
        });
        console.log(result)
        if (result.length > 0) {
            return {
                code: 0,
                msg: "注册失败,用户名已存在"
            }
        } else {
            let results = await this.app.mysql.insert('user', {
                u_name: data.user,
                u_ip: ctx.request.ip,
                u_tel: data.tel,
                u_gender: data.gender,
                u_passwd: data.passwd,
            })
            console.log(result)
            if (results) {
                return {
                    code: 1,
                    msg: "注册成功"
                }
            }
        }
    }

    //获取用户信息	
    async user(data) {
        console.log(data)
        var sql
        if (data.u_name && data.u_passwd) {
            sql = `select * from user where  u_name='${data.u_name}' and u_passwd='${data.u_passwd}'`
            var goods = await this.app.mysql.query(sql);

            return goods;



        } else if (data.u_id && data.money == undefined) {
            sql = `select * from user where   u_id=${data.u_id}`


        } else if (data.money) {
            sql = `update user set money=${data.money}  where  u_id=${data.u_id}`

        }
        console.log(sql)

        var goods = await this.app.mysql.query(sql);
        console.log(goods)

        return goods;



    }
}

module.exports = User;