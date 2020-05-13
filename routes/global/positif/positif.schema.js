const { Schema, model } = require('../../../db.config')
const scheme = new Schema({
   id:{
      type: Number,
      required: true,
   },
   name:{
      type: String,
      required: true,
   },
   value:{
      type: Number,
      required: true,
   },
   date: {
      type: Date,
      default: Date('y-m-d'),
      required: true,
   }
});
module.exports = model('Posi', scheme, 'posi');
