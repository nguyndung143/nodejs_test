class SiteController {
  index(req, res) {
    res.render('news');
  }
  search(req, res) {
    res.send();
  }
}
module.exports = new SiteController();
