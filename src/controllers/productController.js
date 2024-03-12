const productDetail = (req, res) => {
	res.render("productDetail");
};

const productEditCreate = (req, res) => {
	res.render("productEditCreate");
};

module.exports = { productDetail, productEditCreate };
