const express = require('express')
const router = express.Router()



const routes = [
    {
        path: 'values'
    }
]

router.get('/',(req,res) => {
    res.render('index')
})


routes.forEach(route => {
    return router.use(`/${route.path}`, require(`./${route.path}`))
})

module.exports = router