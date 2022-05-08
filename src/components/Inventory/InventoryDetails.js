import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const InventoryDetails = () => {
    let { id } = useParams();
    let [peritem, setPeritem] = useState();

    useEffect(() => {
        let url = `https://lit-gorge-09323.herokuapp.com/items/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPeritem(data));

    }, [])

    let updateStock = event => {
        event.preventDefault();
        let inputStockValue = event.target.number.value;
        let previousStock = (peritem?.quantity);
        let stock = parseInt(previousStock) + parseInt(inputStockValue);
        let newObject = { ...peritem, quantity: stock };

        let url = `https://lit-gorge-09323.herokuapp.com/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newObject)
        })
            .then(res => res.json())
            .then(data => {
                alert("Update Quintaty ");
                setPeritem(newObject);
                event.target.reset();
            })
    }


    let deliverStock = event => {
        event.preventDefault();
        let previousStock = (peritem?.quantity);
        let stock = parseInt(previousStock) - 1;
        let newObject = { ...peritem, quantity: stock };

        let url = `https://lit-gorge-09323.herokuapp.com/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newObject)
        })
            .then(res => res.json())
            .then(data => {
                alert("Update Quintaty ");
                setPeritem(newObject);
            })

    }

    return (
        <div>
            <div className='flex justify-around mt-14'>

                <div className=''>
                    <div className="grid-cols-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <p>
                            <img className="rounded-t-lg" src={peritem?.userImg} alt="" />
                        </p>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{peritem?.name}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Supply by {peritem?.supplier}</p>
                            <div className='pice-quantity'>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price:- {peritem?.price}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity:- {peritem?.quantity} Pice</p>
                            </div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{peritem?.body}</p>


                            <button type="button" onClick={deliverStock} className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"> <i className="fa-brands fa-get-pocket mr-2"></i>  Delivered </button>
                        </div>
                    </div>
                </div>

                <div className='items-center mt-32'>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-10 px-4 pt-3">
                            <p className='mb-6 text-xl font-medium text-gray-900 dark:text-white'> Restock Item </p>
                            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={peritem?.userImg} alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{peritem?.name}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">How many product do you want to add ?</span>

                            <form onSubmit={updateStock}>
                                <div className="flex mt-4 space-x-3 lg:mt-6">
                                    <input type="number" name="number" id="" className="inline-flex items-center w-24 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" />
                                    <input type="submit" value="Add" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
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

export default InventoryDetails;