var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var productSchema = new Schema({
  imagePath: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  qty: { type: Number, required: true, default: 1 },
  restaurant_id: { type: String }
});

productSchema.plugin(autoIncrement.plugin, 'Product');
module.exports = mongoose.model('Product', productSchema);