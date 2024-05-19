const newsRouter = require('./news');

function route() {
  app.get('/', (req, res) => {
    res.render('search');
  });
  app.use('/news', newsRouter);
}
module.exports = route;
