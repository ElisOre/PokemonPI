import React from "react";

export default function Paginado({ pokesPerPage, allPokes, paginado }) {
    const arrPage = [];

    for (let i = 0; i <= Math.floor(allPokes / pokesPerPage); i++) {
        arrPage.push(i + 1);
    };

    return (
        <div>
            <ul>
                {
                    arrPage && arrPage.map(num => {
                        return (
                            <li key={num}>
                                <button onClick={() => paginado(num)}>{num}</button>
                            </li>)
                    })
                }
            </ul>
        </div>
    );
};