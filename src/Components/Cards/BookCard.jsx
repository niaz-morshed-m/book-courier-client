import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
      <figure className="h-40 w-full bg-black relative py-2.5 overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="h-full mx-auto hover:scale-105 transition-transform duration-300"
        />

        {/* Glassmorphism Category Badge */}
        <div
          className="
            absolute left-5 top-5 px-3 py-1 rounded-full
            text-xs font-medium text-white
            bg-white/10 backdrop-blur-md
            border border-white/20
            shadow-md
          "
        >
          {book.category}
        </div>
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg">{book.title}</h2>
        <p className="text-sm text-gray-500">{book.author}</p>

        {/* Price + Link */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-blue-600 text-[20px] font-semibold">$22.00</p>

          <Link to={`/book/details/${book._id}`}>
            <button className="flex items-center btn btn-sm bg-primary gap-1 text-sm text-accent">
              View Details <FiArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
