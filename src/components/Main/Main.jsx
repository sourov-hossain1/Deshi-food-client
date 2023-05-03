import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbarmy from '../Shared/Navbar/Navbarmy';

const Main = () => {
    return (
        <div>
            <Navbarmy></Navbarmy>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;