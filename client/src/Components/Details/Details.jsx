import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetails } from "../../Redux/Actions";

export default function DetailsPoke(props) {
    const dispatch = useDispatch;
    useEffect(() => {
        dispatch(getDetails(props.match.params.id))
    }, [dispatch]);

    const details = useSelector(state => state.details);
    return (
        <div>
            console.log(details);
            <div>
                <Link to='/home'>Back Home</Link>
            </div>
            <div>
                {
                    details.length ?
                        <div>
                            <h2>{details[0].name.toUpperCase()}</h2>
                            <img src={details[0].image} alt="Pokemon" width='300px' height='300px' />
                            <h4>TYPES: {details[0].types.map(t => t.name.toUpperCase())}</h4>
                            <div>
                                <p>#{details[0].id}</p>
                            </div>
                            <div>
                                <p>SP: {details[0].hp}</p>
                            </div>
                            <div>
                                <p>ATQ: {details[0].attack}</p>
                            </div>
                            <div>
                                <p>DEF: {details[0].defense}</p>
                            </div>
                            <div>
                                <p>SPD: {details[0].speed}</p>
                            </div>
                            <div>
                                <p>HEIGHT: {details[0].height}</p>
                            </div>
                            <div>
                                <p>WEIGHT: {details[0].weight}</p>
                            </div>
                        </div> :
                        <img src="https://i.gifer.com/YNXo.gif" alt="Pokemon not found" />
                }
            </div>
        </div>
    );
};