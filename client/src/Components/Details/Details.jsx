import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDetails } from "../../Redux/Actions";

export default function DetailsPoke(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const id = props.match.params.id;

    function homeSubmit(e) {
        e.preventDefault();
        history.push('/home');
    };

    useEffect(() => {
        dispatch(getDetails(id));
    }, [dispatch, id]);

    const detail = useSelector(state => state.details);

    // console.log(details);
    return (
        <div>
            <div>
                {
                    detail.length ? (
                        detail.map(p => (
                            <div>
                                <h2>{p.name.toUpperCase()}</h2>
                                <img src={p.image} alt="Pokemon" width='300px' height='300px' />
                                <h4>TYPES: {p.types.map(t => t.name.toUpperCase() + ' ')}</h4>
                                <div>
                                    <p>#{p.id}</p>
                                </div>
                                <div>
                                    <p>SP: {p.hp}</p>
                                </div>
                                <div>
                                    <p>ATQ: {p.attack}</p>
                                </div>
                                <div>
                                    <p>DEF: {p.defense}</p>
                                </div>
                                <div>
                                    <p>SPD: {p.speed}</p>
                                </div>
                                <div>
                                    <p>HEIGHT: {p.height}</p>
                                </div>
                                <div>
                                    <p>WEIGHT: {p.weight}</p>
                                </div>

                                <button onClick={homeSubmit}>BACK HOME</button>
                            </div>
                        ))) : (
                        <img src="https://em.wattpad.com/414a3d71fd7e9e6cb8f29a77a78e0a50aee1827e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f466f714655777549384c734439773d3d2d3330373630343136382e313461626535373162326236306539303433393137333234393834302e676966?s=fit&w=720&h=720" alt="Pokemon not found" />
                    )}
            </div>
        </div>
    );
};