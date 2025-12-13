import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

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
console.log(payments)
  return (
    <div>
      <p>invoices</p>

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
                <td>{new Date(payment.paidAt).toLocaleDateString("en-CA")}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Invoices;
