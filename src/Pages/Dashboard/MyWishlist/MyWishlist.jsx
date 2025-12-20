import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import { FaCircleInfo } from 'react-icons/fa6';

const MyWishlist = () => {
const {user} = useAuth()
const axiosSecure = useAxiosSecure()


  const {data: wishList = []} = useQuery({
    queryKey: ["myWishlist", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlist/${user?.email}`);
      return res.data;
    },
  });
 

if(wishList.length===0){
    return (
      <div className="my-2.5">
        <p className="flex justify-center items-center gap-2 font-bold text-2xl">
          <span className="">
            <FaCircleInfo />
          </span>
          You haven't added any book to wishlist
        </p>
      </div>
    );
}
else{
     return (
       <div className="overflow-x-auto">
         <p className="text-xl font-semibold mt-2">Your Wishlist</p>
         <p className="text-secondary mb-2">All the books you added in wishlist</p>
         <table className="table">
           {/* head */}
           <thead>
             <tr>
               <th>Book Name</th>

               <th>Price</th>
             </tr>
           </thead>
           <tbody>
             {/* row 1 */}
             {wishList.map((wish) => (
               <tr>
                 <td>
                   <div className="flex items-center gap-3">
                     <div className="avatar">
                       <div className="mask mask-squircle h-12 w-12">
                         <img src={wish.image} />
                       </div>
                     </div>
                     <div>
                       <div className="font-bold">{wish.bookName}</div>
                       <div className="text-sm opacity-50">{wish.author}</div>
                     </div>
                   </div>
                 </td>
                 <td>${wish.price}</td>
                 <td>
                   <Link to={`/book/details/${wish.bookId}`}>
                     <button className="btn btn-sm bg-primary text-accent">
                       See Details
                     </button>
                   </Link>
                 </td>
               </tr>
             ))}
           </tbody>
           {/* foot */}
         </table>
       </div>
     );
}
   
};

export default MyWishlist;