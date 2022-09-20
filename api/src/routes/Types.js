const axios = require('axios');
const { Router } = require('express');
const { Type } = require('../db');
const router = Router();

// Obtener los tipos de pokemons
router.get('/', async (req, res) => {
    // llamado async a la api
    // guardar el objeto en la db (verificar los datos)
    try {
        const typeApi = await axios.get('https://pokeapi.co/api/v2/type');
        const typeData = typeApi.data
        const types = typeData.results.map(el => el.name);

        types.forEach(element => {
            Type.findOrCreate({
                where: {
                    name: element
                }
            });
        });
        const allTypes = await Type.findAll();
        return res.send(allTypes);
    } catch (e) {
        console.log(e);
    }
});


module.exports = router;