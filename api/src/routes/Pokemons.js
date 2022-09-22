const { Router } = require('express');
const getAllPokes = require('../getPokemons/getPokemon');
const router = Router();
const { Pokemon, Type } = require('../db');

// Obtener pokemon que coincida con el nombre exacto (de pokeapi o creado)
router.get('/', async (req, res, next) => {
    // validar si coincide lo que pasa por query (puede ser de la api o de la db)
    // enviar el resultado correspondiente (mensaje de error u objeto json)
    try {
        const { name } = req.query;
        const allPokes = await getAllPokes();

        if (!name) { //si no se pasa un nombre por query, muestro todos los pokemons (ruta /pokemons)
            res.json(allPokes);
        } else {
            const namePoke = await allPokes.filter(e => //se filtra el pokemon pasado por query y lo retorno
                e.name.toLowerCase().includes(name.toLowerCase())
            );
            namePoke.length ? res.send(namePoke) : res.status(400).json({ msg: 'This pokemon not exist' });
        }
    } catch (error) {
        next(error);
    }
});

// Obtener detalles de un pokemon por id
router.get('/:id', (req, res, next) => {
    // llamado asinc por id (findByPK)
    // verificar qué tipo de ID es (de la api o de la db)
    // enviar los detalles
    try {
        const { id } = req.params;

        getAllPokes() //llamo a todos los pokemons (de la db y de la api) y lo filtro por su id o muestro msg de error
            .then(resp => {
                if (id) {
                    const pokeId = resp.filter(e => e.id == id);

                    pokeId.length ? res.json(pokeId) : res.status(400).json({ msg: 'Pokemon not found' });
                };
            });
    } catch (error) {
        next(error);
    }
});

// Crear un pokemon con su tipo
router.post('/', async (req, res) => {
    // verificar los datos por body
    // relacionar el pokemon con sus tipos
    // guardar en la db


    try {
        const { name, image, hp, attack, defense, speed, height, weight, types } = req.body;

        const newPoke = await Pokemon.create({
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight
        });

        if (!name) res.status(400).json({ msg: "Name is required" }); //el nombre no puede ser nulo
        if (typeof name !== 'string') res.status(400).json({ msg: "Incorrect data" }); //solo puede ser un string

        if (Array.isArray(types) && types.length) { //compruebo que sea un arreglo y que no esté vacío
            const dbTypes = await Promise.all(
                types.map(e => {
                    return Type.findOne({ where: { name: e } });
                })
            );

            await newPoke.addType(dbTypes); //le agrego los tipos al pokemon
            // const aux = await Pokemon.findByPk(newPoke.id, { include: [{ model: Type }] })

            return res.json({ msg: `${name} created successfully` });
        }

    } catch (error) {
        res.status(400).json({ msg: 'Was an error when creating: ' + error });
    }
});


module.exports = router;