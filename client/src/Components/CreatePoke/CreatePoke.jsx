import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getTypes, postPokes } from "../../Redux/Actions";
import './create.css';

function validate(input) {
    let errors = {};
    if (!input.name) errors.name = 'Name is required';
    return errors;
};

export default function CreatePoke() {
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector(state => state.types);

    const [errors, setErrors] = useState({});

    const [poke, setPoke] = useState({
        name: '',
        image: '',
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: []
    });

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    function handleSelect(e) {
        if (!poke.types.includes(e.target.value)) {
            setPoke({
                ...poke,
                types: [...poke.types, e.target.value]
            });
        };
    };

    function handleChange(e) {
        e.preventDefault();
        setPoke({
            ...poke,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...poke,
            [e.target.name]: e.target.value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(postPokes(poke));
        alert('Created succesfully');

        setPoke({
            name: '',
            image: '',
            hp: 0,
            attack: 0,
            defense: 0,
            speed: 0,
            height: 0,
            weight: 0,
            types: []
        });
        history.push('/home');
    };

    return (
        <div className="create">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="title">Let's create your Pokemon!</h2>

                <label htmlFor="" className="labels">Name: </label>
                <input
                    onChange={handleChange}
                    type="text"
                    id="name"
                    name='name'
                    placeholder="Insert name..."
                    value={poke.name}
                    required
                    className="input"
                />{" "}
                {errors.name && <p className="error">{errors.name}</p>}

                <label htmlFor="" className="labels">Image: </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="image"
                    placeholder="Insert image..."
                    value={poke.image}
                    className="input"
                />{" "}

                <label htmlFor="" className="labels">Hp: </label>
                <input
                    onChange={handleChange}
                    type="number"
                    name="hp"
                    placeholder="Insert hp..."
                    value={poke.hp}
                    className="input"
                />{" "}

                <label htmlFor="" className="labels">Attack: </label>
                <input
                    onChange={handleChange}
                    type="number"
                    name="attack"
                    placeholder="Insert attack..."
                    value={poke.attack}
                    className="input"
                />{" "}

                <label htmlFor="" className="labels">Defense: </label>
                <input
                    onChange={handleChange}
                    type="number"
                    name="defense"
                    placeholder="Insert defense..."
                    value={poke.defense}
                    className="input"
                />{" "}

                <label htmlFor="" className="labels">Speed: </label>
                <input
                    onChange={handleChange}
                    type="number"
                    name="speed"
                    placeholder="Insert speed..."
                    value={poke.speed}
                    className="input"
                />{" "}

                <label htmlFor="" className="labels">Height: </label>
                <input
                    onChange={handleChange}
                    type="number"
                    name="height"
                    placeholder="Insert height..."
                    value={poke.height}
                    className="input"
                />{" "}

                <label htmlFor="" className="labels">Weight: </label>
                <input
                    onChange={handleChange}
                    type="number"
                    name="weight"
                    placeholder="Insert weight..."
                    value={poke.weight}
                    className="input"
                />{" "}

                <select className="types" onChange={e => handleSelect(e)}>
                    <option value="empty" className="t">Types</option>
                    {
                        types.map(t => (<option key={t.name} value={t.name}>{t.name}</option>))
                    }
                </select>
                <button className="btnCreate" type="submit">Create Pokemon</button>
            </form>
            <Link to='/home'><button className="btnHome" type="submit">Back Home</button></Link>
        </div>
    );
};