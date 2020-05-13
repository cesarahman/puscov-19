// let Roles = [{
//     id: 'admin',
//     name: 'Administrator'
// }, {
//     id: 'guest',
//     name: 'Guest'
// }]

const Roles = require('./roles.schema')


// exports.findAll = (req, res, next) => {
//     const q = req.query;
//     let data = Roles;

//     if (q.id) data = Roles.filter(row => row.id == q.id)
//     if (q.name) data = Roles.filter(row =>  row.name == q.name)

//     res.json({ data });
// }

// exports.findById = (req, res, next) => {
//     const id = req.params.id
//     const data = Roles.filter( row =>  row.id == id);
//     res.json({ id, data })
// }

// exports.insert = (req, res, next) => {
//     const data = req.body;
//     Roles.push(data);
//     res.json({ data: Roles});
// }

// exports.updateById = (req, res, next) => {
//     const id = req.params.id
//     let data = Roles;
//     const index = Roles.findIndex(row => row.id == id)
//     if (req.body.name) data[index].name = req.body.name;
//     res.json({ message: `${id} updated!`, data});
// }

// exports.removeById = (req, res, next) => {
//     const id = req.params.id
//     const index  = Roles.findIndex(row => row.id == id)
//     Roles.splice(index, 1)
//     res.json({ message: `${id} deleted!`, data: Roles});
// }

// exports.remove = (req, res, next) => {
//     Roles = []
//     res.json({ message: `All Roles removed!`, data: Roles });
// }

exports.findAll = (req, res, next) => {
    const q = req.query;
    const where  = {}
    if(q.name) where['name'] = q.name;
    if(q.name_long) where['name_long'] = q.name_long;
    
    Roles.find(where)
    .limit(req.query.limit || 0)
    .skip(req.query.skip || 0)
    .then(roles => {
        res.json(roles);
    })
    .catch(err => next(err));
}

exports.insert = (req, res, next) => {
    const data = req.body;
    Roles.create(data)
    .then(roles => {
        res.json({
            message: `New role added!`,
            data: roles
        });
    })
    .catch(err => next(err))
}

exports.findById = (req, res, next) => {
    const id = req.params.id
    Roles.findById(id)
    .then(roles => {
        res.json(roles);
    })
    .catch(err => next(err));
}

exports.updateById = (req, res, next) => {
    const id = req.params.id
    const data = req.body
    Roles.findByIdAndUpdate(id, data)
    .then(roles => {
        res.json({
            message: `Role ${id} updated!`,
            data: roles
        });
    })
    .catch(err => next(err))
}

exports.removeById = (req, res, next) => {
    const id = req.params.id
    Roles.findByIdAndRemove(id)
    .then(roles => {
        res.json({
            message: `Role ${id} removed!`,
            data: roles
        });
    })
    .catch(err => next(err))
}

exports.remove = (req, res, next) => {
    Roles.remove()
    .then(roles => {
        res.json({
            message: 'All roles removed!',
            data: roles
        });
    })
    .catch(err => next(err))
}

exports.cekRolesId = (id) => {
    return Roles.findById(id)
   }
   

