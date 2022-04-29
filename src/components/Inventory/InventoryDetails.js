import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    let {id} = useParams();
    return (
        <div>
            <h1> this is inventory item {id} </h1>
        </div>
    );
};

export default InventoryDetails;