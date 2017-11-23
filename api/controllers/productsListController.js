'use strict';

var mongoose = require('mongoose'),
    Product = mongoose.model('Products');


exports.list_all_products = function(req, res) {
    Product.find({}, function(err, product) {
        if(err)  
            res.send(err);
        res.json(product);
    });
};

exports.create_a_product = function(req, res) {
    Product.create({}, function(err, product) {
        if(err)
            res.send(err);
        res.json(product);
    });
};