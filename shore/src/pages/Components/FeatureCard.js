import React, { Component } from 'react';

function FeatureCard() {
    return (
        <section className="mt-5">
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src="https://source.unsplash.com/random/500×700/?sports"
                            className="card-img-top"
                            alt="linkss"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Feature 1</h5>
                            <p className="card-text">A brief description of the feature.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src="https://source.unsplash.com/random/500×700/?e-sports"
                            className="card-img-top"
                            alt="linkss"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Feature 2</h5>
                            <p className="card-text">A brief description of the feature.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src="https://source.unsplash.com/random/700×900/?hackthons"
                            className="card-img-top"
                            alt="links"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Feature 3</h5>
                            <p className="card-text">A brief description of the feature.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default FeatureCard;