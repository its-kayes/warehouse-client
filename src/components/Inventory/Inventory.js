import React from 'react';
import { Link } from 'react-router-dom';
import Items from '../Items/Items';

const Inventory = () => {
    return (
        <div>
            <Items>  </Items>
            <p className='mt-20'>
                <Link to='/manageinventories' className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Manage Inventories <i className="fa-solid fa-screwdriver-wrench mx-2"></i>
                    </span>
                </Link>
            </p>
        </div>
    );
};

export default Inventory;