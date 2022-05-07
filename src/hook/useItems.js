import { useEffect, useState } from "react"

let useItems = () => {
    let [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://lit-gorge-09323.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return [items, setItems];
}

export default useItems;