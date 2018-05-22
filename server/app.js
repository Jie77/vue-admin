const Koa = require('koa')
const koaBody = require('koa-body')
const Route = require('koa-router')
const cors = require('koa2-cors')
const Port = 3000

const app = new Koa()
const router = new Route()

app.use(koaBody())
app.use(cors({
    origin: '*'
  }))

router.post('/login', (ctx, next)=>{
    ctx.body = {
        token: 'token.dG9rZW4NCg==.secret',
    } 
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(Port,()=>{
    console.log(`Server start at ${Port}`)
})