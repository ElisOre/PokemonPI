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
                            <Card name={poke.name} image={poke.image} types={poke.types} />
                        </Link>
                    ))
                ) : (
                    <h1>Pokemons not found</h1>
                )}
            </div>
        </>
    );
};