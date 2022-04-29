import React from 'react';

const Subscribe = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-3xl mb-3'> SUBSCRIBE TO GET ON TIME UPDATE </h1>
            <span className='text-lg'> We are not share your email with anyone </span>

            <div className="flex justify-center mt-3">
                <input type="search" id="default-search" className="block w-2/4 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Mail Address" required="" />
                <button className="text-white ml-3 right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Alert</button>
            </div>

        </div>
    );
};

export default Subscribe;