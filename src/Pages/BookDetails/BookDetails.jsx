import React, { useRef } from "react";
import {
  FaCheckCircle,
  FaStar,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useForm } from "react-hook-form"; // 1. Import hook
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosInformationCircle } from "react-icons/io";

const BookDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const modalRef = useRef(null);

  // 2. Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { data: book = [] } = useQuery({
    queryKey: ["book"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/book/details/${id}`);
      return res.data;
    },
  });

  // 3. Handle Form Submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);

    // You can send 'data' to your backend here using axiosSecure

    // Close the modal after submission
    modalRef.current.close();
    // Optional: Reset form fields
    reset();
  };

  const stockCheck = () => {
    if (book.inStock < 1) {
      return (
        <p className="text-red-500 flex items-center gap-2">
          <span>
            <IoIosInformationCircle />
          </span>{" "}
          Stock Out
        </p>
      );
    } else {
      return (
        <p className="text-green-500 flex items-center gap-2">
          <span>
            <FaCheckCircle />
          </span>{" "}
          {book.inStock} Piece in Stock
        </p>
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-5xl w-full border border-gray-100">
        <figure className="bg-[#0f1f38] lg:w-1/3 min-h-[300px] flex items-center justify-center">
          <img
            src={book.image}
            alt="Book Cover"
            className="w-36 rounded shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </figure>

        <div className="card-body lg:w-2/3 text-left">
          <h2 className="card-title text-3xl font-bold">{book.title}</h2>
          <p className="text-blue-500 font-medium text-lg grow-0">
            {book.author}
          </p>

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

          {stockCheck()}
          <div className="text-3xl font-bold text-blue-500 my-2">$15.99</div>

          <dialog ref={modalRef} id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-2xl text-center mb-6">
                Place Your Order
              </h3>

              {/* 4. Add ID and onSubmit to the form */}
              <form
                id="order-form"
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                {/* --- Personal Info Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text flex items-center gap-2">
                        <FaUser /> Full Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="input input-bordered w-full"
                      {...register("fullName", { required: true })}
                    />
                    {errors.fullName && (
                      <span className="text-red-500 text-xs mt-1">
                        Name is required
                      </span>
                    )}
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text flex items-center gap-2">
                        <FaEnvelope /> Email Address
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="input input-bordered w-full"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1">
                        Email is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text flex items-center gap-2">
                      <FaPhone /> Phone Number
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+880 1711..."
                    className="input input-bordered w-full"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs mt-1">
                      Phone is required
                    </span>
                  )}
                </div>

                {/* --- Detailed Address Section --- */}
                <div className="divider text-primary">
                  <FaMapMarkerAlt /> Shipping Address
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Division</span>
                    </label>
                    <select
                      className="select select-bordered w-full"
                      defaultValue=""
                      {...register("division", { required: true })}
                    >
                      <option disabled value="">
                        Select Division
                      </option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chittagong">Chittagong</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Barisal">Barisal</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Mymensingh">Mymensingh</option>
                    </select>
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Zilla (District)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Gazipur"
                      className="input input-bordered w-full"
                      {...register("district", { required: true })}
                    />
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Upazila</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kapasia"
                      className="input input-bordered w-full"
                      {...register("upazila", { required: true })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Union / Ward No.</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ward 04"
                      className="input input-bordered w-full"
                      {...register("ward")}
                    />
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">
                        Village / Street / House
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="House 12, Road 5..."
                      className="input input-bordered w-full"
                      {...register("street", { required: true })}
                    />
                  </div>
                </div>
              </form>

              <div className="modal-action mt-8">
                {/* Form for closing the modal */}
                <form method="dialog" className="flex gap-2">
                  <button className="btn">Cancel</button>

                  {/* 5. Submit Button linked to the form above */}
                  <button
                    type="submit"
                    form="order-form" // This matches the ID of the form above
                    className="btn btn-primary"
                  >
                    Place Order
                  </button>
                </form>
              </div>
            </div>
          </dialog>

          <div className="card-actions">
            <button
              onClick={() => modalRef.current.showModal()}
              className="btn btn-primary w-full text-white bg-blue-500 border-none hover:bg-blue-600"
            >
              <span>
                <HiOutlineShoppingBag />
              </span>{" "}
              Order Now
            </button>
          </div>

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
