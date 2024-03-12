const home = (req, res) => {
	res.render("home");
};

const carrito = (req, res) => {
	res.render("carrito");
};

const nosotros = (req, res) => {
	res.render("nosotros");
};

module.exports = { home, carrito, nosotros };
