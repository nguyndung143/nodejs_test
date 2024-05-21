const express = require('express');
const morgan = require('morgan');
const hbars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes')
const db = require('./config/db')

db.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.engine(
  'hbs',
  hbars.engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));
//khởi tạo tuyến đường
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
