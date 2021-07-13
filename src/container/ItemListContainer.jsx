import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../componentes/itemlist/ItemList";
import { StoreContext } from "../context/StoreContext";


function ItemListContainer () {
         
    const context = useContext(StoreContext);
    const aux = context.listItems;
    console.table(aux);

    const {category} = useParams(null);
    const [items, setItems] = useState(aux);

    useEffect (() => {
        //if the url have a category then filter if not show all the items
        let p = category ? aux.filter (element => element.category === category) : aux;
        setItems(p);          
        
    },[aux, category]);
      

    return (

    <>
    
    <ItemList items={items}></ItemList>
    
    </>
       

);
}


export default ItemListContainer;