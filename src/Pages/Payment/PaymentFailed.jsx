import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const PaymentFailed = () => {
    return (
      <div className="space-y-2.5 my-8">
        <p className="flex justify-center items-center gap-2 font-bold text-2xl">
          <span className="">
            <RxCross2 />
          </span>
          Payment Failed
        </p>
        <div className="flex justify-center items-center gap-2">
          <Link to="/dashboard/orders">
            {" "}
            <button className="btn bg-primary text-accent">
              Try Again
            </button>
          </Link>
        </div>
      </div>
    );
};

export default PaymentFailed;