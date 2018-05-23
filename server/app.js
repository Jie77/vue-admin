const Koa = require('koa')
const koaBody = require('koa-body')
const Route = require('koa-router')
const cors = require('koa2-cors')
const jwt = require('jsonwebtoken')
const query = require('./db')
const encrypt = require('./utils/encrypt')
const Port = 3000

const app = new Koa()
const router = new Route()

app.use(koaBody())
app.use(cors({
    origin: '*'
  }))

router.post('/login', (ctx, next)=>{
    let userInfo = ctx.request.body
    let payload = {
        userName: userInfo.user,
        role: 'admin'
    }
    let secret = 'jiangjie666'
    let token = jwt.sign(payload, secret);
    ctx.body = {
        'token': token,
    } 
})

router.post('/reg', async (ctx, next) => {
    
    let userInfo = ctx.request.body,
        userName = userInfo.user,
        pwd = encrypt(userInfo.pwd)
        console.log(userInfo)
    try {
        let data = await query('select * from course')
        console.log(data)
        ctx.body = data
    } catch(e) {
        console.log(e)
    }
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(Port,()=>{
    console.log(`Server start at ${Port}`)
})
