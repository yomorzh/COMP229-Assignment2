let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Book Model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact');

/* GET Route for the Contact list page - READ operation*/
router.get('/', contactController.displayContactList);

/* GET Route for displaying Add page - CREATE operation*/
router.get('/add', contactController.displayAddPage);

/* POST Route for processing Add page - CREATE operation*/
router.post('/add', contactController.processAddPage);

/* GET Route for displaying the Edit page - Update operation*/
router.get('/edit/:id', contactController.displayEditPage);

/* POST Route for processing the Edit page - Update operation*/
router.post('/edit/:id', contactController.processEditPage);

/* GET Route to perform Deletion - DELETE operation*/
router.get('/delete/:id', contactController.performDelete);

module.exports = router;