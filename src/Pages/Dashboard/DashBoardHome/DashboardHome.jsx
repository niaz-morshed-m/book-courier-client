import React from 'react';
import AdminHome from './AdminHome';
import useRole from '../../../hooks/useRole'
import LibrarianHome from './LibrarianHome';
import UserHome from './UserHome';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../../Components/Loading';

const DashboardHome = () => {
    const {role, roleLoading} = useRole()
    const { loading } = useAuth();


if (loading || roleLoading) {
  return <Loading></Loading>
}

    return (
        <div>

{
    role==="admin"&& <AdminHome></AdminHome>
}
       {
        role=="librarian"&&<LibrarianHome></LibrarianHome>
       }
       {
        role==="user"&&<UserHome></UserHome>
       }
        </div>
    );
};

export default DashboardHome;