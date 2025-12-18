import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import BookCard from '../../Components/Cards/BookCard';

const Books = () => {

const axiosSecure = useAxiosSecure();

const { data: books = [] } = useQuery({
  queryKey: ["books"],
  queryFn: async () => {
    const res = await axiosSecure.get("/book/all");
    return res.data;
  },
});


    return (
      <div>
        <p className="text-3xl font-extrabold text-center my-8">
          {" "}
          Our <span className="text-primary"> Books </span> Collections{" "}
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 p-3.5">
          {books.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>
      </div>
    );
};

export default Books;