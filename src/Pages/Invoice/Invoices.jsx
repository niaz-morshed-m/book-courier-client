import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaCircleInfo } from "react-icons/fa6";

const Invoices = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {data: payments = []} = useQuery({
    queryKey: ["myPayments", user?.email],
    queryFn: async () => {
        const res = await axiosSecure.get(`/payment/${user?.email}`);
        return res.data
    },
  });
if(payments.length===0){
    return (
      <div className="my-2.5">
     
        <p className="flex justify-center items-center gap-2 font-bold text-2xl">
          <span className="">
            <FaCircleInfo />
          </span>
          You haven't made any payment yet
        </p>
      </div>
    );
}
else{
    return (
      <div>
        <p className="text-xl font-semibold mt-2">Payments</p>
        <p className="text-secondary mb-2">All the payments you made</p>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Payment ID</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            {payments.map((payment, index) => (
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>
                  <td>{payment.transactionId}</td>
                  <td>${payment.amount}</td>
                  <td>
                    {new Date(payment.paidAt).toLocaleDateString("en-CA")}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    ); 
}
 
};

export default Invoices;
