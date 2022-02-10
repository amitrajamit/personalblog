import React from 'react';

const Banner = () => {
    return (
        <>
            <div id="hero" className="hero route bg-image">
                <div className="overlay-itro"></div>
                <div className="hero-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h1 className="hero-title mb-4">I am Amit Kumar</h1>
                            <p className="hero-subtitle"><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Banner;
