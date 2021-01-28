const { Router } = require('express');
const productService = require('../services/productService')
const { validateInput } = require('./productHelper');
const router= Router();


//Show all products on home;
router.get('/', (req, res)=>{
    let products = productService.getAll(req.query);
    console.log(req.query);
    res.render('home', {title: 'Browse', products});
});

//Show one product on details:id;
router.get('/details/:productId', (req, res)=>{
    console.log(req.params);
    let product = productService.getOne(req.params.productId);
    res.render('details', {title: `Details`, product});
});

//Get the create page ;
router.get('/create', (req, res)=>{
    res.render('create', {title: `Add cube`});
})

//Create cube via form
router.post('/create', validateInput,(req, res)=>{
    productService.create(req.body)
    .then(()=> res.redirect('/products'))
    .catch(()=> res.status(500).end())
    
    res.redirect('/products');
});


module.exports = router;