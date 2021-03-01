let express = require('express');
let router = express.Router();


//let app = express(), pdf = require('express-pdf');

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact me page. */
router.get('/contact', indexController.displayContactmePage);

/* GET Route for displaying login page*/
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing Login page*/
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying Register page*/
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing Login page*/
router.post('/register', indexController.processRegisterPage);

/* GET Route to perform Logout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
