import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokes, getTypes, filterByTypes, filterOrigin, order } from "../../../Redux/Actions";
import Paginado from "./Paginado/Paginado";
import Cards from "../../CardPokes/Cards";

export default function Home() {
    const dispatch = useDispatch();

    const allPokes = useSelector(state => state.pokes);
    const allTypes = useSelector(state => state.types);

    const [currentPage, setCurrentPage] = useState(1);
    const [pokesPerPage] = useState(12);
    const [, setOrder] = useState('');
    const indLastPoke = currentPage * pokesPerPage;
    const indFirstPoke = indLastPoke - pokesPerPage;
    const currentPokes = allPokes.slice(indFirstPoke, indLastPoke);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    function handleOrder(e) {
        e.preventDefault();
        dispatch(order(e.target.value),
            setOrder(`${e.target.value}`));
    };

    function handleFilterByTypes(e) {
        e.preventDefault();
        dispatch(filterByTypes(e.target.value));
        setCurrentPage(1);
    };

    function handleFilterCreated(e) {
        e.preventDefault();
        dispatch(filterOrigin(e.target.value));
        setCurrentPage(1);
    };

    useEffect(() => {
        dispatch(getPokes());
        dispatch(getTypes());
    }, [dispatch]);

    return (
        <div>
            <div>
                <select name="select" onChange={e => handleOrder(e)}>
                    <option value="vacio">ORDER BY</option>

                    <optgroup label="NAME">
                        <option value="asc">A-Z</option>
                        <option value="des">Z-A</option>
                    </optgroup>

                    <optgroup label="ATTACK">
                        <option value="may">HIGHER ATTACK</option>
                        <option value="men">LOWEST ATTACK</option>
                    </optgroup>
                </select>

            </div>

            <div>
                <div>
                    <select onChange={e => handleFilterByTypes(e)}>
                        <option value="types">FILTER BY TYPE</option>
                        {
                            allTypes?.map(e => (<option key={e.name} value={e.name}>{e.name.toUpperCase()}</option>))
                        }
                    </select>
                </div>

                <div>
                    <select onChange={e => handleFilterCreated(e)}>
                        <option value='allp'>FILTER BY ORIGIN</option>
                        <option value="exist">ALL</option>
                        <option value="created">CREATED</option>
                    </select>
                </div>
            </div>

            <Paginado
                pokesPerPage={pokesPerPage}
                allPokes={allPokes.length}
                paginado={paginado}
                currentPage={currentPage}
            />

            {
                currentPokes.length ? (
                    currentPokes.length && currentPokes.map((p, i) => <Cards key={i} {...p} />)
                ) : (
                    <img src="https://www.bing.com/th/id/OGC.65b53d94e34babffe2c4adc64e605335?pid=1.7&rurl=http%3a%2f%2fwww.gifde.com%2fgif%2fotros%2fdecoracion%2fcargando-loading%2fcargando-loading-048.gif&ehk=KjgpxVqnwFKUpsKS48CwOL%2bQRCVQ4LVka6p5MpshGZo%3d" alt="Pokemons not found" />
                )
            }
        </div>
    );
};