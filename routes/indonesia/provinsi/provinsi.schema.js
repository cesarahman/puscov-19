const { Schema, model } = require('../../../db.config')
const scheme = new Schema({
  id:{
     type: Number,
     required: true,
  },
  Kode_Prov:{
     type: String,
     required: true,
  },
  Provinsi:{
     type: String,
     required: true,
  },
  Kasus_Posi: {
     type: String,
     required: true,
  },
  Kasus_Semb: {
    type: String,
    required: true,
 },
  Kasus_Meni: {
    type: String,
    required: true
 }
});
module.exports = model('Prov', scheme, 'prov');
