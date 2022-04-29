import React from 'react';
import Items from '../Items/Items';
import Mysterybox from '../Mysterybox/Mysterybox';
import Subscribe from '../Subscribe/Subscribe';
import './Home.css';

const Home = () => {
    return (
        <div>
            {/* <h1> This Is home part </h1> */}
            <div>
                <img src="warehouse.png" alt="" />
            </div>
            <div className='home-banner-mobile'>
                <img src="warehouse_mobile.png" alt="" />
            </div>
            <div>
                <p className='text-4xl mt-12 mb-12 font-bold tracking-tight text-gray-900 dark:text-white'> Item You Can Buy </p>
                <Items></Items>
            </div>
            <div>
                <h1 className='text-5xl underline mt-12 mb-12 font-bold tracking-tight text-gray-900 dark:text-white mt-28'> Surprise For You....!? </h1>
                <Mysterybox> </Mysterybox>
            </div>

            <Subscribe> </Subscribe>

        </div>
    );
};

export default Home;