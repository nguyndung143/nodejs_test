const course = require('../models/course')
class SiteController {
  async index(req, res) {
    try {
        const data = await course.find({});
        res.json(data);
    }  catch (err) {
        res.status(400).json({error: err});

    }}
  search(req, res) {
    res.send('search');
  }
}
module.exports = new SiteController;
