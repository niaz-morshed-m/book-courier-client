import React from 'react';
import BookCard from '../../../Components/Cards/BookCard';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../../hooks/useAxiosSecure';



const LatestBooks = () => {

const axiosSecure = useAxiosSecure();

const { data: books = [] } = useQuery({
  queryKey: ["books"],
  queryFn: async () => {
    const res = await axiosSecure.get("/book/latest");
    return res.data;
  },
});

    return (
      <div className='grid grid-cols-4 gap-5 p-3.5'>
        {books.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    );
};

export default LatestBooks;