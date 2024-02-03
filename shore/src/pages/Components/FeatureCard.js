import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const sportscard = {
    height: "250px"
}
const navlink = {
    color : '#000'
}

const co = {
    zIndex: "0"
}
function FeatureCard() {
    return (
        <section className="mt-5 " style={co}>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            src="https://images.unsplash.com/photo-1558008258-7ff8888b42b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXNwb3J0JTIwdG91cm5hbWVudHxlbnwwfHwwfHx8MA%3D%3D"
                            className="card-img-top"
                            alt="linkss"
                            style={sportscard}
                        />
                        <div className="card-body">
                            <h5 className="card-title"><Link style={navlink} to='/esport'>E sports</Link></h5>
                            {/* <p className="card-text">A brief description of the feature.</p> */}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img
                            style={sportscard}
                            src="https://plus.unsplash.com/premium_photo-1676634832558-6654a134e920?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="card-img-top"
                            alt="linkss"
                        />
                        <div className="card-body">
                            <h5 className="card-title"><Link style={navlink} to='/sport'>Sports</Link></h5>
                            {/* <p className="card-text">A brief description of the feature.</p> */}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img style={sportscard} 
                            src="https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/09/Capture_HAckathon_wordpress.jpg"
                            className="card-img-top"
                            alt="links"
                        />
                        <div className="card-body">
                            <h5 className="card-title"><Link style={navlink} to='/hackathon'>Hackathon</Link></h5>
                            {/* <p className="card-text">A brief description of the feature.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default FeatureCard;