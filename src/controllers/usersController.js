const usersController = {
	// getAll: (req, res) => res.send("Estas viendo el listado de Usuarios"),
	// getOne: (req, res) => res.send(`Estas viendo el detalle del usuario nro ${req.params.id}`),
	goLogin:function(req,res) {
        res.render("login")
    },
    goRegister: function(req,res) {
        res.render("registro")
    }    
};

module.exports = usersController;
