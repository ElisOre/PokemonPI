import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokeName } from "../../../../Redux/Actions";

export default function NavBar() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getPokeName(name));
    };

    return (
        <div>
            <div>
                <a href="http://localhost:3000/home">
                    <img src="https://th.bing.com/th/id/R.f96a08fa96472031608960914f95beeb?rik=XZ6t%2fu9tJXTuew&riu=http%3a%2f%2f3.bp.blogspot.com%2f-_gE6akmxfrw%2fUPXpnRVzoUI%2fAAAAAAAAApQ%2feAuD868vHa4%2fs1600%2fPokedex_logo.png&ehk=N6s%2fhrMvZtCFi31HnEFV%2f1FWtbeOfj0%2bZo3tfNyV6NQ%3d&risl=&pid=ImgRaw&r=0" alt="POKÉDEX" width='150px' height='50px'/>
                </a>
            </div>

            <div>
                <Link to='/createPokemon'>
                    <button>CREATE A NEW POKEMON</button>
                </Link>
            </div>

            <div>
                <input
                    type="search"
                    placeholder="Search for a Pokemon"
                    onChange={e => handleInputChange(e)}
                />
                <button type="submit" onClick={e => handleSubmit(e)}>SEARCH</button>
            </div>
        </div>
    );
};