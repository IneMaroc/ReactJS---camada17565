import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../componentes/itemlist/ItemList";
import Loader from "../componentes/loader/Loader";
import { StoreContext } from "../context/StoreContext";


function ItemListContainer () {
         
    const {listItems} = useContext(StoreContext);
    
    const {category} = useParams(null);
    const [items, setItems] = useState([]);
    

    useEffect (() => {

        
        //if the url have a category then filter if not show all the items
        let p = category ? listItems.filter (element => element.category === category) : listItems;
        setItems(p);          
        
    },[listItems, category]);
      

    return (

    <>
    {items? 
     <ItemList className="itemlistcontainer" items={items}></ItemList>: <Loader/> 

    }
    
    
    
    </>
       

);
}


export default ItemListContainer;