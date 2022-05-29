import { async } from '@firebase/util';
import React from 'react';
import { useCreateUserWithEmailAndPassword, createUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Social/Social';




let errorElement;

const Register = () => {

    const [sendEmailVerification, sending, verifyError] = useSendEmailVerification(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let registerSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
    }


    if (error || verifyError) {
        errorElement = <p className='text-center bg-red-700 rounded-full mt-5 text-white p-3'>  Error Login </p>
    }

    return (
        <div>
  
            <div className='flex justify-center'>

                <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 ">
                    <form onSubmit={registerSubmit} className="space-y-6">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Creat Account in Warehouse </h5>
                        <div>
                            <label htmlFor="email" name="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" name="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me! </label>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Creat an account in Warehouse</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?
                            <Link to="/login"> <span className='text-blue-700 hover:underline dark:text-blue-500'>Please Login</span> </Link>
                        </div>
                    </form>
                    <div className=''> 
                        {errorElement}
                    </div>
                    <p className='mt-5'> ________________________________________ </p>
                    <Social> </Social>
                </div>
            </div>
        </div>
    );
};

export default Register;