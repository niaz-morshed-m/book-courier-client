import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaCircleInfo } from "react-icons/fa6";

const MyBooks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const modalRef = useRef(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const { data: books = [], refetch } = useQuery({
    queryKey: ["myBooks", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/books/librarian/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
  console.log(books);
  const { register, handleSubmit, reset } = useForm();

  // open modal + set default values
  const openEditModal = (book) => {
    setSelectedBook(book);
    reset({
      title: book.title,
      author: book.author,
      price: book.price,
      inStock: book.inStock,
      status: book.status,
    });
    modalRef.current.showModal();
  };

  // submit handler
  const onSubmit = (data) => {
  axiosSecure.patch(`/book/${selectedBook._id}`, data).then((res)=>{



 if (res.data.modifiedCount){
 refetch();
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Book Info Updated",
  showConfirmButton: false,
  timer: 1500,
});
 } modalRef.current.close();
    
  } )
    
    
    
  };
if(books.length === 0){
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
}

else{
   return (
     <div>
       <div className="overflow-x-auto">
         <p className="text-xl font-semibold mt-2">Your Books</p>
         <p className="text-secondary mb-2">All the books you added</p>
         <table className="table">
           <thead>
             <tr>
               <th>Name</th>
               <th>Status</th>
               <th>Action</th>
             </tr>
           </thead>

           <tbody>
             {books.map((book) => (
               <tr key={book._id}>
                 <td>
                   <div className="flex items-center gap-3">
                     <img
                       src={book.image}
                       className="w-12 h-12 rounded-lg"
                       alt=""
                     />
                     <div>
                       <p className="font-bold">{book.title}</p>
                       <p className="text-sm opacity-70">{book.author}</p>
                     </div>
                   </div>
                 </td>

                 <td>{book.status}</td>

                 <td>
                   <button
                     className="btn btn-sm btn-primary"
                     onClick={() => openEditModal(book)}
                   >
                     Edit
                   </button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>

       {/* ================= MODAL ================= */}
       <dialog ref={modalRef} className="modal">
         <div className="modal-box w-11/12 max-w-3xl">
           <h3 className="font-bold text-lg mb-4">Edit Book</h3>

           <form
             onSubmit={handleSubmit(onSubmit)}
             className="grid grid-cols-1 md:grid-cols-2 gap-4"
           >
             {/* Title */}
             <div>
               <label className="label">Book Title</label>
               <input
                 {...register("title", { required: true })}
                 className="input input-bordered w-full"
               />
             </div>

             {/* Author */}
             <div>
               <label className="label">Author</label>
               <input
                 {...register("author", { required: true })}
                 className="input input-bordered w-full"
               />
             </div>

             {/* Price */}
             <div>
               <label className="label">Price</label>
               <input
                 type="number"
                 {...register("price", { required: true })}
                 className="input input-bordered w-full"
               />
             </div>

             {/* Stock */}
             <div>
               <label className="label">In Stock</label>
               <input
                 type="number"
                 {...register("inStock", { required: true })}
                 className="input input-bordered w-full"
               />
             </div>

             {/* Status */}
             <div className="md:col-span-2">
               <label className="label">Status</label>
               <select
                 {...register("status")}
                 className="select select-bordered w-full"
               >
                 <option value="published">published</option>
                 <option value="unpublished">unpublished</option>
               </select>
             </div>

             {/* Actions */}
             <div className="modal-action md:col-span-2">
               <button type="submit" className="btn btn-success">
                 Update Book
               </button>
               <button
                 type="button"
                 className="btn"
                 onClick={() => modalRef.current.close()}
               >
                 Cancel
               </button>
             </div>
           </form>
         </div>
       </dialog>
     </div>
   ); 
}
  
};

export default MyBooks;
