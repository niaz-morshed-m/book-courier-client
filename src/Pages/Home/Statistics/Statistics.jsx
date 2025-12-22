import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Statistics = () => {
   useEffect(() => {
             AOS.init();
           }, []);
    return (
      <>
        <p className="text-4xl font-bold text-center my-10 mt-25">Statistics</p>
        <div
          data-aos-duration="5000"
          data-aos="fade-left"
          className="py-7 text-center flex justify-between shadow-lg border border-[#d5d9e0] rounded-xl px-8 flex-col gap-2.5 md:flex-row lg:flex-row mb-6"
        >
          <div>
            <p className="text-primary text-4xl font-bold">10K+</p>
            <p>Users Registered</p>
          </div>
          <div>
            <p className="text-primary text-4xl font-bold">50K+</p>
            <p className='ml-[-10px]'>Books Sold</p>
          </div>
          <div>
            <p className="text-primary text-4xl font-bold">1K+</p>
            <p>Librarians</p>
          </div>
        </div>
      </>
    );
};

export default Statistics;