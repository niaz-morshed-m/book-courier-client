import React from "react";
import { Link } from "react-router";
import { FaArrowLeft, FaLock } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <Link to="/" className="btn btn-ghost mb-6">
        <FaArrowLeft /> Back to Home
      </Link>

      <div className="bg-base-100 shadow-xl rounded-xl p-8 border border-base-200">
        <div className="flex items-center gap-3 mb-6 text-primary">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">1. Information We Collect</h2>
          <p className="text-base-content/80 mb-2">
            We collect the following information to provide our delivery
            service:
          </p>
          <ul className="list-disc ml-6 text-base-content/80">
            <li>
              Personal identification (Name, Email address, Phone number).
            </li>
            <li>Delivery address for book shipments.</li>
            <li>Borrowing history and wishlist data.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">2. How We Use Your Data</h2>
          <p className="text-base-content/80">
            Your data is used solely to process book orders, manage returns, and
            improve our library recommendations. We do not sell your personal
            data to third-party advertisers.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">3. Security</h2>
          <p className="text-base-content/80">
            We prioritize the security of your data. We use Firebase
            Authentication for secure login and encrypted databases (MongoDB) to
            store your records.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
