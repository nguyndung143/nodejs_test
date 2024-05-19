const expess = require('express');
const router = express.Router();

const sitecontroller = require('./Sitecontroller');
router.use('/search', sitecontroller.search);
router.use('/', sitecontroller.index);

module.exports = router;
