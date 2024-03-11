const login = (req, res) => {
	res.render("login");
};

const registro = (req, res) => {
	res.render("registro");
};

module.exports = { registro, login };
