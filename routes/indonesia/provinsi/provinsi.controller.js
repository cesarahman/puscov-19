let Prov = [
	{
        "id": 1,
        "Kode_Provi": "31",
        "Provinsi": "DKI Jakarta",
        "Kasus_Posi": "307",
        "Kasus_Semb": "22",
        "Kasus_Meni": "29"
    }
]

exports.findAll = (req, res, next) => {
    const q = req.query;
    let data = Prov;
    
    if (q.id) data = Prov.filter(row => row.id == q.id)
    if (q.name) data = Prov.filter(row =>  row.name == q.name)
    
    res.json({ data });
   }

exports.findById = (req, res, next) => {
    const id = req.params.id
    const data = Prov.filter( row =>  row.id == id);
    res.json({ id, data })
   }

exports.insert = (req, res, next) => {
    const data = req.body;
    Prov.push(data);
    res.json({ data: Prov});
   }

exports.updateById = (req, res, next) => {
    const id = req.params.id
    let data = Prov;
    const index = Prov.findIndex(row => row.id == id)
    if (req.body.Kode_Provi) data[index].Kode_Provi = req.body.Kode_Provi;
    res.json({ message: `${id} updated!`, data});
   }

exports.removeById = (req, res, next) => {
    const id = req.params.id
    const index  = Prov.findIndex(row => row.id == id)
    Prov.splice(index, 1)
    res.json({ message: `${id} deleted!`, data: Prov});
   }

exports.remove = (req, res, next) => {
    Prov = []
    res.json({ message: `All Roles removed!`, data: Prov });
   }
   
   
   