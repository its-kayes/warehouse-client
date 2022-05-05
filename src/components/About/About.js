import React from 'react';

const About = () => {
    return (
        <div>
            <div className='flex justify-center'>

                <div class="p-5 mt-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    
                    <img class="rounded-t-lg" src="https://i.ibb.co/jbWcFpv/1640680010421-1-1.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Emrul Kayes</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Try my best to be a Web-Developer and I'll be successful, insha'Allah.
                            <ul className='mt-4'>
                                <span className='underline'>Good at ( Backend )</span> :-  React.js,
                                Node.js,
                                Express.js,
                                Moongodb,
                                Firebase.

                            </ul> </p>

                        <ul className="flex justify-center flex-wrap items-center mb-6 text-xl text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="https://www.linkedin.com/in/emrul-kayes-b61895237/" className="mr-4 hover:underline md:mr-6 "><i className="fa-brands fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="https://github.com/its-kayes" className="mr-4 hover:underline md:mr-6"><i className="fa-brands fa-github"></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/kayes0000000/" className="mr-4 hover:underline md:mr-6 "><i className="fa-brands fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/___kayes__/" className="hover:underline"><i className="fa-brands fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;