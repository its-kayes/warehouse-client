import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hook/useItems';
import Loading from '../RequireAuth/Loading';
import './Items.css';

const Items = () => {
    let navigate = useNavigate();

    let [items, setItems] = useItems()

    if (!items.length) {
        return <Loading> </Loading>
    }

    console.log(items);

    let homItemsId = 6
    let homeItems = items.filter(item => item.postId === homItemsId);


    let navigateToInventory = (id) => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div>
            <div className='items-container'>
                {
                    homeItems.map(item =>
                        <div className="grid-cols-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={item._id}>
                            <p>
                                <img className="rounded-t-lg" src={item.userImg} alt="" />
                            </p>
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Supply by {item.supplier}</p>
                                <div className='pice-quantity'>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price:- {item.price}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity:- {item.quantity} Pice</p>
                                </div>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.body}</p>


                                <button onClick={()=> navigateToInventory(item._id)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Stock Update
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Items;