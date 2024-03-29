var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var cartSchema = new Schema({
  user_id: {type: Number, required: true},
  items: { type: Array, required: true },
  total_price: { type: Number, default: 0 },
  actual_state: { type: String, default: 'using' }
});

cartSchema.plugin(autoIncrement.plugin, 'Cart');
export default mongoose.model('Cart', cartSchema);