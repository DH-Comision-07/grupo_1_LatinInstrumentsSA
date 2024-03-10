const usersConstroller = {
	getAll: (req, res) => res.send("Estas viendo el listado de Usuarios"),
	getOne: (req, res) => res.send(`Estas viendo el detalle del usuario nro ${req.params.id}`),
};

module.export = usersConstroller;
