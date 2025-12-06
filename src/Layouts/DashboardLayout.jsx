import React from 'react';
import NavBar from '../Pages/Shared/NavBar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;