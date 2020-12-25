const Service = require('egg').Service;

class Circle extends Service {
    //发布动态ok
    async pubcondition(data) {
        console.log(data.cover.length);
        if (data.cover.length <= 0) {
            return {
                code: 0,
                msg: "请上传封面"
            }
        } else if (data.content.length <= 0) {
            return {
                code: 0,
                msg: "请输入动态内容"
            }
        } else if (data.u_id.length <= 0) {
            return {
                code: 0,
                msg: "请登录"
            }
        } else {
            const result = await this.app.mysql.insert('condition',
                { c_content: data.content, c_cover: data.cover, u_id: data.u_id, addtimes: this.app.mysql.literals.now });
            if (result) {
                return {
                    code: 1,
                    msg: "发布成功"
                }
            } else {
                return {
                    code: 0,
                    msg: "发布失败，请重新发布！"
                }
            }
        }

    }

    //获取自己的动态ok
    async getusercond(id) {
        const result = await this.app.mysql.select('condition', { // 搜索 post 表
            where: { u_id: id, status: 1 }, // WHERE 条件
        });
        if (result.length < 1) {
            return {
                code: 0,
                msg: "您还未发布动态"
            }
        } else {
            for (let i = 0; i < result.length; i++) {
                let resl = await this.app.mysql.select('likes',
                    {
                        where: { u_id: result[i].u_id, c_id: result[i].c_id },
                    })
                if (resl.length > 0) {
                    result[i].status = resl[0].status
                } else {
                    result[i].status = 0
                }
            }
            return result
        }
    }

    //获取好友ok
    async getfriends(id) {
        console.log(id);
        let sql = `SELECT u.u_id,u.u_name,u.u_gender,u.u_header,u.name from user as u join friends as f
        where f.u_id=${id} and f.u1_id=${id}`
        const results = await this.app.mysql.query(sql)
        return results
    }

    async getchat(id){
        let sql = `SELECT u.u_name,u.u_header,c.chart_content,c.addtimes  FROM user AS u JOIN chat AS c WHERE  u.u_id = c.u1_id AND ${id} = c.u_id`
            const result = await this.app.mysql.query(sql)
            return result
    }

    async like(data) {
        const result = await this.app.mysql.select('likes', { // 搜索 post 表
            where: { u_id: data.u_id, c_id: data.c_id }, // WHERE 条件
        });
        if (result.length < 1) {
            await this.app.mysql.insert('likes',
                { u_id: data.u_id, c_id: data.c_id, addtimes: this.app.mysql.literals.now, status: 1 })
            return {
                code: 1,
            }
        } else {
            if (result[0].status == 0) {
                const row = {
                    status: '1',
                };
                const options = {
                    where: {
                        u_id: data.u_id,
                        c_id: data.c_id
                    }
                };
                await this.app.mysql.update('likes', row, options);
                return {
                    code: 1
                }
            } else {
                const row = {
                    status: '0',
                };
                const options = {
                    where: {
                        u_id: data.u_id,
                        c_id: data.c_id
                    }
                };
                await this.app.mysql.update('likes', row, options);
                return {
                    code: 0
                }
            }


        }
    }

    //获取别人对我的评论
    async getreview() {
        console.log();
    }

    //评论动态
    async reviewcon() {
        console.log();
    }

    //获取谁赞了我
    async getlikeme(id) {
        let sql = `SELECT u.u_name,u.u_header,l.addtimes,c.c_cover,u.u_id,c.c_id`
         sql += ' FROM `condition` AS c'
        sql+=` JOIN likes AS l JOIN user AS u WHERE  c.u_id = ${id} AND c.c_id = l.c_id AND l.u_id = u.u_id AND l.status = 1`
        const result = await this.app.mysql.query(sql)
        return result
    }

    //取我赞了谁
    async getlikewho(id) {
        let sql = `SELECT u.u_name,u.u_header,l.addtimes,c.c_cover,u.u_id,c.c_id`
         sql += ' FROM `condition` AS c'
        sql+=` JOIN likes AS l JOIN user AS u WHERE  l.c_id = c.c_id AND l.u_id = ${id} AND  c.u_id = u.u_id AND l.status = 1`
        const result = await this.app.mysql.query(sql)
        return result
    }

    //获取指定问号传值的动态ok
    async getconditionid() {
        const post = await this.app.mysql.get('condition', { c_id });
        return post
    }

    //获获取好友动态
    async getconditionf(id) {
        let sql = 'SELECT c.c_content,c.c_cover,c.addtimes,c.u_id FROM `condition`'
        sql += ` AS c JOIN friends AS f WHERE f.u_id= ${id} or f.u1_id = ${id} `
        const result = await this.app.mysql.query(sql)
        for (let i = 0; i < result.length; i++) {
            const resl = await this.app.mysql.select('user', {
                where: {
                    u_id: result[i].u_id
                }
            })
            result[i].u_header = resl[0].u_header
            result[i].u_name = resl[0].u_name
        }
        return result
    }

    //获取用户信息ok
    async getuser(id) {
        const post = await this.app.mysql.get('user', { u_id: id });
        return post
    }

    //获模糊查询，不同的路由查询的不同
    async getmohu(data) {
        if (data.rou == '/circle') {
            let sql = 'select * from `condition` '
            sql += `where c_content like '%${data.c_content}%'`
            const result = await this.app.mysql.query(sql)
            for (let i = 0; i < result.length; i++) {
                const resl = await this.app.mysql.select('user', {
                    where: {
                        u_id: result[i].u_id
                    }
                })
                result[i].u_header = resl[0].u_header
                result[i].u_name = resl[0].u_name
            }
            return result
        } else if (data.rou == '/massage') {
            let sql = `SELECT u.u_name,u.u_header,c.chart_content,c.addtimes  FROM user AS u JOIN chat AS c WHERE  u.u_id = c.u1_id AND ${data.id} = c.u_id  AND u.u_name LIKE '%${data.u_name}%'`
            const result = await this.app.mysql.query(sql)
            console.log(result);
            return result
        }
    }
}

module.exports = Circle;