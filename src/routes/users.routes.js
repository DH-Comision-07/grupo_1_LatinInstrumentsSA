const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => res.send("Estas viendo el listado de usuarios"))
router.get('/:id', (req, res) => res.send('Estas viendo el detalle del usuario nro ${req.params.id}'))

module.exports = router