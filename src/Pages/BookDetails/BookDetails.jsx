import React, { useRef, useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaStar,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosInformationCircle } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { AiOutlineHeart } from "react-icons/ai";

const BookDetails = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const deliveryCharge = 85; 
const [isWishlisted, setIsWishlisted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { user } = useAuth();
  const { data: book = [], refetch, isLoading } = useQuery({
    queryKey: ["book"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/book/details/${id}`);
      return res.data;
    },
  });

console.log(book);
  useEffect(() => {
    if (book.price) {
      setTotal(book.price * quantity + deliveryCharge);
    }
  }, [quantity, book.price]);

useEffect(() => {
  if (book?._id && user?.email) {
    axiosSecure
      .get(`/wishlist/check?bookId=${book._id}&email=${user.email}`)
      .then((res) => {
        setIsWishlisted(res.data.exists);
      });
  }
}, [book?._id, user?.email]);

const { data: reviews = [], refetch: refetchReviews } = useQuery({
  queryKey: ["reviews", book?._id],
  enabled: !!book?._id,
  queryFn: async () => {
    const res = await axiosSecure.get(`/reviews/${book._id}`);
    return res.data;
  },
});


  const onSubmit = async (data) => {
    data.bookName = book.title;
    data.author = book.author;
    data.cost = total;
    data.bookId = book._id;
    data.status = "pending";
    data.paymentStatus = "unpaid";
    data.image = book.image;
    data.librarianEmail = book.librarianEmail;

    const res = await axiosSecure.post("/order", data);
  
    if (res.data.orderId) {
      modalRef.current.close();
      reset();
      refetch();

      navigate("/dashboard/orders");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Order has been Placed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
const handleWishlist = async () => {
  if (isWishlisted) return;

  const wishInfo = {
    bookName: book.title,
    author: book.author,
    bookId: book._id,
    image: book.image,
    price: book.price,
    userEmail: user.email,
  };

  const res = await axiosSecure.post("/wishlist/add", wishInfo);

  if (res.data.insertedId) {
    setIsWishlisted(true);
    Swal.fire({
      icon: "success",
      title: "Added to wishlist ❤️",
      timer: 1200,
      showConfirmButton: false,
    });
  }
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
const handleReviewSubmit = async (e) => {
  e.preventDefault();

  const reviewData = {
    bookId: book._id,
    bookTitle: book.title,
    rating,
    comment,
    userName: user?.displayName,
    userEmail: user?.email,
    userPhoto: user?.photoURL,
  };

  try {
    const res = await axiosSecure.post("/reviews", reviewData);

    if (res.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Review added",
        timer: 1200,
        showConfirmButton: false,
      });
      setComment("");
      setRating(5);
      refetchReviews();
    }
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: err.response?.data?.message || "Failed to add review",
    });
  }
};

if(isLoading){
  return (
    <div className="flex justify-center items-center mx-auto m-25">
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
}

  return (
    <div className="my-7">
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-5xl w-full border border-gray-100">
          <figure className="bg-[#0f1f38] lg:w-1/3 min-h-[300px] flex items-center justify-center">
            <img
              src={book.image}
              alt="Book Cover"
              className="w-36 rounded shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </figure>

          <div className="card-body lg:w-2/3 text-left">
            <div className="flex justify-between items-center">
              <h2 className="card-title text-3xl font-bold">{book.title}</h2>
              <button
                disabled={isWishlisted}
                onClick={handleWishlist}
                className={`btn btn-sm ${
                  isWishlisted
                    ? "bg-gray-300 cursor-not-allowed text-gray-600"
                    : "bg-primary text-accent"
                }`}
              >
                <AiOutlineHeart />
                {isWishlisted ? "Already in Wishlist" : "Add to Wishlist"}
              </button>
            </div>

            <p className="text-blue-500 font-medium text-lg grow-0">
              {book.author}
            </p>

            <div className="flex items-center gap-3 my-2">
              <div className="badge badge-ghost p-3 font-semibold text-gray-500">
                Fiction
              </div>
            </div>

            {stockCheck()}
            <div className="text-3xl font-bold text-blue-500 my-2">
              ${book.price}
            </div>

            <dialog ref={modalRef} id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-2xl text-center mb-6">
                  Place Your Order
                </h3>

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
                        value={user?.displayName}
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
                        value={user?.email}
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

                  {/* Quantity Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text flex items-center gap-2">
                        Quantity
                      </span>
                    </label>
                    <input
                      type="number"
                      min="1"
                      max={book.inStock}
                      value={quantity}
                      className="input input-bordered w-full"
                      {...register("quantity", {
                        required: true,
                        min: 1,
                        max: book.inStock,
                        valueAsNumber: true,
                        onChange: (e) => setQuantity(Number(e.target.value)),
                      })}
                    />
                    {errors.quantity && (
                      <span className="text-red-500 text-xs">
                        Quantity must be between 1 and {book.inStock}
                      </span>
                    )}
                    {/* {errors.quantity && (
                    <span className="text-red-500 text-xs mt-1">
                      Quantity must be at least 1
                    </span>
                  )} */}

                    {/* Live Total */}
                    {quantity > 0 && (
                      <div>
                        <p className="font-semibold mt-2">
                          Total Payable Amount (With $85 Delivery Charge) :{" "}
                          <span className="text-blue-500">${total}</span>
                        </p>
                      </div>
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
                  <form method="dialog" className="flex gap-2">
                    <button className="btn">Cancel</button>
                    <button
                      type="submit"
                      form="order-form"
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
                disabled={book.inStock < 1}
                onClick={() => modalRef.current.showModal()}
                className={`btn w-full text-white ${
                  book.inStock < 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                <HiOutlineShoppingBag />
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
      <div className="mt-10 border-t pt-6">
        <h3 className="text-xl font-bold mb-4">Write a Review</h3>

        <form onSubmit={handleReviewSubmit} className="space-y-3">
          {/* Rating */}
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer ${
                  star <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Comment */}
          <textarea
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review..."
            className="textarea textarea-bordered w-full"
          />

          <button className="btn btn-primary btn-sm">Submit Review</button>
        </form>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Reviews ({reviews.length})</h3>

        {reviews.length === 0 && (
          <p className="text-gray-500">No reviews yet.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <div key={review._id} className="card bg-base-100 shadow">
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <img
                    src={review.userPhoto}
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />
                  <div>
                    <h4 className="font-semibold">{review.userName}</h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mt-3">{review.comment}</p>

                <p className="text-xs text-gray-400 mt-2">
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
