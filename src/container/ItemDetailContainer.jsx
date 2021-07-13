import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../componentes/itemdetail/ItemDetails";
import { StoreContext } from "../context/StoreContext";


function ItemDetailContainer () {
  const globalStatus = useContext(StoreContext);
  const items = globalStatus.listItems;
  console.table(items);

  const {id} = useParams();
  const [item, setItem] = useState(items);

  useEffect (() => {

    let p = items.find(element => element.id === Number(id));
    setItem(p);           
    
  },[items, id]);
 
  return (

  <> {
      item ?  <ItemDetails className="align-content-center" item={item} /> : <p>producto no encontrado</p>

  }
    
  </>
  
);
}


export default ItemDetailContainer;