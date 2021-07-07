import { useEffect, useState } from "react";
import ItemList from "../componentes/itemlist/ItemList";
import { useParams } from "react-router-dom";





function ItemListContainer () {
    
    const {id} = useParams();
    const [items, setItems] = useState([]);
    

    useEffect(() => {
        const getItems = async () => {
                 
            const response = await fetch("/itemlist.json");
            const result = await response.json();
            //if the url have an id then filter if not show all the items
            let aux = id ? result.filter (element => element.category === Number(id)) : result;
            setItems(aux);  
               
        };
        getItems();
    },[id]);


    return (

    <>
    
    <ItemList items={items}></ItemList>
    
    </>
       

);
}


export default ItemListContainer;