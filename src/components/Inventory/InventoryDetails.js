import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

let updateStock;

const InventoryDetails = () => {
    let { id } = useParams();
    let [peritem, setPeritem] = useState();
    let [newupdateStock, setNewupdateStock] = useState();

    useEffect(() => {
        let url = `http://localhost:5000/items/${id}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPeritem(data));

    }, [])
    // useEffect()
    // console.log(peritem?.userImg);

    let updateStock = event => {
        event.preventDefault();
        let newStock = event.target.number.value;
        // console.log(newStock);
        // console.log(parseInt(peritem?.quantity));

        let stockk = (peritem?.quantity)

        // let stock = parseInt((peritem?.quantity)) + parseInt(newStock);
        let stock = parseInt(stockk) + parseInt(newStock);
        updateStock = stock;
        // setNewupdateStock(parseInt(stock));
        
        console.log("previous",stockk);
        console.log("after stock",stock);
        
        console.log("update", updateStock);
        // if(stockk != stock) {
        // }
        // setPeritem()
    }



    return (
        <div className='flex justify-around mt-14'>

            <div className=''>
                <div className="grid-cols-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={peritem?.userImg} alt="" />
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{peritem?.name}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Supply by {peritem?.supplier}</p>
                        <div className='pice-quantity'>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price:- {peritem?.price}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity:- {peritem?.quantity} Pice</p>
                        </div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{peritem?.body}</p>


                        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Delivered
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>


            </div>




            <div className='items-center mt-32'>
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pb-10 px-4 pt-6">
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
    );
};

export default InventoryDetails;