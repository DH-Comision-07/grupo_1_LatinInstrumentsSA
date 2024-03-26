const productService = require ('../data/productsService')


const productsController = {

	Detail: function (req, res) {
		res.render("productDetail");
	},
	Create: function (req,res) {
		res.render("productCreate");
	},
	Edit: function (req,res) {
		res.render("productEdit");
	},
	save: function (req,res){
		console.log(req.body);

		// res.redirect('/');
	}
}


module.exports = productsController;
