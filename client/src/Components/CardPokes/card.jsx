import React from "react";

export default function Card({ name, image, types, attack, hp, defense }) {
    return (
        <div>
            <div>
                <img src={image} alt={name} width='200px' height='200px' />
            </div>
            <div>
                {/* Conveirto el nombre con la primer letra en mayúscula */}
                <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            </div>
            <div>
                {/* Mapeo el nombre de cada type */}
                <h4>Type: {types.map(e => {
                    return e.name.charAt().toUpperCase() +
                    e.name.slice(1) + ' '
                })}</h4>
                <h5>Hp: {hp}</h5>
                <h5>Attack: {attack}</h5>
                <h5>Defense: {defense}</h5>
            </div>
        </div>
    );
};