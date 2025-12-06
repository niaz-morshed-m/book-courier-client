import React from 'react';

const BannerContent1 = () => {
    return (
      <div
        className="hero min-h-96"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/pj9xWvYH/istockphoto-511661096-612x612.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Get Books <span className='text-primary'>Delivered</span> to Your Home
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

export default BannerContent1;