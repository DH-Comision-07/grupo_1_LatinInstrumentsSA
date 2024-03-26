const fs = require ('fs');
const path = require ('path'); 
let products= require ('../data/productsDataBase.JSON');

let productService = {

    products : products,

    getAll : function(){
        return this.products
    },

    getOneBy : function(id){
        return this.products.find(product => product.id == id)
    },
    
    save : function(product){
        this.product.push(product)
    } 
}

module.exports = productService