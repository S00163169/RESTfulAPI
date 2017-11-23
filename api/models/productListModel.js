'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    Created_date: {
        type: Date,
        default: Date.Now
    },
    ProductId: {
        type: Number,
        Required: 'Enter the ID of the Product'
    },
    productName: {
        type: String,
        default: 'name'
    },
    productCode: {
        type: String,
        default: 'code'
    },
    releaseDate: {
        type: Date,
        default: Date.Now
    },
    description: {
        type: String,
        default: 'decription'
    },
    price: {
        type: Number,
        default: 0
    },
    starRating: {
        type: Number,
        default: 0
    },
    imageUrl: {
        type: String,
        default: 'URL'
    }
});

module.exports = mongoose.model('Products', ProductSchema);