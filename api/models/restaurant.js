var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var restaurantSchema = new Schema({
  imagePath: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  delivery_price: {type: Number, required: true}
});

restaurantSchema.plugin(autoIncrement.plugin, 'Restaurant');
module.exports = mongoose.model('Restaurant', restaurantSchema);