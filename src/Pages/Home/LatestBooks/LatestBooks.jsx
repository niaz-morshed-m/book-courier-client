import React, { useEffect } from 'react';
import BookCard from '../../../Components/Cards/BookCard';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Aos from 'aos';
import Loading from '../../../Components/Loading';



const LatestBooks = () => {

const axiosSecure = useAxiosSecure();

const { data: books = [], isLoading } = useQuery({
  queryKey: ["books"],
  queryFn: async () => {
    const res = await axiosSecure.get("/book/latest");
    return res.data;
  },
});
 useEffect(() => {
   Aos.init();
 }, []);

if (isLoading) {
  return <Loading></Loading>;
}

    return (
      <div>
        <p className="text-4xl font-bold text-center my-10 mt-25">Latest Books</p>
        <div
          data-aos-duration="5000"
          data-aos="fade-up"
          className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 p-3.5"
        >
          {books.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>
      </div>
    );
};

export default LatestBooks;