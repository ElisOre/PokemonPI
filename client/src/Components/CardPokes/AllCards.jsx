import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Card from "./card";
import { Link } from 'react-router-dom';
import { getPokes } from "../../Redux/Actions";

export default function AllCards() {
    // Pedido de estado a redux
    let statePoke = useSelector(state => state.pokes);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPokes());
    }, [dispatch]);


    return (
        <>
            <div>
                {statePoke.length ? (
                    statePoke.map(poke => (
                        <Link to={`/details/${poke.id}`}>
                            <Card name={poke.name} image={poke.image} types={poke.types}
                            attack={poke.attack} defense={poke.defense} hp={poke.hp} />
                        </Link>
                    ))
                ) : (
                    <img src="https://www.bing.com/th/id/OGC.65b53d94e34babffe2c4adc64e605335?pid=1.7&rurl=http%3a%2f%2fwww.gifde.com%2fgif%2fotros%2fdecoracion%2fcargando-loading%2fcargando-loading-048.gif&ehk=KjgpxVqnwFKUpsKS48CwOL%2bQRCVQ4LVka6p5MpshGZo%3d" alt="Pokemons not found" />
                )}
            </div>
        </>
    );
};