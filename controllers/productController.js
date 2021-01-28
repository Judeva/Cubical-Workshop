const { Router } = require('express');
const cube = require('../models/Cube');
const router= Router();

//Show all products on home;
router.get('/', (req, res)=>{
    res.render('home', {title: 'Browse'});
});

//Show one product on details:id;
router.get('/details/:id', (req, res)=>{
    res.render('details', {title: `Details`})
});

//Create one product on 'create' ;
router.get('/create', (req, res)=>{
    res.render('create', {title: `Add cube`})
})


module.exports = router;