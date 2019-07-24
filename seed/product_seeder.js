var Product = require('../models/product');
var mongoose = require('mongoose');

// create mongodb with local variables
var db_host = 'localhost';
var db_port = '27017';
var db_name = 'shopping_cart';

mongoose.connect(`mongodb://${db_host}:${db_port}/${db_name}`);

var products = [
  new Product({
    imagePath: 'http://www.audieastrand.co.za/content/dam/ngw/product/a3/s3_limousine/my_2014/multimedia/704x396_as3_131009.jpg',
    title: 'Audi Car0',
    description: 'just an red audi car',
    price: 200000000
  }),
  new Product({
    imagePath: 'http://www.audieastrand.co.za/content/dam/ngw/product/a3/s3_limousine/my_2014/multimedia/704x396_as3_131009.jpg',
    title: 'Audi Car1',
    description: 'just an red audi car',
    price: 200000000
  }),
  new Product({
    imagePath: 'http://www.audieastrand.co.za/content/dam/ngw/product/a3/s3_limousine/my_2014/multimedia/704x396_as3_131009.jpg',
    title: 'Audi Car2',
    description: 'just an red audi car',
    price: 200000000
  }),
  new Product({
    imagePath: 'http://www.audieastrand.co.za/content/dam/ngw/product/a3/s3_limousine/my_2014/multimedia/704x396_as3_131009.jpg',
    title: 'Audi Car3',
    description: 'just an red audi car',
    price: 200000000
  }),
  new Product({
    imagePath: 'http://www.audieastrand.co.za/content/dam/ngw/product/a3/s3_limousine/my_2014/multimedia/704x396_as3_131009.jpg',
    title: 'Audi Car4',
    description: 'just an red audi car',
    price: 200000000
  }),
  new Product({
    imagePath: 'http://www.audieastrand.co.za/content/dam/ngw/product/a3/s3_limousine/my_2014/multimedia/704x396_as3_131009.jpg',
    title: 'Audi Car5',
    description: 'just an red audi car',
    price: 200000000
  }),
  new Product({
    imagePath: 'http://www.audieastrand.co.za/content/dam/ngw/product/a3/s3_limousine/my_2014/multimedia/704x396_as3_131009.jpg',
    title: 'Audi Car6',
    description: 'just an red audi car',
    price: 200000000
  }),
];

for (var i = 0; i < products.length; i++) {
  products[i].save().then(function(){
    if (i === products.length) {
      mongoose.disconnect();
    }
  }).catch((err)=> print(err));
}