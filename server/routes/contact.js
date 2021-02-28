let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Book Model
let Contact = require('../models/contact');


/* GET Route for the Contact list page - READ operation*/
router.get('/', (req,res,next)=>{
    Contact.find((err, contactList)=>{
        if (err){
            return console.error(err);
        } else{
            //console.log(BookList);
            res.render('contact/list', {title: 'Contacts', ContactList: contactList});

        }
    });
});

/* GET Route for displaying Add page - CREATE operation*/
router.get('/add', (req,res,next)=>{
    res.render('contact/add', {title: 'Add Contact'});
});
/* POST Route for processing Add page - CREATE operation*/
router.post('/add', (req,res,next)=>{
    let newContact = Contact({
        "name": req.body.name,
        "phoneNumber": req.body.phoneNumber,
        "email": req.body.email
    });

    Contact.create(newContact, (err, Contact)=>{
        if (err){
            console.log(err);
            res.end(err);
        }else{
            //resfresh the contact list
            res.redirect('/contact-list');
        }
    });
});
/* GET Route for displaying the Edit page - Update operation*/
router.get('/edit/:id', (req,res,next)=>{
    let id = req.params.id;
    Contact.findById(id, (err, contactToEdit) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else {
            //show edit view
            res.render('contact/edit', {title: "Edit Contact", contact: contactToEdit});
        }
    });
});
/* POST Route for processing the Edit page - Update operation*/
router.post('/edit/:id', (req,res,next)=>{
    let id = req.params.id;
    let updateContact = Contact({
        "_id": id,
        "name": req.body.name,
        "phoneNumber": req.body.phoneNumber,
        "email": req.body.email
    });

    Contact.updateOne({_id:id}, updateContact, (err)=>{
        if (err){
            console.log(err);
            res.end(err);
        }else{
            // refresh contact list
            res.redirect('/contact-list');
        }
    });
});
/* GET Route to perform Deletion - DELETE operation*/
router.get('/delete/:id', (req,res,next)=>{
    let id = req.params.id;
    Contact.remove({_id:id}, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            // refresh contact list
            res.redirect('/contact-list');
        }
    });
});

module.exports = router;