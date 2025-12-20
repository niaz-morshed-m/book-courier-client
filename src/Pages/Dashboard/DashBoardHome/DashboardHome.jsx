import React from 'react';
import AdminHome from './AdminHome';
import useRole from '../../../hooks/useRole'
import LibrarianHome from './LibrarianHome';

const DashboardHome = () => {
    const {role} = useRole()
    return (
        <div>

{
    role==="admin"&& <AdminHome></AdminHome>
}
       {
        role=="librarian"&&<LibrarianHome></LibrarianHome>
       }
        </div>
    );
};

export default DashboardHome;