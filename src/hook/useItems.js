import { useEffect, useState } from "react"
import { useQuery } from "react-query";
import Loading from "../components/RequireAuth/Loading";

let useItems = () => {
    let [items, setItems] = useState([]);

    // let { data: item, isLoading, refetch }   


    useEffect(() => {
        fetch('https://lit-gorge-09323.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    // if (isLoading) {  
    //     return <Loading> </Loading>
    //     console.log(item);
    //     setItems(item);
    // }


    return [items, setItems];
}

export default useItems;