import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

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
        <div>
            Payment Successful
        </div>
    );
};

export default PaymentSuccess;