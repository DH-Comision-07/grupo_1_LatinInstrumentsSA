const productConstroller = {
    getAll: (req, res) => res.send("estas viendo el listado de productos"),
    getOne: (req, res) => res.send('Estas viendo el detalle del producto nro ${req.params.id}')

}

module.export = productConstroller;