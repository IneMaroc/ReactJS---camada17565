import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../componentes/itemdetail/ItemDetails";
import Loader from "../componentes/loader/Loader";
import { StoreContext } from "../context/StoreContext";


function ItemDetailContainer () {
  const {listItems} = useContext(StoreContext);
  

  const {id} = useParams();
  const [item, setItem] = useState(listItems);

  useEffect (() => {

    let p = listItems.find(element => element.id === (id));
    setItem(p);           
    
  },[listItems, id]);
 
  return (

  <> {
      item ?  <ItemDetails className="align-content-center" item={item} /> : <Loader/>

  }
    
  </>
  
);
}


export default ItemDetailContainer;