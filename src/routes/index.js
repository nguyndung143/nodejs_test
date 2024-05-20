const newsRouter = require('./news')
const siterouter = require('./sites')
function route(app){
    app.use('/news', newsRouter)
    app.use('/home',siterouter)
    app.get('/')
}
module.exports = route