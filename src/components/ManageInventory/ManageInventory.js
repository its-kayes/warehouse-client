import React from 'react';
import Items from '../Items/Items';

const ManageInventory = () => {
    return (
        <div>
            <h1 className='text-4xl mt-12 mb-12 font-bold tracking-tight text-gray-900 dark:text-white'> All Items That Can Manage You </h1>
            <Items>  </Items>

        </div>
    );
};

export default ManageInventory;