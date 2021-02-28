let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) =>{
    res.render('home', {title: 'Personal page'});
};

module.exports.displayAboutPage = (req, res, next) =>{
    res.render('about', {title: 'About'});
};

module.exports.displayProjectsPage = (req, res, next) =>{
    res.render('projects', {title: 'Projects'});
};

module.exports.displayServicesPage = (req, res, next) =>{
    res.render('services', {title: 'Services'});
};

module.exports.displayContactmePage = (req, res, next) =>{
    res.render('contact', {title: 'Contact me'});
};