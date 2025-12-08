import React from 'react';
import Banner from './Banner/Banner';
import Coverage from './Coverage/Coverage';
import CoverageBanner from './Coverage/CoverageBanner';
import LatestBooks from './LatestBooks/LatestBooks';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <div className="my-14">
          <p className="text-3xl font-extrabold text-center">Our Coverage</p>
          <CoverageBanner></CoverageBanner>
        </div>

<div>
    <LatestBooks></LatestBooks>
</div>

        <div className='flex justify-center items-center mx-auto m-25'>
          <span className="loading loading-bars loading-xl"></span>
        </div>
      </div>
    );
};

export default Home;