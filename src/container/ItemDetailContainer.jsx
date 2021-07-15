import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../componentes/itemdetail/ItemDetails";
import { StoreContext } from "../context/StoreContext";


function ItemDetailContainer () {
  const {listItems} = useContext(StoreContext);
  

  const {id} = useParams();
  const [item, setItem] = useState(listItems);

  useEffect (() => {

    let p = listItems.find(element => element.id === Number(id));
    setItem(p);           
    
  },[listItems, id]);
 
  return (

  <> {
      item ?  <ItemDetails className="align-content-center" item={item} /> : <p>producto no encontrado</p>

  }
    
  </>
  
);
}


export default ItemDetailContainer;