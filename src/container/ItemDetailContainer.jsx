import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../componentes/itemdetail/ItemDetails";


function ItemDetailContainer ({onAdd}) {
    const {id} = useParams()

    const [items, setItems] = useState([]);
    const [item, setItem] = useState({});


    useEffect(() => {
        const getItems = async () => {
          let p;
          if (items.length === 0) {
            const response = await fetch("/itemlist.json");
            let aux = await response.json();
            p = aux;
            setItems(aux);
          }
          p = items.find(element => element.id === Number(id));
          setItem(p);           
          
        };
        getItems();
      }, [items, id]);

    return (

    <> {
        item ?  <ItemDetails className="align-content-center" item={item} onAdd={onAdd}/> : <p>producto no encontrado</p>

    }
    
    
    
    </>
       

);
}


export default ItemDetailContainer;