const fs = require('fs');
const path = require('path');
const productsDb = require('../config/product.json');

module.exports= {
    getAll(){
        return productsDb;
    },
    getOne(){
        return productsDb.find(x=>x.id==id);
    },
    create(product){
        productsDb.push(product);

        return fs.writeFile(
            path.join(__dirname,'../config/products.json'),
            JSON.stringify(productsDB)
        );
    }
}