import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import BookCard from "../../Components/Cards/BookCard";

const Books = () => {
  const axiosSecure = useAxiosSecure();

  // 🔍 search state
  const [search, setSearch] = useState("");

  // 🔃 sort state
  const [sortOrder, setSortOrder] = useState("");

  // 📚 fetch books
  const { data: books = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosSecure.get("/book/published");
      return res.data;
    },
  });

  // 🔍 filter + 🔃 sort books
  const filteredAndSortedBooks = books
    .filter((book) => book.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "low") {
        return a.price - b.price; // low → high
      }
      if (sortOrder === "high") {
        return b.price - a.price; // high → low
      }
      return 0; // no sorting
    });

  return (
    <div>
      <p className="text-3xl font-extrabold text-center my-8">
        Our <span className="text-primary">Books</span> Collections
      </p>

      {/* 🔍 Search & 🔃 Sort */}
      <div className="my-4 flex flex-col md:flex-row justify-center gap-4 px-4">
        {/* Search Input */}
        <label className="input input-bordered flex items-center gap-2 w-full max-w-md">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>

          <input
            type="search"
            placeholder="Search by book title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="grow"
          />
        </label>

        {/* Sort Dropdown */}
        <select
          className="select select-bordered w-full max-w-xs"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      {/* 📚 Books Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 p-3.5">
        {filteredAndSortedBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
