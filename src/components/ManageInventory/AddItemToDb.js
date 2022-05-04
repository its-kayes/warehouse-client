import auth from '../../firebase.init';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const AddItemToDb = () => {
    
    const [user, loading, error] = useAuthState(auth);
    if(user) {
        console.log(user);
    }
    let addItemTodb = event => {
        event.preventDefault();

        let name = event.target.name.value;
        let quantity = event.target.quantity.value;
        let supplier = event.target.supplier.value;
        let price = event.target.price.value;
        let body = event.target.body.value;
        let userImg = event.target.img.value;
        let email = event.target.email.value;
        let newItem = { name, quantity, supplier, price, body, userImg, email }
        console.log(newItem);
        event.target.reset();
        fetch('http://localhost:5000/additemtodb', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert(" Your Product Successfully Added :3 ");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className=''>
            {/* <h1>this is add item Form Part</h1> */}
            <div>

                <form onSubmit={addItemTodb} className="w-2/5 ">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                        <input type="email" value={user?.email} name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email Is..." required="" readOnly />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Item Name</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Item That You Want To Add" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Quantity </label>
                        <input type="number" name="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How Many Do You Want To Add" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Supplier Name </label>
                        <input type="text" name="supplier" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Supplier Name" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Price </label>
                        <input type="number" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Per Product Price" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Short Description </label>
                        <input type="text" name="body" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short Description of your Item" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Link of your product Image </label>
                        <input type="text" name="img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Link of your product Image" required="" />
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default AddItemToDb;