const indexController = {
    goHome: function(req,res) {
        res.render("home")
    },
    goCarrito: function(req,res) {
        res.render("carrito")
    }  

}

module.exports = indexController;