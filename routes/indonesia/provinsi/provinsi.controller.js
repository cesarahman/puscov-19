const Prov = require('./provinsi.schema')
exports.findAll = (req, res, next) => {
   const q = req.query;
   const where  = {}
   if(q.Kode_Provi) where['Kode_Provi'] = q.Kode_Provi;
   if(q.Provinsi) where['Provinsi'] = q.Provinsi;
   
   Prov.find(where)
   .limit(req.query.limit || 0)
   .skip(req.query.skip || 0)
   .then(prov => {
      res.json(prov);
   })
   .catch(err => next(err));
}

exports.findById = (req, res, next) => {
   const id = req.params.id
   Prov.findById(id)
   .then(prov => {
      res.json(prov);
   })
   .catch(err => next(err));
}

exports.insert = (req, res, next) => {
   const data = req.body;
   Prov.create(data)
   .then(prov => {
      res.json({
         message: `New data added!`,
         data: prov
      });
   })
   .catch(err => next(err))   
}

exports.updateById = (req, res, next) => {
   const id = req.params.id
   const data = req.body
   Prov.findByIdAndUpdate(id, data)
   .then(prov => {
      res.json({
         message: `Data ${id} updated!`,
         data: prov
      });
   })
   .catch(err => next(err))
}

exports.removeById = (req, res, next) => {
   const id = req.params.id
   Prov.findByIdAndRemove(id)
   .then(prov => {
      res.json({
         message: `Data ${id} removed!`,
         data: prov
      });
   })
   .catch(err => next(err))
}

exports.remove = (req, res, next) => {
   Prov.remove()
   .then(prov => {
      res.json({
         message: 'All Data removed!',
         data: prov
      });
   })
   .catch(err => next(err))
}


