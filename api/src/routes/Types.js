const axios = require('axios');
const {Router} = require('express');
const {type} = require('../db');
const router = Router();

// Obtener los tipos de pokemons
router.get('/', (req, res) => {
    const link = 'https://pokeapi.co/api/v2/type';
    // llamado async a la api
    // guardar el objeto en la db (verificar los datos)
    try {
        axios.get(link).then(response => {
            let aux = response.data.results.map((type) => {
                const obj = {
                    name: type.name
                };
                return obj;
            });
            res.send(aux);
        });
    } catch (e) {
        console.log(e);
    }
});


module.exports = router;