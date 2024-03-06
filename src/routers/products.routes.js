const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => res.send("Estas viendo el listado de productos"))
router.get('/:id', (req, res) => res.send('Estas viendo el detalle del producto nro ${req.params.id}'))

module.exports = router