import React from "react";
import { Link } from "react-router-dom";
import './landingPage.css';

export default function LandingPage() {
    return (
        <div className="landing">
            <div style={{ display: 'flex', flexFlow: 'column' }}>
                <Link to='/home'>
                    <button className="buttonLanding">Start!</button>
                </Link>
            </div>
        </div>
    );
};