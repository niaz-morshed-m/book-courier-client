import React from "react";
import { Link } from "react-router";
import { FaArrowLeft, FaCookieBite } from "react-icons/fa";

const CookiePolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <Link to="/" className="btn btn-ghost mb-6">
        <FaArrowLeft /> Back to Home
      </Link>

      <div className="bg-base-100 shadow-xl rounded-xl p-8 border border-base-200">
        <div className="flex items-center gap-3 mb-6">
          <FaCookieBite className="text-3xl text-orange-500" />
          <h1 className="text-3xl font-bold">Cookie Policy</h1>
        </div>

        <div className="alert alert-info mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            We use cookies to ensure you get the best experience on our website.
          </span>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">What are Cookies?</h2>
          <p className="text-base-content/80">
            Cookies are small text files stored on your device when you visit
            our website. They help us remember your login status and
            preferences.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">Types of Cookies We Use</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full border">
              <thead>
                <tr className="bg-base-200">
                  <th>Type</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">Essential</td>
                  <td>
                    Required for the website to function (e.g., Logging in,
                    Security tokens).
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Functional</td>
                  <td>
                    Remembering your dark/light mode preference and language
                    settings.
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Analytics</td>
                  <td>
                    Helping us understand which books are most popular
                    (Anonymous data).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3">Managing Cookies</h2>
          <p className="text-base-content/80">
            You can choose to disable cookies through your browser settings, but
            please note that some features of BookCourier (like placing an
            order) may not function correctly without them.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
