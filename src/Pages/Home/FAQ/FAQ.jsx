const FAQ = () => {
  return (
    <div className="container mx-auto px-4 my-10 mt-25">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do I borrow a book?
          </div>
          <div className="collapse-content">
            <p>
              Simply create an account, browse our collection, and click
              "Borrow". We will deliver it to you.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How long can I keep a book?
          </div>
          <div className="collapse-content">
            <p>
              The standard borrowing period is 14 days. You can renew it from
              your dashboard.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Is there a delivery fee?
          </div>
          <div className="collapse-content">
            <p>
              Delivery is free for premium members. Regular users pay a small
              fee based on distance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
