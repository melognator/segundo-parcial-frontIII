import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context";

const Layout = () => {

    const {datos} = useContext(ContextGlobal)

    const tema = datos.theme

    return (
        <div className="App">
            <Navbar />
            <main className={tema} >
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout