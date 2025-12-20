import React from 'react';
import { FaCircleInfo } from 'react-icons/fa6';
import { Link } from 'react-router';

const Forbidden = () => {
    return (
      <div className='space-y-5 my-6'>
        <p className="flex justify-center items-center gap-2 font-bold text-2xl">
          <span>
            <FaCircleInfo />
          </span>
          You are Forbidden to access this page
        </p>
        <div className="flex justify-center items-center gap-2">
          <Link to="/">
            {" "}
            <button className="btn bg-primary text-accent">
              Go to Home
            </button>
          </Link>
          <Link to="/dashboard">
            {" "}
            <button className="btn bg-primary text-accent">
             Go To Dashboard
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Forbidden;