const axios = require('axios');
const { Pokemon, Type } = require('../db');

// Obtener un listado de pokemons
const infoApi = async () => {
    // hacer un llamado asincronico a la api y a la db
    // buscar qué me sirve y quedarme con eso
    // enviar la información

    const api = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40') //llamado a la api
        .then(resp => {
            return resp.data.results; //accedo al name y a la url con los demás datos
        }).then(data => {
            return Promise.all(data.map(r => axios.get(r.url))); //llamado a la siguiente url de cada pokemon
        }).then(d => {
            return d.map(response => response.data); //obtengo la imagen, ataque, etc
        });

    let apiPokemon = api.map(result => { //detalles de cada pokemon
        return {
            id: result.id,
            name: result.name,
            types: result.types.map(t => { return { name: t.type.name } }),
            image: result.sprites.other.dream_world.front_default,
            hp: result.stats[0].base_stat,
            attack: result.stats[1].base_stat,
            defense: result.stats[2].base_stat,
            speed: result.stats[5].base_stat,
            height: result.height,
            weight: result.weight
        };
    });
    return apiPokemon;
};


const infoDB = async () => {
    await Pokemon.bulkCreate(infoApi); 
    try {
        const pokemonCreated = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        });
        return pokemonCreated; //verificar los datos y su relacion con type de la db 
    } catch (error) {
        console.error(new Error(error));
    }
};

const getAllPokes = async () => {
    const apiInfo = await infoApi();
    const dbInfo = await infoDB();

    const allInfo = [...apiInfo, ...dbInfo]; //concateno los datos de la api y la db
    return allInfo;
};



module.exports = getAllPokes;