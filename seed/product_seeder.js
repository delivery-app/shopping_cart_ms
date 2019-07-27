var Product = require('../api/models/product');
var mongoose = require('mongoose');

// create mongodb with local variables
var db_host = 'localhost';
var db_port = '27017';
var db_name = 'shopping_cart';

mongoose.connect(`mongodb://${db_host}:${db_port}/${db_name}`);

var products = [
  new Product({
    imagePath: 'https://irp-cdn.multiscreensite.com/97b23b54/dms3rep/multi/mobile/nutrition-512x512.jpg',
    title: 'Fruit Salad',
    description: 'just another fruit salad',
    price: 200000000,
    restaurant_id: 0
  }),
  new Product({
    imagePath: 'https://brewnbake.com/wp-content/uploads/2018/09/food4.jpg',
    title: 'Carrot Cake',
    description: 'just another carrot cake',
    price: 200000000,
    restaurant_id: 1
  }),
  new Product({
    imagePath: 'https://lh3.googleusercontent.com/fQnnjl5uOYz32jwWh5nOB58mnF1qCv8rJJNrTyO8aG7z674IYFzCDbudzVHf_31hVHo5qkdeloDgnmcXhOxB6RA',
    title: 'Meat Tacos',
    description: 'just some good tacos',
    price: 200000000,
    restaurant_id: 2
  }),
  new Product({
    imagePath: 'https://media.image.ie/uploads/2018/03/15163435/THELO_detox-512x512.jpg',
    title: 'Apple Granola',
    description: 'just another granola',
    price: 200000000,
    restaurant_id: 3
  }),
  new Product({
    imagePath: 'http://nebula.wsimg.com/d9465590959f9af4ba5402892a927350?AccessKeyId=90D788EBF30AFF676032&disposition=0&alloworigin=1',
    title: 'Meat Sandwich',
    description: 'just another meat sandwich',
    price: 200000000,
    restaurant_id: 4
  }),
  new Product({
    imagePath: 'https://static.wixstatic.com/media/ca3756_4960a79602aa41c0bbc54c9773af29a8~mv2_d_2048_2048_s_2.jpg/v1/fill/w_512,h_512,al_c,q_80,usm_0.66_1.00_0.01/ca3756_4960a79602aa41c0bbc54c9773af29a8~mv2_d_2048_2048_s_2.webp',
    title: 'Black Salmon',
    description: 'just another salmon dish',
    price: 200000000,
    restaurant_id: 5
  }),
  new Product({
    imagePath: 'https://bloximages.newyork1.vip.townnews.com/timesdaily.com/content/tncms/assets/v3/editorial/1/38/1386cb19-b6e4-5f57-8422-34d555a184bb/5d0a2873bcd59.image.jpg',
    title: 'Bean Salad',
    description: 'just another bean salad',
    price: 200000000,
    restaurant_id: 6
  }),
  new Product({
    imagePath: 'https://irp-cdn.multiscreensite.com/97b23b54/dms3rep/multi/mobile/nutrition-512x512.jpg',
    title: 'Fruit Salad',
    description: 'just another fruit salad',
    price: 200000000,
    restaurant_id: 6
  }),
  new Product({
    imagePath: 'https://brewnbake.com/wp-content/uploads/2018/09/food4.jpg',
    title: 'Carrot Cake',
    description: 'just another carrot cake',
    price: 200000000,
    restaurant_id: 5
  }),
  new Product({
    imagePath: 'https://lh3.googleusercontent.com/fQnnjl5uOYz32jwWh5nOB58mnF1qCv8rJJNrTyO8aG7z674IYFzCDbudzVHf_31hVHo5qkdeloDgnmcXhOxB6RA',
    title: 'Meat Tacos',
    description: 'just some good tacos',
    price: 200000000,
    restaurant_id: 4
  }),
  new Product({
    imagePath: 'https://media.image.ie/uploads/2018/03/15163435/THELO_detox-512x512.jpg',
    title: 'Apple Granola',
    description: 'just another granola',
    price: 200000000,
    restaurant_id: 3
  }),
  new Product({
    imagePath: 'http://nebula.wsimg.com/d9465590959f9af4ba5402892a927350?AccessKeyId=90D788EBF30AFF676032&disposition=0&alloworigin=1',
    title: 'Meat Sandwich',
    description: 'just another meat sandwich',
    price: 200000000,
    restaurant_id: 2
  }),
  new Product({
    imagePath: 'https://static.wixstatic.com/media/ca3756_4960a79602aa41c0bbc54c9773af29a8~mv2_d_2048_2048_s_2.jpg/v1/fill/w_512,h_512,al_c,q_80,usm_0.66_1.00_0.01/ca3756_4960a79602aa41c0bbc54c9773af29a8~mv2_d_2048_2048_s_2.webp',
    title: 'Black Salmon',
    description: 'just another salmon dish',
    price: 200000000,
    restaurant_id: 1
  }),
  new Product({
    imagePath: 'https://bloximages.newyork1.vip.townnews.com/timesdaily.com/content/tncms/assets/v3/editorial/1/38/1386cb19-b6e4-5f57-8422-34d555a184bb/5d0a2873bcd59.image.jpg',
    title: 'Bean Salad',
    description: 'just another bean salad',
    price: 200000000,
    restaurant_id: 0
  }),
  new Product({
    imagePath: 'https://irp-cdn.multiscreensite.com/97b23b54/dms3rep/multi/mobile/nutrition-512x512.jpg',
    title: 'Fruit Salad',
    description: 'just another fruit salad',
    price: 200000000,
    restaurant_id: 4
  }),
  new Product({
    imagePath: 'https://brewnbake.com/wp-content/uploads/2018/09/food4.jpg',
    title: 'Carrot Cake',
    description: 'just another carrot cake',
    price: 200000000,
    restaurant_id: 6
  }),
  new Product({
    imagePath: 'https://lh3.googleusercontent.com/fQnnjl5uOYz32jwWh5nOB58mnF1qCv8rJJNrTyO8aG7z674IYFzCDbudzVHf_31hVHo5qkdeloDgnmcXhOxB6RA',
    title: 'Meat Tacos',
    description: 'just some good tacos',
    price: 200000000,
    restaurant_id: 5
  }),
  new Product({
    imagePath: 'https://media.image.ie/uploads/2018/03/15163435/THELO_detox-512x512.jpg',
    title: 'Apple Granola',
    description: 'just another granola',
    price: 200000000,
    restaurant_id: 2
  }),
  new Product({
    imagePath: 'http://nebula.wsimg.com/d9465590959f9af4ba5402892a927350?AccessKeyId=90D788EBF30AFF676032&disposition=0&alloworigin=1',
    title: 'Meat Sandwich',
    description: 'just another meat sandwich',
    price: 200000000,
    restaurant_id: 3
  }),
  new Product({
    imagePath: 'https://static.wixstatic.com/media/ca3756_4960a79602aa41c0bbc54c9773af29a8~mv2_d_2048_2048_s_2.jpg/v1/fill/w_512,h_512,al_c,q_80,usm_0.66_1.00_0.01/ca3756_4960a79602aa41c0bbc54c9773af29a8~mv2_d_2048_2048_s_2.webp',
    title: 'Black Salmon',
    description: 'just another salmon dish',
    price: 200000000,
    restaurant_id: 0
  }),
  new Product({
    imagePath: 'https://bloximages.newyork1.vip.townnews.com/timesdaily.com/content/tncms/assets/v3/editorial/1/38/1386cb19-b6e4-5f57-8422-34d555a184bb/5d0a2873bcd59.image.jpg',
    title: 'Bean Salad',
    description: 'just another bean salad',
    price: 200000000,
    restaurant_id: 1
  }),
];

for (var i = 0; i < products.length; i++) {
  products[i].save().then(function(){
    if (i === products.length) {
      mongoose.disconnect();
    }
  }).catch((err)=> console.log(err));
}