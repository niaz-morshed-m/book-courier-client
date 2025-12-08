import React from 'react';
import { FiArrowRight } from "react-icons/fi";



const BookCard = ({book}) => {

    return (
      <div className="card bg-base-100 shadow-md">
        <figure className="h-40 w-full bg-black relative py-2.5">
          <img
            src={book.image}
            alt="Food dish"
            className="h-full"
          />
          <div className="badge badge-ghost absolute left-5 top-5 opacity-60">{book.category}</div>
        </figure>

        <div className="card-body">

          <h2 className="card-title text-lg">{book.title}</h2>
          <p className="text-sm text-gray-500">{book.author}</p>

          {/* Price + Link */}
          <div className="flex items-center justify-between mt-3">
            <p className="text-blue-600 text-[20px] font-semibold">$22.00</p>

            <button className="flex items-center btn-sm btn bg-primary gap-1 text-sm text-accent hover:underline">
              View Details <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    );
};

export default BookCard;