const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 my-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Readers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="card bg-base-100 shadow-xl border-t-4 border-primary">
          <div className="card-body">
            <div className="flex items-center gap-4 mb-4">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="User"
                  />
                </div>
              </div>
              <div>
                <h4 className="font-bold">Sarah Jenkins</h4>
                <p className="text-xs text-gray-500">Student</p>
              </div>
            </div>
            <p>
              "BookCourier saved my semester! I got the reference books I needed
              without leaving my dorm."
            </p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="card bg-base-100 shadow-xl border-t-4 border-primary">
          <div className="card-body">
            <div className="flex items-center gap-4 mb-4">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-12">
                  <span>JD</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold">John Doe</h4>
                <p className="text-xs text-gray-500">Researcher</p>
              </div>
            </div>
            <p>
              "The delivery was super fast. The condition of the books was
              pristine. Highly recommended!"
            </p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="card bg-base-100 shadow-xl border-t-4 border-primary">
          <div className="card-body">
            <div className="avatar ">
              <div className="w-12 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div>
                <h4 className="font-bold">Emily Clark</h4>
                <p className="text-xs text-gray-500">Book Lover</p>
              </div>
            </div>
            <p>
              "I love the variety of books available. The borrowing process is
              so simple and user-friendly."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
