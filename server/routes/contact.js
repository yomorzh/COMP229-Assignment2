let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');


//connect to our Book Model
//let Contact = require('../models/contact');

//helper function for guard purposes
function requireAuth(req,res,next){
    //check if the user is logged in
    if (!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

let contactController = require('../controllers/contact');

/* GET Route for the Contact list page - READ operation*/
router.get('/', requireAuth, contactController.displayContactList);

/* GET Route for displaying Add page - CREATE operation*/
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST Route for processing Add page - CREATE operation*/
router.post('/add', requireAuth, contactController.processAddPage);

/* GET Route for displaying the Edit page - Update operation*/
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* POST Route for processing the Edit page - Update operation*/
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* GET Route to perform Deletion - DELETE operation*/
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;