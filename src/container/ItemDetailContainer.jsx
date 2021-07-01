import { useEffect, useState } from "react";
import ItemDetail from "../componentes/catalogo/itemdetail/ItemDetail";
import NavBar from "../componentes/navbar/NavBar";



function ItemDetailContainer () {

    const [items, setItems] = useState([]);

    useEffect( async () => {
        const response =  await fetch("./itemlist.json")
        const result = await response.json()
        console.table(result)
        setItems(result)
    },[]);

    return (

    <>
    <NavBar/>
    <ItemDetail items={items}/>
    
    </>
       

);
}


export default ItemDetailContainer;