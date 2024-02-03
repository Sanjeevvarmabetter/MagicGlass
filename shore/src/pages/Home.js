import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/home.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from './Components/NavBar';
import CarouselCom from './Components/CarouselCom';
import ModelCom from './Components/ModelCom';
import FeatureCard from './Components/FeatureCard';
import VerticalScroll from './Components/VerticalScroll';
import Login from "./Auth/Login";
import Signup from "./Auth/CreateUser";

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (

        <div className="container">
            <NavigationBar />

            <header className="mt-5 text-center">
                <h1>Welcome to Our Website</h1>
                <p>Explore and Discover Amazing Things</p>
            </header>


            {/* <section className="mt-5 text-center">
                <p>Call to Action Section</p>
                <button className="btn btn-primary">Get Started</button>
            </section> */}
        </div>
    );
};

export default Home;
