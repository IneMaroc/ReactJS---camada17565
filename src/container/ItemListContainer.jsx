import { useEffect, useState } from "react";
import ItemList from "../componentes/catalogo/itemlist/ItemList"
import NavBar from "../componentes/navbar/NavBar";



function ItemListContainer () {

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
    <ItemList items={items}/>
    
    </>
       

);
}


export default ItemListContainer;