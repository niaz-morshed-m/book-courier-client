import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Payment = () => {

const {id}= useParams()
const axiosSecure = useAxiosSecure()
const {data: order =[]}=useQuery({
    queryKey: ["Order", id],
    queryFn: async()=>{
const res = await axiosSecure.get(`/order/id/${id}`)
return res.data
    }
})

console.log(order)

    return (
      <div className="text-center m-3 space-y-7">
        <img src={order.image} className='max-w-36 mx-auto' alt="" />
        <span className="font-semibold text-xl">
          Please Pay ${order.cost} for{" "}
          <span className="text-primary">{order.bookName}</span>
        </span> <br></br>
        <button className='btn bg-primary my-3'>Proceed to Pay</button>
      </div>
    );
};

export default Payment;