import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaCircleInfo } from 'react-icons/fa6';
import Loading from '../../../Components/Loading';

const MyBookOrders = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: orders = [], refetch, isLoading } = useQuery({
      queryKey: ["myOrders", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/order/librarian/${user.email}`);
        return res.data;
      },
    });


 const cancelStatus = (id, status) => {

Swal.fire({
      title: "Are you sure?",
      text: `Want to update order status to ${status}?`,
      icon: "warning",
      showDenyButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Updated",
          text: `Order status updated to ${status}`,
          icon: "success",
        });
        axiosSecure
     .patch(`/order/${id}`, { status:  status})
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
if(orders.length === 0 ){
    return (
      <div className="my-2.5">
        <p className="flex justify-center items-center gap-2 font-bold text-2xl">
          <span className="">
            <FaCircleInfo />
          </span>
          Your didn't received any order yet
        </p>
      </div>
    );
}
else{
     return (
       <div>
         <div className="overflow-x-auto">
           <p className="text-xl font-semibold mt-2">Received Order</p>
           <p className="text-secondary mb-2">All the orders of your books</p>
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
                     {order.status !== "cancelled" &&
                     order.status === "pending" ? (
                       <button
                         onClick={() => cancelStatus(order._id, "shipped")}
                         className="btn btn-sm"
                       >
                         Shipped
                       </button>
                     ) : (
                       order.status !== "delivered" &&
                       order.status !== "cancelled" && (
                         <button
                           onClick={() => cancelStatus(order._id, "delivered")}
                           className="btn btn-sm"
                         >
                           Delivered
                         </button>
                       )
                     )}
                     {order.status !== "delivered" &&
                       order.status !== "cancelled" && (
                         <button
                           onClick={() => cancelStatus(order._id, "cancelled")}
                           className="btn btn-sm"
                         >
                           Cancel
                         </button>
                       )}
                   </td>
                 </tr>
               ))}
             </tbody>
             {/* foot */}
           </table>
         </div>
       </div>
     );
}
   
};

export default MyBookOrders;