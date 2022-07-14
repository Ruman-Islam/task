import React from 'react';
import AboutUs from '../components/AboutUs';
import Hero from '../components/Hero';
import OurCustomer from '../components/OurCustomer';
import OurPortfolio from '../components/OurPortfolio';
import OurProduct from '../components/OurProduct';
import Pricing from '../components/Pricing';
import WhatWeDo from '../components/WhatWeDo';

const Home = () => {
    return (
        <div className='bg-light px-4'>
            <Hero />
            <OurCustomer />
            <WhatWeDo />
            <OurProduct />
            <Pricing />
            <AboutUs />
            <OurPortfolio />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Home;