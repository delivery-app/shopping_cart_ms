var Restaurant = require('../api/models/restaurant');
var mongoose = require('mongoose');

// create mongodb with local variables
var db_host = 'localhost';
var db_port = '27017';
var db_name = 'shopping_cart';

mongoose.connect(`mongodb://${db_host}:${db_port}/${db_name}`);

var Restaurants = [
  new Restaurant({
    imagePath: 'https://irp-cdn.multiscreensite.com/97b23b54/dms3rep/multi/mobile/nutrition-512x512.jpg',
    name: 'Saladery',
    description: 'just another fruit restaurant',
    delivery_price: 3000
  }),
  new Restaurant({
    imagePath: 'https://brewnbake.com/wp-content/uploads/2018/09/food4.jpg',
    name: 'Chocolatery',
    description: 'just another cake restaurant',
    delivery_price: 3000
  }),
  new Restaurant({
    imagePath: 'https://lh3.googleusercontent.com/fQnnjl5uOYz32jwWh5nOB58mnF1qCv8rJJNrTyO8aG7z674IYFzCDbudzVHf_31hVHo5qkdeloDgnmcXhOxB6RA',
    name: 'Taquery',
    description: 'just some tacos restaurant',
    delivery_price: 3000
  }),
  new Restaurant({
    imagePath: 'https://media.image.ie/uploads/2018/03/15163435/THELO_detox-512x512.jpg',
    name: 'Le granole',
    description: 'just another granola restaurant',
    delivery_price: 3000
  }),
  new Restaurant({
    imagePath: 'http://nebula.wsimg.com/d9465590959f9af4ba5402892a927350?AccessKeyId=90D788EBF30AFF676032&disposition=0&alloworigin=1',
    name: 'Sandwichery',
    description: 'just another sandwich restaurant',
    delivery_price: 3000
  }),
  new Restaurant({
    imagePath: 'https://static.wixstatic.com/media/ca3756_4960a79602aa41c0bbc54c9773af29a8~mv2_d_2048_2048_s_2.jpg/v1/fill/w_512,h_512,al_c,q_80,usm_0.66_1.00_0.01/ca3756_4960a79602aa41c0bbc54c9773af29a8~mv2_d_2048_2048_s_2.webp',
    name: 'The Salmone',
    description: 'just another salmon restaurant',
    delivery_price: 3000
  }),
  new Restaurant({
    imagePath: 'https://bloximages.newyork1.vip.townnews.com/timesdaily.com/content/tncms/assets/v3/editorial/1/38/1386cb19-b6e4-5f57-8422-34d555a184bb/5d0a2873bcd59.image.jpg',
    name: 'The Beanery',
    description: 'just another bean salad restaurant',
    delivery_price: 3000
  }),
];

for (var i = 0; i < Restaurants.length; i++) {
  Restaurants[i].save().then(function(){
    if (i === Restaurants.length) {
      mongoose.disconnect();
    }
  }).catch((err)=> console.log(err));
}