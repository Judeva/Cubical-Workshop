const { Router } = require('express');

const router= Router();

//Show all products on home;
router.get('/', (req, res)=>{
    res.redirect('/products');
});





module.exports = router;