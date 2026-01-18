import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const TermsOfUse = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <Link to="/" className="btn btn-ghost mb-6">
        <FaArrowLeft /> Back to Home
      </Link>

      <div className="bg-base-100 shadow-xl rounded-xl p-8 border border-base-200">
        <h1 className="text-3xl font-bold mb-6 text-primary">Terms of Use</h1>
        <p className="mb-4 text-gray-500">Last Updated: October 2024</p>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
          <p className="text-base-content/80">
            By accessing and using BookCourier, you agree to comply with and be
            bound by these terms. If you do not agree, please do not use our
            library services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">2. Borrowing & Returns</h2>
          <ul className="list-disc ml-6 text-base-content/80 space-y-2">
            <li>Users may borrow up to 5 books at a time.</li>
            <li>The standard borrowing period is 14 days.</li>
            <li>
              Books must be returned in the same condition they were borrowed.
            </li>
            <li>
              Late returns may incur a nominal fee as decided by the
              administration.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">3. User Accounts</h2>
          <p className="text-base-content/80">
            You are responsible for maintaining the confidentiality of your
            account credentials. Any activity that occurs under your account is
            your responsibility.
          </p>
        </section>

        <div className="divider"></div>
        <p className="text-sm text-gray-500 text-center">
          Contact support@bookcourier.com for legal inquiries.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
