import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const {user}= useAuth()
    return (
      <div className="max-w-md mx-auto mt-10 p-6  rounded-2xl shadow-md text-center">
        <p className="text-2xl font-semibold mb-4">User Dashboard</p>
        {/* Profile Image */}
        <div className="mb-4">
          <img
            src={user?.photoURL || "/default-profile.png"}
            alt="User Profile"
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-semibold mb-1">
          {user?.displayName || "User Name"}
        </h2>
        <p className="text-gray-600 mb-1">
          {user?.email}
        </p>
 


        <p className="text-gray-700">
          Manage your orders, wishlist, and profile from here.
        </p>
      </div>
    );
};

export default UserHome;