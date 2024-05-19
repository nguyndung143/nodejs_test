const expess = require('express');
const router = express.Router();

const newcontroller = require('./Newscontroller');
router.use('/:slug', newcontroller.show);
router.use('/', newcontroller.index);

module.exports = router;
