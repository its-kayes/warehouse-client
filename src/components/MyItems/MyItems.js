import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    let [myItems, setMyItems] = useState([]);
    let [user] = useAuthState(auth);

    let email = user.email;

    useEffect(() => {
        let url = `http://localhost:5000/myitems?email=${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMyItems(data));
    }, [user])


    return (
        <div>
            
            <h1> this is my items part {myItems.length} </h1>

        </div>
    );
};

export default MyItems;