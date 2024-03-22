
const productsController = {

	Detail: function (req, res) {
		res.render("productDetail");
	},
	Create: function (req,res) {
		res.render("productCreate");
	},
	Edit: function (req,res) {
		res.render("productEdit");
	}
}


module.exports = productsController;
