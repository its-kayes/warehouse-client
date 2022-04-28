import React from 'react';

const Footer = () => {
    return (
        <div>

            <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
                <div class="sm:flex sm:items-center sm:justify-between">
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> Clothing Warehouse </span>
                    {/* <a href="https://flowbite.com" class="flex items-center mb-4 sm:mb-0">
                        <img src="/docs/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo" />
                    </a> */}
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">  </span>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> This Website is Design And Deploy by Kayes for Educational Purpose
                    </span>
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Copyright. All Rights Reserved.
                    </span>
            </footer>

        </div>
    );
};

export default Footer;