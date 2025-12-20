import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const PaymentSuccess = () => {
const axiosSecure = useAxiosSecure()
const [searchParams] = useSearchParams();
const sessionId = searchParams.get("session_id");
useEffect(() => {
  if (sessionId){
    axiosSecure.patch(`/check-payment/${sessionId}`).then(res=> console.log(res))
  }
}, [sessionId]);


    return (
      <div className="space-y-2.5 my-8">
        <p className="flex justify-center items-center gap-2 font-bold text-2xl">
          <span className="">
            <IoMdCheckmarkCircleOutline />
          </span>
          Payment Successful
        </p>
        <div className="flex justify-center items-center gap-2">
          <Link to="/books">
            {" "}
            <button className="btn bg-primary text-accent">
              Explore More Books
            </button>
          </Link>
          <Link to="/dashboard/invoices">
            {" "}
            <button className="btn bg-primary text-accent">
              See Payment History
            </button>
          </Link>
        </div>
      </div>
    );
};

export default PaymentSuccess;