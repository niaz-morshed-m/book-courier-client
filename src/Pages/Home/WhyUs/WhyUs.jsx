import Aos from 'aos';
import React, { useEffect } from 'react';

const WhyUs = () => {
    useEffect(() => {
             Aos.init();
           }, []);
         
           
    return (
      <div
        className=" my-25 space-y-5"
        data-aos-duration="5000"
        data-aos="fade-right"
      >
        <p className="text-4xl font-bold text-center">
          Why <span className="text-primary">Choose</span> Us
        </p>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start timeline-box">
              Library at Your Doorstep
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end timeline-box">
              Save Time, Read More
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">
              No Physical Barriers
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-end timeline-box">
              Minimal Effort, Maximum Access
            </div>
            <hr />
          </li>
        </ul>
      </div>
    );
};

export default WhyUs;