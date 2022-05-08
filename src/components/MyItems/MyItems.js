import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    let [myItems, setMyItems] = useState([]);
    let [user] = useAuthState(auth);
    let navigate = useNavigate();

    let email = user.email;

    useEffect(() => {
        let url = `https://lit-gorge-09323.herokuapp.com/myitems?email=${email}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyItems(data));
    }, [user])



    let navigateToInventory = (id) => {
        navigate(`/inventory/${id}`);
    }

    let deleteItem = id => {
        let sureDelete = window.confirm(" Are You Sure to Delete this Products ? ");
        if (sureDelete) {
            let url = `https://lit-gorge-09323.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        let presentItem = myItems.filter(item => item._id !== id);
                        setMyItems(presentItem);
                    }
                })
        }
    }


    return (
        <div>

            <h1 className='text-3xl  mt-8 mb-12 font-bold tracking-tight text-gray-900 dark:text-white'> Your Total Product Is:- {myItems.length}  </h1>

            <div>

                <div className='items-container'>
                    {
                        myItems.map(item =>
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

                                        <button type="button" onClick={() => deleteItem(item._id)} className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"> <i className="fa-solid fa-trash-can mr-2"></i> Delete </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>

        </div>
    );
};

export default MyItems;