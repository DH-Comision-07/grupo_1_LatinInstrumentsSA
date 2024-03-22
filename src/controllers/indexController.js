const indexController ={
	home : function(req, res){
		res.render('home')
	},

	carrito : function(req,res) {
		res.render('carrito')
	},

	nosotros : function(req, res){
		res.render('nosotros')
	}
}

module.exports = indexController;
