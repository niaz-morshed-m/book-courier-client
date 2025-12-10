import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: orders = [], refetch } = useQuery({
    queryKey: ["myOrders", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order/${user.email}`);
      return res.data;
    },
  });

 const cancelStatus = (id) => {
   axiosSecure
     .patch(`/order/${id}`, { status: "cancelled" })
     .then((res) =>{
        refetch()
        console.log(res.data)
     } )
     .catch((err) => console.log(err));
 };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>

        {orders.map((order) => (
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 max-w-12">
                      <img
                        src={order.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{order.bookName}</div>
                    <div className="text-sm opacity-50">
                      Quantity: {order.quantity} (${order.cost})
                    </div>
                  </div>
                </div>
              </td>
              <td>{new Date(order.createdAt).toLocaleDateString("en-CA")}</td>
              <td>{order.status}</td>
              <td>
                {order.status !== "cancelled" &&
                  (order.paymentStatus === "unpaid" ? (
                    <button className="btn btn-sm bg-primary text-accent">
                      Pay
                    </button>
                  ) : (
                    <span>Paid</span>
                  ))}
              </td>
              <th>
                {order.status === "pending" && (
                  <button onClick={()=>cancelStatus(order._id)} className="btn  btn-xs">Cancel</button>
                )}
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyOrders;
