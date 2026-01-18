const Newsletter = () => {
  return (
    <div className="container mx-auto px-4 my-20">
      <div className="card w-full bg-base-200 text-center py-10">
        <div className="card-body items-center">
          <h2 className="card-title text-3xl mb-2">Stay Updated!</h2>
          <p className="mb-6">
            Subscribe to our newsletter to get the latest book updates and
            delivery discounts.
          </p>

          <div className="join w-full max-w-sm">
            <input
              className="input input-bordered join-item w-full"
              placeholder="Enter your email address"
            />
            <button className="btn btn-primary join-item rounded-r-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
