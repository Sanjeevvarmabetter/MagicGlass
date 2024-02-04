import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/home.css'

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavigationBar from './Components/NavBar';
import CarouselCom from './Components/CarouselCom';
import ModelCom from './Components/ModelCom';
import FeatureCard from './Components/FeatureCard';
import VerticalScroll from './Components/VerticalScroll';
import Login from "./Auth/Login";
import Signup from "./Auth/CreateUser";
import ContactUs from "./Components/ContactUs";
import SpreadsheetApp from "./SpreadsheetApp";
const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (

        <div className="containers">
            <NavigationBar />
            <div className="home-con">
                <FeatureCard />
                <CarouselCom />

                <VerticalScroll />
                <ContactUs />
                <Link to='/rank'>Rank</Link>
            </div>
            {/* <SpreadsheetApp /> */}
            <Link to='/loginHost'>Host Login</Link><br/>
            <Link to='/map'>maps</Link>
        </div>
    );
};

export default Home;
