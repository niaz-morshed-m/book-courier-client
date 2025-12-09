import React from 'react';
import { FaStar } from "react-icons/fa";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';


const BookDetails = () => {
const {id} = useParams()
const axiosSecure = useAxiosSecure()
const {data: book = []} = useQuery({
    queryKey: ['book'],
    queryFn: async ()=> {
        const res = await axiosSecure.get(`/book/details/${id}`);
        return res.data
    }
})


    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
        {/* Main Card Component */}
        {/* lg:card-side makes it side-by-side on desktop, stacked on mobile */}
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-5xl w-full border border-gray-100">
          {/* Left Side: Image */}
          {/* We use a dark background color to match the reference image */}
          <figure className="bg-[#0f1f38] lg:w-1/3 min-h-[300px] flex items-center justify-center">
            <img
              src={book.image}
              alt="The Midnight Library"
              className="w-36 rounded shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </figure>

          {/* Right Side: Content */}
          <div className="card-body lg:w-2/3 text-left">
            {/* Header */}
            <h2 className="card-title text-3xl font-bold">
             {book.title}
            </h2>
            <p className="text-blue-500 font-medium text-lg grow-0">
              {book.author}
            </p>

            {/* Rating Section */}
            <div className="flex items-center gap-3 my-2">
              <div className="badge badge-ghost p-3 font-semibold text-gray-500">
                Fiction
              </div>
              <div className="flex text-yellow-400 gap-1">
                <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                <FaStar className="text-gray-300" />
              </div>
              <span className="text-gray-500 text-sm">4.5 (1289 reviews)</span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-blue-500 my-2">$15.99</div>

            {/* CTA Button */}
            <div className="card-actions">
              <button className="btn btn-primary w-full text-white bg-blue-500 border-none hover:bg-blue-600">
                Order Now
              </button>
            </div>

            {/* Synopsis */}
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Synopsis</h3>
              <p className="text-gray-500 mt-2 leading-relaxed text-sm">
               {book.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;