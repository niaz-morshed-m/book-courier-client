import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaCircleInfo } from 'react-icons/fa6';
import Loading from '../../../Components/Loading';

const ManageBooks = () => {
    const axiosSecure = useAxiosSecure()
    const { data: books = [], refetch, isLoading } = useQuery({
      queryKey: ["books"],
      queryFn: async () => {
        const res = await axiosSecure.get("/book/all");
        return res.data;
      },
    });


  const handleAction = (book, status) => {
    const updatedStatus = {
      status: status,
    };
    Swal.fire({
      title: "Are you Sure?",
      text: `Make status of this book to ${status}?`,
      icon: "warning",
      showDenyButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Updated!",
          text: `The status of this book has been updated to ${status}`,
          icon: "success",
        });
       axiosSecure.patch(`/book/status/${book._id}`, updatedStatus).then((res) => {
   
      if (res.data.modifiedCount) {
        refetch();
      }
    });
      }
    });
    
  };
  const handleDelete = (id) => {

Swal.fire({
  title: "Are you Sure?",
  text: `Delete this book?`,
  icon: "warning",
  showDenyButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes",
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: `The Book has been deleted`,
      icon: "success",
    });
   axiosSecure.delete(`/book/${id}`).then((res) => {
     console.log(res.data);
     if (res.data.bookDeleted) {
       refetch();
     }
   });
  }
});
    

    
  };


if (isLoading) {
  return <Loading></Loading>;
}


if(books.length===0){
    return(
        <div>
              <p className="flex justify-center items-center gap-2 font-bold text-2xl">
                      <span className="">
                        <FaCircleInfo />
                      </span>
                      No book was added yet
                    </p>
        </div>
    )
}
else{
    return (
      <div>
        <p className="text-xl font-semibold mt-2">Manage Books</p>
        <p className="text-secondary mb-2">All the books librarians added</p>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {books.map((book) => (
                <tr key={book._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={book.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{book.title}</div>
                        <div className="text-sm opacity-50">
                          Added by {book.librarianEmail}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{book.status}</td>
                  <td>
                    {book.status === "published" ? (
                      <button
                        onClick={() => handleAction(book, "unpublished")}
                        className="btn btn-xs bg-primary text-accent"
                      >
                        Unpublish
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAction(book, "published")}
                        className="btn btn-xs bg-primary text-accent"
                      >
                        Publish
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="btn btn-xs bg-primary text-accent"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}
    
};

export default ManageBooks;