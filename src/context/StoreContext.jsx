import { createContext, useEffect, useState } from "react";


export const StoreContext = createContext();

export const StoreComponentContext = ({defaultValue= [], children}) => {

    const [listItems, setListItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartQty, setCartQty] = useState([]);


    const onAdd = (item, q) => {

        setCart (item);
        setCartQty (q);
        console.log(cart);
        console.log(cartQty);

       

    };
    
    const getItems = async () => {
           
            
        const response = await fetch("/itemlist.json");
        const result = await response.json();
       
        setListItems(result);
      
    
    };

    useEffect(() => {
        
        getItems();
    }, []);

    
    return <StoreContext.Provider value={{listItems, getItems, cart, setCart, onAdd, }}>{children}</StoreContext.Provider>
};