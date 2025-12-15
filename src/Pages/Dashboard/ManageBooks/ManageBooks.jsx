import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageBooks = () => {
    const axiosSecure = useAxiosSecure()
    const { data: books = [], refetch } = useQuery({
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
    axiosSecure.patch(`/book/status/${book._id}`, updatedStatus).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
      }
    });
  };
  const handleDelete = (id) => {
    axiosSecure.delete(`/book/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount) {
        refetch();
      }
    });
  };

    return (
      <div>
        <p>Manage Books</p>
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
                    <button onClick={()=> handleDelete(book._id)} className="btn btn-xs bg-primary text-accent">
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
};

export default ManageBooks;