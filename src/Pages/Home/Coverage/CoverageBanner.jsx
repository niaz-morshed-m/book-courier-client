import Aos from "aos";
import React, { useEffect } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const CoverageBanner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos-duration="5000"
      data-aos="fade-up"
      className="w-full flex flex-col md:flex-row items-center gap-12 p-8"
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://i.ibb.co.com/Dg4v0m2T/5.webp"
          alt="Coverage Map"
          className="rounded-lg w-full shadow"
        />
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold">
          Delivering <span className="text-primary"> Knowledge</span> Across All
          Districts
        </h2>

        <p className="text-secondary text-xl">
          BookCourier is rapidly expanded its delivery network across whole
          country to ensure your favorite books reach you, wherever you are.
          Check our growing service areas!
        </p>

        <Link to="/coverage">
          <button className="btn bg-primary rounded-xl text-accent">
            <span>
              <FaMapLocationDot />
            </span>{" "}
            View Coverage Map
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CoverageBanner;
