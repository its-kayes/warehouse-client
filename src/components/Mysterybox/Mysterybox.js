import React from 'react';
import './Mysterybox.css';

const Mysterybox = () => {
    return (
        <div className='flex items-center mystery-container'>
            <div className='px-20'>
                <h1 className='text-4xl mb-5 font-bold tracking-tight text-gray-900 dark:text-white'> Mystery box </h1>
                <p className='m-text'> It's a one kind of Mystery box! In this Mystery box you can get any kind of cloth for your size. Best Brands for your choose </p>
            </div>
            <div>
                <img src="clothing-box.png" alt="" />
            </div>
        </div>
    );
};

export default Mysterybox;