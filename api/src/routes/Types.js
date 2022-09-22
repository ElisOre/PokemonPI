// const axios = require('axios');
const { Router } = require('express');
const { Type } = require('../db');
const router = Router();

// Obtener los tipos de pokemons
router.get('/', async (req, res) => {
    // llamado async a la api
    // guardar el objeto en la db (verificar los datos)
    try {
        const types = await Type.findAll();
        return res.json(types);
    } catch (e) {
        console.log(e);
    }
});


module.exports = router;