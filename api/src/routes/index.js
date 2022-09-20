const { Router, } = require('express');
const routePokemon = require('./Pokemons.js');
const routeType = require('./Types.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', routePokemon);
router.use('/types', routeType);

module.exports = router;