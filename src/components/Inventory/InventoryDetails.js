import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    let {id} = useParams();
    let [peritem, setPeritem] = useState();

    useEffect(()=> {
        let url = `http://localhost:5000/items/${id}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data=> setPeritem(data));

    },[])
    // useEffect()
    return (
        <div>
            <h1> this is inventory item {id} </h1>
            <h2> Item Name:- {peritem?.name} </h2>
        </div>
    );
};

export default InventoryDetails;