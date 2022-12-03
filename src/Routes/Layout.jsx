import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="App">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout