import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MyBookOrders = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: orders = [], refetch } = useQuery({
      queryKey: ["myOrders", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/order/librarian/${user.email}`);
        return res.data;
      },
    });


 const cancelStatus = (id, status) => {
   axiosSecure
     .patch(`/order/${id}`, { status:  status})
     .then((res) => {
       refetch();
       console.log(res.data);
     })
     .catch((err) => console.log(err));
 };

    return (
      <div>
        <p>Orders of My Books: {orders.length}</p>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Book</th>
                <th>Order Status</th>
                <th>Change Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {orders.map((order) => (
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={order.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order.bookName}</div>
                        <div className="text-sm opacity-50">
                          Payment: {order.paymentStatus}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{order.status}</td>
                  <td>
                    {order.status === "pending" ? (
                      <button
                        onClick={() => cancelStatus(order._id, "shipped")}
                        className="btn btn-sm"
                      >
                        Shipped
                      </button>
                    ) : (
                      <button
                        onClick={() => cancelStatus(order._id, "delivered")}
                        className="btn btn-sm"
                      >
                        Delivered
                      </button>
                    )}
                    <button
                      onClick={() => cancelStatus(order._id, "cancelled")}
                      className="btn btn-sm"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    );
};

export default MyBookOrders;