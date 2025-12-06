import React from 'react';

const BannerContent2 = () => {
    return (
      <div
        className="hero min-h-96"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/RTtrSn73/pngtree-an-open-book-cup-of-coffee-and-a-book-picture-image-13051310.png)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Read Anytime
              <span className="text-primary"> Anywhere</span>
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

export default BannerContent2;