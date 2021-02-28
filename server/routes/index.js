let express = require('express');
let router = express.Router();


let app = express(), pdf = require('express-pdf');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Personal page'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET home page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET home page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact me'});
});

module.exports = router;
