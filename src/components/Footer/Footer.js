import React from 'react';

const Footer = () => {
    return (
        <div className='mt-20'>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> Clothing Warehouse </span>
                    {/* <a href="https://flowbite.com" class="flex items-center mb-4 sm:mb-0">
                        <img src="/docs/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo" />
                    </a> */}

                    <ul class="flex flex-wrap items-center mb-6 text-xl text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://www.linkedin.com/in/emrul-kayes-b61895237/" class="mr-4 hover:underline md:mr-6 "><i class="fa-brands fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/its-kayes" class="mr-4 hover:underline md:mr-6"><i class="fa-brands fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/kayes0000000/" class="mr-4 hover:underline md:mr-6 "><i class="fa-brands fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/___kayes__/" class="hover:underline"><i class="fa-brands fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> This Website is Design And Deploy by Emrul Kayes for Educational Purpose
                </span>
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© Copyright 2022</span>
            </footer>

        </div>
    );
};

export default Footer;