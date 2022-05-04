import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useItems from '../../hook/useItems';
// import Items from '../Items/Items';

const ManageInventory = () => {

    let [items, setItems] = useItems()
    let navigate = useNavigate();

    let navigateToInventory = (id) => {
        navigate(`/inventory/${id}`);
    }

    let deleteItem = id => {
        let sureDelete = window.confirm(" Are You Sure to Delete this Products ? ");
        if(sureDelete) {
            // console.log(id);
            let url = `http://localhost:5000/items/${id}`;
            fetch( url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then( data => {
                // console.log(data);
                if(data.deletedCount > 0) {
                    let presentItem = items.filter( item => item._id !== id );
                    setItems(presentItem);
                }
            })
        } 
    }


    return (
        <div>
            <div>
                <Link to='/additemtodb' className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"> <i className="fa-solid fa-plus mr-3"></i> Add Item To Our Warehouse </Link>

            </div>


            <div className='items-container'>
                {
                    items.map(item =>
                        <div className="grid-cols-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={item._id}>
                            <p>
                                <img className="rounded-t-lg" src={item.userImg} alt="" />
                            </p>
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Supply by {item.supplier}</p>
                                <div className='pice-quantity'>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price:- $ {item.price}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity:- {item.quantity} Pice</p>
                                </div>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.body}</p>


                                <div className='flex justify-around'>
                                    <button onClick={() => navigateToInventory(item._id)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                        Stock Update
                                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </button>

                                    <button type="button" onClick={()=> deleteItem(item._id)} className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"> <i className="fa-solid fa-trash-can mr-2"></i> Delete </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

















        // <div>
        //     <h1 className='text-4xl mt-12 mb-12 font-bold tracking-tight text-gray-900 dark:text-white'> All Items That Can Manage You </h1>
        //     <Items>  </Items>

        // </div>
    );
};

export default ManageInventory;