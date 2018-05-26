const Koa = require('koa')
const koaBody = require('koa-body')
const Route = require('koa-router')
const cors = require('koa2-cors')
const { login, regist } = require('./api/login')
const { getAllAllowCourse,  getHadSelectedCourse, selectCourse, delCourse, getSchedule } = require('./api/stu')
const { addCourse, adminDelCourse, addStu, getAllCourse, assignCourse, getAllStu, getCollegeList} = require('./api/admin')
const { giveScore, getStu } = require('./api/teacher')
const Port = 3000

const app = new Koa()
const router = new Route()

app.use(koaBody())
app.use(cors({
    origin: '*'
  }))
/**
 * 注册和登陆处理模块
 */
router.post('/login', login)
router.post('/reg', regist)

/**
 * 学生处理模块
 */
router.get('/getAllAllowCourse', getAllAllowCourse)
router.get('/getHadSelectedCourse', getHadSelectedCourse)
router.get('/getSchedule', getSchedule)
router.post('/selectCourse', selectCourse)
router.post('/delCourse', delCourse)

/**
 * 管理员处理模块
 */
router.get('/getAllCourse', getAllCourse)
router.get('/getAllStu', getAllStu)
router.get('/getCollegeList', getCollegeList)
router.post('/addCourse', addCourse)
router.post('/adminDelCourse', adminDelCourse)
router.post('/addStu', addStu)
router.post('/assignCourse', assignCourse)

/**
 * 教师处理模块
 */
router.get('/getStu', getStu)
router.post('/giveScore', giveScore)


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(Port,()=>{
    console.log(`Server start at ${Port}`)
})
