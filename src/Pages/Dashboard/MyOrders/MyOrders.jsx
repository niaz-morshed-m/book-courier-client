import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { FaCircleInfo } from "react-icons/fa6";
import Loading from "../../../Components/Loading";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: orders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myOrders", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order/email/${user.email}`);
      return res.data;
    },
  });
  console.log(orders);
  const cancelStatus = (id) => {
    Swal.fire({
      title: "You Want to Cancel the Order?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showDenyButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Cancelled!",
          text: "Your order has been cancelled.",
          icon: "success",
        });
        axiosSecure
          .patch(`/order/${id}`, { status: "cancelled" })
          .then((res) => {
            refetch();
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      }
    });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (orders.length === 0) {
    return (
      <div className="my-2.5">
        <p className="flex justify-center items-center gap-2 font-bold text-2xl">
          <span className="">
            <FaCircleInfo />
          </span>
          You haven't placed any order yet
        </p>
      </div>
    );
  } else {
    return (
      <div className="overflow-x-auto">
        <p className="text-xl font-semibold mt-2">Your Orders</p>
        <p className="text-secondary mb-2">All the books you ordered</p>
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
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-sm bg-primary text-accent">
                          Pay
                        </button>
                      </Link>
                    ) : (
                      <span>Paid</span>
                    ))}
                </td>
                <th>
                  {order.status === "pending" && (
                    <button
                      onClick={() => cancelStatus(order._id)}
                      className="btn  btn-xs"
                    >
                      Cancel
                    </button>
                  )}
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
};

export default MyOrders;
