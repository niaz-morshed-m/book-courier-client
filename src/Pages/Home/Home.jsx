import React from 'react';
import Banner from './Banner/Banner';
import Coverage from './Coverage/Coverage';
import CoverageBanner from './Coverage/CoverageBanner';
import LatestBooks from './LatestBooks/LatestBooks';
import WhyUs from './WhyUs/WhyUs';
import HowItWorks from './HowItWorks/HowItWorks';
import Statistics from './Statistics/Statistics';
import FAQ from './FAQ/FAQ';
import Testimonials from './Testimonials/Testimonials';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <div className="my-14">
          <p className="text-4xl font-bold text-center">Our Coverage</p>
          <CoverageBanner></CoverageBanner>
        </div>

        <div>
          <LatestBooks></LatestBooks>
        </div>
        <div>
          <WhyUs></WhyUs>
        </div>
        <div>
          <HowItWorks></HowItWorks>
        </div>
        <div>
          <Statistics></Statistics>
        </div>
        <div>
          <FAQ></FAQ>
        </div>
        <div>
          <Testimonials></Testimonials>
        </div>
       <div><Newsletter></Newsletter></div>
      </div>
    );
};

export default Home;