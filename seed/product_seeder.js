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
    price: 25000,
    restaurant_id: 0
  }),
  new Product({
    imagePath: 'https://www.wholesomeyum.com/wp-content/uploads/2016/08/wholesomeyum_taco-salad-2-500x500.jpg',
    title: 'Taco salad',
    description: 'Healthy taco salad',
    price: 27000,
    restaurant_id: 0
  }),
  new Product({
    imagePath: 'https://www.chelseasmessyapron.com/wp-content/uploads/2018/07/Steak-and-Pita-Salad4-500x500.jpg',
    title: 'Steak Salad',
    description: 'Steak and pita salad',
    price: 23000,
    restaurant_id: 0
  }),
  new Product({
    imagePath: 'https://www.foodiecrush.com/wp-content/uploads/2019/06/Greek-Salad-with-Grilled-Chicken-foodiecrush.com-005-500x500.jpg',
    title: 'Greek Salad',
    description: 'Greek salad with chicken',
    price: 25000,
    restaurant_id: 0
  }),
  new Product({
    imagePath: 'https://mommyshomecooking.com/wp-content/uploads/2018/06/Wartermelon-Summer-Salad-1-500x500.jpg',
    title: 'Watermelon Salad',
    description: 'Watermelon summer salad',
    price: 20000,
    restaurant_id: 0
  }),
  new Product({
    imagePath: 'https://bakingamoment.com/wp-content/uploads/2019/06/IMG_5057-cobb-salad-500x500.jpg',
    title: 'COBB Salad',
    description: 'The classic COBB salada',
    price: 30000,
    restaurant_id: 0
  }),
  new Product({
    imagePath: 'https://recipesfromapantry.com/wp-content/uploads/2014/08/instant-pot-chickpeas-Salad-14-of-17-500x500.jpg',
    title: 'Chickpea Salad',
    description: 'Basic tomato-chickpea salad',
    price: 17000,
    restaurant_id: 0
  }),
  new Product({
    imagePath: 'https://dinnerthendessert.com/wp-content/uploads/2019/05/Creamy-Grape-Salad-500x500.jpg',
    title: 'Grape Salad',
    description: 'Grape and greek yogurt salad',
    price: 15000,
    restaurant_id: 0
  }),
  new Product({
    imagePath: 'https://brewnbake.com/wp-content/uploads/2018/09/food4.jpg',
    title: 'Carrot Cake',
    description: 'just another carrot cake',
    price: 12000,
    restaurant_id: 1
  }),
  new Product({
    imagePath: 'https://www.bakedbyanintrovert.com/wp-content/uploads/2017/01/Basic-Vanilla-Cake-Recipe-Image-1-500x500.jpg',
    title: 'Vanilla Cake',
    description: 'Frosting vanilla cake',
    price: 10000,
    restaurant_id: 1
  }),
  new Product({
    imagePath: 'https://sugarspunrun.com/wp-content/uploads/2018/01/Vanilla-Cake-Recipe-1-of-1-3.jpg',
    title: '"Choconilla" Cake',
    description: 'Vanilla and chocolate cake',
    price: 15000,
    restaurant_id: 1
  }),
  new Product({
    imagePath: 'http://www.hotchocolatehits.com/wp-content/uploads/2014/06/chocolate-cake.jpg',
    title: 'Chocolate Cake',
    description: 'The best chocolate cake',
    price: 15000,
    restaurant_id: 1
  }),
  new Product({
    imagePath: 'https://www.recipetineats.com/wp-content/uploads/2016/06/Red-Velvet-Layer-Cake_4-500x500.jpg',
    title: 'Red velvet Cake',
    description: 'Cream cheese red velvet cake',
    price: 16000,
    restaurant_id: 1
  }),
  new Product({
    imagePath: 'https://www.tablefortwoblog.com/wp-content/uploads/2014/12/Salted-Caramel-Molten-Lava-Cakes-for-Two-5-500x500.jpg',
    title: 'Volcano Cake',
    description: 'Caramel molten lava cake',
    price: 20000,
    restaurant_id: 1
  }),
  new Product({
    imagePath: 'https://www.spendwithpennies.com/wp-content/uploads/2017/09/Mayonnaise-Cake-24-500x500.jpg',
    title: 'Brownie',
    description: 'Full chocolate fudge brownie',
    price: 10000,
    restaurant_id: 1
  }),
  new Product({
    imagePath: 'https://sugarspunrun.com/wp-content/uploads/2019/06/Blueberry-Pie-1-of-1-3-500x500.jpg',
    title: 'Blueberry Cake',
    description: 'Blueberry crumble pie',
    price: 8000,
    restaurant_id: 1
  }),
  new Product({
    imagePath: 'https://lh3.googleusercontent.com/fQnnjl5uOYz32jwWh5nOB58mnF1qCv8rJJNrTyO8aG7z674IYFzCDbudzVHf_31hVHo5qkdeloDgnmcXhOxB6RA',
    title: 'Meat Tacos',
    description: 'just some good tacos',
    price: 23000,
    restaurant_id: 2
  }),
  new Product({
    imagePath: 'http://www.quirch.com/chiquita/wp-content/uploads/2018/07/Chicken-Tamarind-Tacos-500x500.jpeg',
    title: 'Tamarind Tacos',
    description: 'Chicken and tamarind tacos',
    price: 25000,
    restaurant_id: 2
  }),
  new Product({
    imagePath: 'http://www.cookingforkeeps.com/wp-content/uploads/2018/02/Supreme-Turkey-Tacos-500x500.jpg',
    title: 'Turkey Tacos',
    description: 'Baked supreme turkey tacos',
    price: 26000,
    restaurant_id: 2
  }),
  new Product({
    imagePath: 'https://detoxinista.com/wp-content/uploads/2018/05/vegan-tacos-500x500.jpg',
    title: 'Vegan Tacos',
    description: 'Cauliflower and shrooms tacos',
    price: 21000,
    restaurant_id: 2
  }),
  new Product({
    imagePath: 'https://www.dinneratthezoo.com/wp-content/uploads/2017/03/baja-fish-tacos-500x500.jpg',
    title: 'Fish Tacos',
    description: 'Fried fish tacos',
    price: 22000,
    restaurant_id: 2
  }),
  new Product({
    imagePath: 'https://www.saltandlavender.com/wp-content/uploads/2019/05/easy-shrimp-tacos-recipe-7-500x500.jpg',
    title: 'Shrimp Tacos',
    description: 'Shrimp and cheese tacos',
    price: 27000,
    restaurant_id: 2
  }),
  new Product({
    imagePath: 'https://healthyfitnessmeals.com/wp-content/uploads/2018/09/Salmon-tacos-with-corn-salsa-7-500x500.jpg',
    title: 'Salmon Tacos',
    description: 'Corn salsa and salmon tacos',
    price: 30000,
    restaurant_id: 2
  }),
  new Product({
    imagePath: 'https://i2.wp.com/www.homesicktexan.com/wp-content/uploads/2019/01/Fried-avocado-tacos-DSC_6742.jpg?resize=500%2C500&ssl=1',
    title: 'Avocado Tacos',
    description: 'Fried avocado tacos',
    price: 18000,
    restaurant_id: 2
  }),
  new Product({
    imagePath: 'https://media.image.ie/uploads/2018/03/15163435/THELO_detox-512x512.jpg',
    title: 'Apple Granola',
    description: 'just another granola',
    price: 18000,
    restaurant_id: 3
  }),
  new Product({
    imagePath: 'https://www.chelseasmessyapron.com/wp-content/uploads/2014/08/Easy-NO-BAKE-Chocolate-Granola1-500x500.jpg',
    title: 'Chocolate Granola',
    description: 'No baked chocolate granola',
    price: 20000,
    restaurant_id: 3
  }),
  new Product({
    imagePath: 'https://www.gourmetfuel.com/wp-content/uploads/2019/02/Mixed-Berry-and-Homemade-Granola-Parfait-Healthy-Meals-Delivered-by-GourmetFuel.png',
    title: 'Parfait',
    description: 'Mixed berry parfait',
    price: 15000,
    restaurant_id: 3
  }),
  new Product({
    imagePath: 'https://thekitchengirl.com/wp-content/uploads/Steel-Cut-Oats-Oatmeal-Recipe_03-500x500.jpg',
    title: 'Berries oatmeal',
    description: 'Oatmeal with mixed berries',
    price: 15000,
    restaurant_id: 3
  }),
  new Product({
    imagePath: 'https://thevegan8.com/wp-content/uploads/2014/10/cinnamonrolloatmeal5-1-of-1-2-500x500.jpg',
    title: 'Cinnamon oatmeal',
    description: 'Pecans cinammon oatmeal',
    price: 16000,
    restaurant_id: 3
  }),
  new Product({
    imagePath: 'https://cardamomandcoconut.com/wp-content/uploads/2019/02/Instant-Pot-Banana-Oatmeal-10-500x500.jpg',
    title: 'Banana oatmeal',
    description: 'Peanut butter banana oats',
    price: 16000,
    restaurant_id: 3
  }),
  new Product({
    imagePath: 'https://healthyfitnessmeals.com/wp-content/uploads/2018/01/fruit-and-oatmeal-breakfast-bowl-5-SQUARE-500x500.jpg',
    title: 'Fruit oatmeal',
    description: 'Fruits and yogurt oats',
    price: 19000,
    restaurant_id: 3
  }),
  new Product({
    imagePath: 'https://www.lanascooking.com/wp-content/uploads/2012/02/date-nut-oatmeal-final-500.jpg',
    title: 'Nuts oatmeal',
    description: 'Nuts and dates oatmeal',
    price: 18000,
    restaurant_id: 3
  }),
  new Product({
    imagePath: 'http://nebula.wsimg.com/d9465590959f9af4ba5402892a927350?AccessKeyId=90D788EBF30AFF676032&disposition=0&alloworigin=1',
    title: 'Meat Sandwich',
    description: 'just another meat sandwich',
    price: 24000,
    restaurant_id: 4
  }),
  new Product({
    imagePath: 'https://simplyhomecooked.com/wp-content/uploads/2018/11/leftover-turkey-sandwich-15-500x500.jpg',
    title: 'Rainbow Sandwich',
    description: 'Colorful veggie sandwich',
    price: 20000,
    restaurant_id: 4
  }),
  new Product({
    imagePath: 'https://www.hotforfoodblog.com/wp-content/uploads/2018/06/bbqpulledporksandwich_hotforfood_filtered4-500x500.jpg',
    title: 'Pork Sandwich',
    description: 'Pulled pork cheese sandwich',
    price: 25000,
    restaurant_id: 4
  }),
  new Product({
    imagePath: 'https://bitofthegoodstuff.com/wp-content/uploads/2019/06/Tofu-Egg-Mayonnaise-3-1000-500x500.jpg',
    title: 'Egg Sandwich',
    description: 'Vegan "Egg mayo" sandwich',
    price: 18000,
    restaurant_id: 4
  }),
  new Product({
    imagePath: 'https://www.apinchofhealthy.com/wp-content/uploads/2018/07/club-sandwich-closeup-500x500.jpg',
    title: 'CLUB Sandwich',
    description: 'CLUB turky-ham-bacon sandwich',
    price: 26000,
    restaurant_id: 4
  }),
  new Product({
    imagePath: 'https://www.thelastfoodblog.com/wp-content/uploads/2019/03/portobello-mushroom-sandwich-with-basil-500x500.jpg',
    title: 'Portobello Sandwich',
    description: 'Veggie portobello shroom sandwich',
    price: 26000,
    restaurant_id: 4
  }),
  new Product({
    imagePath: 'https://sweetpeasandsaffron.com/wp-content/uploads/2018/06/copycat-starbucks-egg-white-breakfast-sandwich-500x500.jpg',
    title: 'Bacon egg Sandwich',
    description: 'breakfast bacon egg sandwich',
    price: 18000,
    restaurant_id: 4
  }),
  new Product({
    imagePath: 'https://bmexdi064h-flywheel.netdna-ssl.com/wp-content/uploads/2014/09/Barbeque-Steak-Sandwich-with-Horseradish-foodiecrush.com-061.jpg',
    title: 'Steak Sandwich',
    description: 'Sirloin steak sandwich',
    price: 23000,
    restaurant_id: 4
  }),
  new Product({
    imagePath: 'https://static.wixstatic.com/media/ca3756_4960a79602aa41c0bbc54c9773af29a8~mv2_d_2048_2048_s_2.jpg/v1/fill/w_512,h_512,al_c,q_80,usm_0.66_1.00_0.01/ca3756_4960a79602aa41c0bbc54c9773af29a8~mv2_d_2048_2048_s_2.webp',
    title: 'Black Salmon',
    description: 'just another salmon dish',
    price: 35000,
    restaurant_id: 5
  }),
  new Product({
    imagePath: 'https://i.pinimg.com/originals/bd/be/6f/bdbe6f00d70a4e7aa18c8e2b8a3f3e3c.jpg',
    title: 'White fish',
    description: 'Fresh white fish',
    price: 27000,
    restaurant_id: 5
  }),
  new Product({
    imagePath: 'https://www.tablefortwoblog.com/wp-content/uploads/2018/04/soy-sauce-sugared-salmon-recipe-photos-tablefortwoblog-1-500x500.jpg',
    title: 'Soy Salmon',
    description: 'Sugared soy sauce salmon',
    price: 30000,
    restaurant_id: 5
  }),
  new Product({
    imagePath: 'https://recipesfromapantry.com/wp-content/uploads/2025/02/Air-Fryer-Fish-22-500x500.jpg',
    title: 'Crispy fish',
    description: 'Air fried fish',
    price: 25000,
    restaurant_id: 5
  }),
  new Product({
    imagePath: 'https://www.kitchensanctuary.com/wp-content/uploads/2014/07/Thai-Fishcake-Bites-in-a-pan-on-a-dark-background-square-FS-500x500.jpg',
    title: 'Fish cakes',
    description: 'Thai fish cakes',
    price: 23000,
    restaurant_id: 5
  }),
  new Product({
    imagePath: 'https://www.mamagourmand.com/wp-content/uploads/2018/03/mexican-fish-2-500x500.jpg',
    title: 'Mexican fish',
    description: 'Corn and beans fish',
    price: 22000,
    restaurant_id: 5
  }),
  new Product({
    imagePath: 'https://cookinglsl.com/wp-content/uploads/2018/07/GRILLED-MAHI-MAHI-3-1-500x500.jpg',
    title: 'Asparagus Salmon',
    description: 'Grilled salmon and asparagus',
    price: 32000,
    restaurant_id: 5
  }),
  new Product({
    imagePath: 'https://vikalinka.com/wp-content/uploads/2017/11/Chilli-Lime-Salmon-Mee-Goreng-2-Edit-500x500.jpg',
    title: 'Chilli salmon',
    description: 'Chilli lime salmon goreng',
    price: 33000,
    restaurant_id: 5
  }),
  new Product({
    imagePath: 'https://www.ibroughtbread.com/wp-content/uploads/2018/08/Colombia_Breakfast_WS-500x500.jpg',
    title: 'Recalentado',
    description: 'Recalentado colombian breakfast',
    price: 25000,
    restaurant_id: 6
  }),
  new Product({
    imagePath: 'https://thecookwaregeek.com/wp-content/uploads/2018/09/pandebono-colombian-cheese-bread-2-500x500.jpg',
    title: 'Pandebono',
    description: 'Pandebonos for breakfast',
    price: 8000,
    restaurant_id: 6
  }),
  new Product({
    imagePath: 'https://www.juniorcb.com/wp-content/uploads/2017/01/Maicito500x500.jpg',
    title: 'Mazorcada',
    description: 'Corn, chicken, cheese and meat!',
    price: 20000,
    restaurant_id: 6
  }),
  new Product({
    imagePath: 'https://farm6.static.flickr.com/5138/5503698253_0592541a11.jpg',
    title: 'Caldo costilla',
    description: 'Ribs soup',
    price: 23000,
    restaurant_id: 6
  }),
  new Product({
    imagePath: 'https://hispanickitchen.com/wp-content/uploads/2016/06/Sudado-de-Carne-3-2.jpg',
    title: 'Sudado de carne',
    description: 'Potatos and meat stew',
    price: 22000,
    restaurant_id: 6
  }),
  new Product({
    imagePath: 'https://i1.sndcdn.com/artworks-000156911611-8nq4xh-t500x500.jpg',
    title: 'Changua',
    description: 'Eggs and milk soup',
    price: 18000,
    restaurant_id: 6
  }),
  new Product({
    imagePath: 'https://quesosdeeuropa.com/wp-content/uploads/2019/05/bananos-calados-queso-comte-postre-receta-500x500.jpg',
    title: 'Platano con queso',
    description: 'Cheesy platain',
    price: 15000,
    restaurant_id: 6
  }),
  new Product({
    imagePath: 'https://gpstrackingplus.com/wp-content/uploads/2016/12/Bandeja-Paisa.jpg',
    title: 'Bandeja paisa',
    description: 'The most traditional "paisa" dish',
    price: 30000,
    restaurant_id: 6
  }),
];

for (var i = 0; i < products.length; i++) {
  products[i].save().then(function(){
    if (i === products.length) {
      mongoose.disconnect();
    }
  }).catch((err)=> console.log(err));
}