import React from 'react';
import "./Loader.css";

const Loader = () => {
    return (
        <div className="Loader">
            <div className="ui-loader loader-blk">
                <svg viewBox="22 22 44 44" className="multiColor-loader">
                    <circle
                        cx="44"
                        cy="44"
                        r="20.2"
                        fill="none"
                        strokeWidth="4"
                        className="loader-circle loader-circle-animation"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Loader;
