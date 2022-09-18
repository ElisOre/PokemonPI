const { Router } = require('express');
const axios = require('axios');
const { Pokemon, Type } = require('../db.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Obtener un listado de pokemons
router.get('/pokemons', (req, res) => {
    const link = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=40';
    // hacer un llamado asincronico a la api y a la db
    // buscar qué me sirve y quedarme con eso
    // validar que haya información y enviarla
    const pokemonCreated = Pokemon.findAll({ include: [{ model: Type }] })

    // fetch.get(link).then(response => response.json()).then(dataJson => res.json(dataJson));
    const apiPokemon = axios.get(link);

    Promise.all([pokemonCreated, apiPokemon])
        .then((result) => {
            const [resPokemonsCreated, resApiPokemons] = result;
            const response = [...resPokemonsCreated, ...resApiPokemons.data.results];
            res.json(response);
        })
        .catch((err) => console.log(err));


});

// Obtener detalles de un pokemon por id
router.get('/pokemons/:id', (req, res) => {

    // llamado asinc por id (findByPK)
    // verificar qué tipo de ID es (de la api o de la db)
    // enviar los detalles

});

// Obtener pokemon que coincida con el nombre exacto (de pokeapi o creado)
router.get('/pokemons', (req, res) => {

    // validar si coincide lo que pasa por query (puede ser de la api o de la db)
    // enviar el resultado correspondiente (mensaje de error u objeto json)

});

// Crear un pokemon con su tipo
router.post('/pokemons', (req, res) => {

    // verificar los datos por body a través del formulario
    // relacionar el pokemon con sus tipos
    // guardar en la db

});

// Obtener los tipos de pokemons
router.get('/types', (req, res) => {

    // llamado async a la api
    // guardar el objeto en la db (verificar los datos)

});

module.exports = router;
