import React from 'react';
import BannerContent1 from '../../../assets/banner1.PNG';
import BannerContent2 from '../../../assets/banner2.PNG';
import BannerContent3 from '../../../assets/banner3.PNG';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
        <div className='px-6 space-y-4 mt-3'>
            <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                    >
                        <div>
                            <img src={BannerContent1} />
                        </div>
                        <div>
                            <img src={BannerContent2} />
                        </div>
                        <div>
                            <img src={BannerContent3} />
                        </div>
                    </Carousel>
        </div>
    );
};

export default Banner;