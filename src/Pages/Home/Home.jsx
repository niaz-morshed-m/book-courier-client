import React from 'react';
import Banner from './Banner/Banner';
import Coverage from './Coverage/Coverage';
import CoverageBanner from './Coverage/CoverageBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='my-14'>
                <p className='text-3xl font-extrabold text-center'>Our Coverage</p>
               <CoverageBanner></CoverageBanner>
            </div>
        </div>
    );
};

export default Home;