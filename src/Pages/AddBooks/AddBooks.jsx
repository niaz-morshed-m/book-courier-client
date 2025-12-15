import React from "react";
import { useForm } from "react-hook-form"; // 1. Import the hook
import {
  FaBook,
  FaUser,
  FaImage,
  FaDollarSign,
  FaTags,
  FaLayerGroup,
  FaPenNib,
} from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const AddBooks = () => {

const {user} = useAuth()
const axiosSecure = useAxiosSecure()

  // 2. Destructure the functions we need from the hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 3. This function runs ONLY if validation passes
  const onSubmit = (data) => {
  
data.librarianEmail = user.email
data.librarianName = user.displayName
data.price = parseInt(data.price)
data.inStock = parseInt(data.inStock)
data.addedAt = new Date()
  
  axiosSecure.post('/book/add', data).then(res=> console.log(res))
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-4xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center block mb-6">
            Add New Book
          </h2>

          {/* 4. Pass handleSubmit to the form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <FaBook /> Book Title
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. To Kill a Mockingbird"
                  className="input input-bordered w-full"
                  // 5. Connect input to form using register
                  {...register("title", { required: true })}
                />
                {/* 6. Display error if field is empty */}
                {errors.bookTitle && (
                  <span className="text-error text-sm mt-1">
                    Title is required
                  </span>
                )}
              </div>

              {/* Author Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <FaUser /> Author Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Harper Lee"
                  className="input input-bordered w-full"
                  {...register("author", { required: true })}
                />
                {errors.authorName && (
                  <span className="text-error text-sm mt-1">
                    Author is required
                  </span>
                )}
              </div>

              {/* Image URL Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <FaImage /> Image URL
                  </span>
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  className="input input-bordered w-full"
                  {...register("image")}
                />
              </div>

              {/* Category Select */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <FaTags /> Category
                  </span>
                </label>
                <select
                  className="select select-bordered w-full"
                  defaultValue="Fiction" // Best practice for React selects
                  {...register("category")}
                >
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Biography">Biography</option>
                </select>
              </div>

              {/* Price Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <FaDollarSign /> Price
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="e.g. 450"
                  className="input input-bordered w-full"
                  {...register("price", { required: true, min: 0 })}
                />
                {errors.price && (
                  <span className="text-error text-sm mt-1">
                    Price is required
                  </span>
                )}
              </div>

              {/* Stock & Status Grouped */}
              <div className="grid grid-cols-2 gap-4">
                {/* Stock */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text flex items-center gap-2">
                      <FaLayerGroup /> Stock
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 12"
                    className="input input-bordered w-full"
                    {...register("inStock")}
                  />
                </div>
                {/* Status */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Status</span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    defaultValue="Published"
                    {...register("status")}
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Unpublished</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FaPenNib /> Description
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Book summary..."
                {...register("description")}
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="card-actions justify-end mt-6">
              <button type="button" className="btn btn-ghost">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary px-8">
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
