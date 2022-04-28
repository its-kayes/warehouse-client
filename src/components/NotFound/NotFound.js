import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div className='page-not-found'>
                <h1> 404 </h1>
                <h3> Page Not Found </h3>
                <p> The Page you are looking for is not found. Try search again or check your URL Path :( </p>
            </div>
        </div>
    );
};

export default NotFound;