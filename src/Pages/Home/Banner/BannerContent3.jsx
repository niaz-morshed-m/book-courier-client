import React from 'react';

const BannerContent3 = () => {
    return (
      <div
        className="hero min-h-96"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/B5FS4sp6/cozy-study-room-stockcake.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Quick Delivery From <span className="text-primary"> Your Favorite</span> Libraries
              
            </h1>
            <p className="mb-5">
              Borrow your favorite books from nearby libraries with just a
              click.
            </p>
          </div>
        </div>
      </div>
    );
};

export default BannerContent3;