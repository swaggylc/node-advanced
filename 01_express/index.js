const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// 创建一个数组模拟用户信息
const usersMsg = [
    { id: 1, name: 'swaggylc', password: '111' },
    { id: 2, name: 'swaggylc2', password: '222' },
    { id: 3, name: 'swaggylc3', password: '333' },
    { id: 4, name: 'swaggylc4', password: '444' },
]



// 配置静态资源路径(默认找index.html)
app.use(express.static('./public'))

// 配置body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))



app.post('/login', (req, res) => {
    // 通过req.body获取请求体中的参数（post）
    // 默认情况下express不支持解析请求体中的参数，需要借助第三方中间件body-parser
    const name=req.body.name
    const password=req.body.password

    // 获取到用户的用户名和密码，然后去数组中查找是否有对应的用户
    const user = usersMsg.find(item => item.name === name && item.password === password)
    if (user) {
        res.send('<h1> login success </h1>')
    } else {
        res.send('<h1> login fail </h1>')
    }




    // if (req.body.name === 'swaggylc' && req.body.password === '111') {
    //     res.send('<h1> login success </h1>')
    // } else {
    //     res.send('<h1> login fail </h1>')
    // }
})






app.listen(3000, () => {
    console.log('server is running at port 3000   ' + 'http://localhost:3000')
}
)